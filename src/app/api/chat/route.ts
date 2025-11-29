import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// Initialize Gemini with production configuration
const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0.2, // Lower temperature for more consistent/reliable responses
  apiKey: process.env.GOOGLE_API_KEY, 
});

// --- UPDATED DOCTORS DATABASE (SINGLE DOCTOR MODE) ---
const DOCTORS_DB = {
  dr_pranjal: {
    id: "dr_pranjal",
    name: "Dr. Pranjal",
    specialty: "General Dentist",
    // Ensure image URLs are valid or use reliable placeholders in production
    image_url: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg",
    short_bio: "Friendly general dentist focused on patient comfort, preventive care, and painless treatments.",
  }
};

// --- STATE DEFINITION ---
// Strongly typed state for better maintainability
const AgentState = Annotation.Root({
  user_message: Annotation<string>(),
  chat_history: Annotation<string[]>(),
  intent: Annotation<string>(),
  selected_doctor_id: Annotation<string>(),
  doctor_data: Annotation<any>(),
  final_response: Annotation<any>(),
});

// --- NODES ---

async function intentClassifierNode(state: typeof AgentState.State) {
  const msg = state.user_message.trim();
  const history = (state.chat_history || []).slice(-5).join("\n");

  // 1. Rule-based Triggers (Fast Path)
  if (msg === "INIT_CHAT") return { intent: "welcome" };
  // Maps specific booking action to the redirect node
  if (msg.includes("ACTION_NAVIGATE_BOOKING")) return { intent: "booking_redirect" };
  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").slice(2).join("_");
    return { intent: "doctor_details", selected_doctor_id: docId };
  }

  // 2. LLM Classification (Smart Path)
  const systemPrompt = `
    You are the receptionist AI for Smile Science Dentistry. 
    Classify the user's intent into exactly one of these categories:
    [find_doctor, services_list, emergency, booking_redirect, general_chat]

    Context:
    ${history}

    Definitions:
    - 'find_doctor': User asks to see a doctor, dentist, surgeon, or asks "who is available?".
    - 'services_list': User EXPLICITLY asks for a list of services (e.g., "what treatments do you do", "show services", "menu").
    - 'emergency': User mentions pain, blood, accident, broken tooth, swelling, or urgency.
    - 'booking_redirect': User explicitly says they want to book, schedule, or make an appointment.
    - 'general_chat': User asks SPECIFIC questions about treatments (e.g., "what is cosmetic", "how much is rct"), payments, location, timings, or small talk.

    Input: "${msg}"
    
    Return ONLY the category word.
  `;

  try {
    const response = await llm.invoke(systemPrompt);
    const intent = response.content.toString().trim().toLowerCase();
    
    // Fallback if LLM returns hallucinations
    const validIntents = ["find_doctor", "services_list", "emergency", "booking_redirect", "general_chat"];
    return { intent: validIntents.includes(intent) ? intent : "general_chat" };
  } catch (e) {
    console.error("Classifier Error:", e);
    return { intent: "general_chat" };
  }
}

async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = (state.chat_history || []).join("\n");

  // Production-grade Prompt: 'Psychologist/Friend' Persona
  const prompt = `
You are the AI Assistant for Smile Science Dentistry in Neeladri Nagar, Bangalore.
Persona: Warm, empathetic, and professional—like a caring psychologist or a helpful friend. 

Goal: Make the user feel understood, answer their query concisely, and gently guide them to book an appointment.

Language Protocol:
- Match Language: If user speaks Hindi/Hinglish -> Reply in Hindi. Else -> English.
- Brevity: Max 2-3 sentences. No long paragraphs.

Strict Rules:
- Location: If the user asks for the location, address, or "where are you located", YOU MUST use this exact format:
  "Absolutely! You can find Smile Science Dentistry here: https://maps.app.goo.gl/AvL3UadnFkhEzxWJA

  Shall we book a visit with Dr. Pranjal?"
- Formatting: Do NOT use markdown bold syntax (double asterisks) anywhere. Use plain text only.
- Questions: Answer specific questions about what a treatment is (e.g., "What is cosmetic dentistry?") naturally.

Clinic Knowledge Base:
- Doctor: Dr. Pranjal (General Dentist).
- Location: 4th Floor, 224, 3rd Cross Road, Neeladri Nagar, Electronic City Phase 1, Bangalore.
- Timings: Mon–Sat 12 PM–8 PM | Sun 12 PM–5 PM.
- Contact: 080-48903967.
- Payment Methods: We accept Cash, UPI (GPay/PhonePe), and Credit/Debit Cards.
- Services Detail:
  - Cosmetic Dentistry: Smile makeovers, veneers, and teeth whitening to enhance the look of your smile.
  - Root Canals (RCT): Painless procedure to save infected teeth.
  - Implants: Permanent replacement for missing teeth.
  - Orthodontics: Braces and Invisalign aligners to straighten teeth.
  - Laser Dentistry: Advanced, painless gum treatments.

Context:
${history}

User: "${msg}"

Response Guidelines:
1. Empathize first (e.g., "I understand that can be painful.").
2. Answer the specific question clearly using the knowledge base.
3. Call to Action: "Shall we book a visit with Dr. Pranjal?"
`;

  const response = await llm.invoke(prompt);

  return {
    final_response: {
      type: "text",
      // Ensure no bold syntax leaks through
      text: response.content.toString().replace(/\*\*/g, ""),
    },
  };
}

// --- STANDARD NODES ---

function welcomeMessageNode() {
  return {
    final_response: {
      type: "welcome_card",
      text: "Namaste! 🙏 Welcome to Smile Science Dentistry.\nI'm here to ensure your smile stays healthy. How can I help you today?",
      buttons: [
        { label: "Book Appointment", payload: "ACTION_NAVIGATE_BOOKING" },
        { label: "Meet Dr. Pranjal", payload: "Who is the doctor?" },
        { label: "Our Treatments", payload: "What treatments do you do?" },
        // Changed label from "I have Pain" to "Emergency"
        { label: "Emergency", payload: "I have an emergency" },
      ],
    },
  };
}

function retrieveDoctorProfileNode(state: typeof AgentState.State) {
  // Production Logic: Single Doctor Architecture
  // Regardless of query, we route to the primary doctor, Dr. Pranjal.
  const doc = DOCTORS_DB["dr_pranjal"];

  return {
    doctor_data: doc,
    selected_doctor_id: doc.id,
    final_response: {
      type: "card",
      // Clean text without bold
      text: `Our lead specialist is ${doc.name}.\n${doc.short_bio}`,
      image: doc.image_url,
      buttons: [
        { label: "View Details", payload: `ACTION_DETAILS_${doc.id}` },
        { label: "Book Visit", payload: "ACTION_NAVIGATE_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  // Robust fallback: If ID is missing, default to Dr. Pranjal
  const docId = state.selected_doctor_id || "dr_pranjal";
  const doc = DOCTORS_DB[docId as keyof typeof DOCTORS_DB] || DOCTORS_DB["dr_pranjal"];

  return {
    final_response: {
      type: "card",
      // Removed bold tags around name and labels
      text: `${doc.name}\n${doc.specialty}\n\n${doc.short_bio}\n\nAvailability: Mon-Sat (12 PM - 8 PM)`,
      buttons: [{ label: "Book with Dr. Pranjal", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

// Replaced form logic with redirect logic
function bookingRedirectNode() {
  return {
    final_response: { 
      type: "text", 
      // Updated to include Markdown links without bold syntax
      text: "To book your appointment with Dr. Pranjal, please choose an option below:",
      buttons: [
        { label: "Go to Booking Page", payload: "/book" },
        { label: "Book on WhatsApp", payload: "https://wa.me/916206700442?text=I%20would%20like%20to%20book%20an%20appointment" }
      ]
    },
  };
}

function serviceInfoNode() {
  return {
    final_response: {
      type: "text",
      // Removed all ** bold syntax
      text: "We specialize in:\n\n✨ Cosmetic: Smile Makeovers\n🦷 Restorative: Painless Root Canals & Implants\n⚙️ Ortho: Braces & Aligners\n🛡️ General: Laser Dentistry & Kids Care\n\nDr. Pranjal ensures every procedure is gentle.",
      buttons: [{ label: "Book Checkup", payload: "ACTION_NAVIGATE_BOOKING" }],
    },
  };
}

function emergencyNode() {
  return {
    final_response: {
      type: "text",
      // Removed bold syntax
      text: "🚨 We are here for you.\n\nIf you are in pain, please visit our clinic in Neeladri Nagar immediately or call us.\n\n📍 [Get Directions](https://maps.app.goo.gl/AvL3UadnFkhEzxWJA)\n📞 080-48903967",
      buttons: [
        { label: "Call Now", payload: "tel:08048903967" },
        { label: "Book Urgent Slot", payload: "ACTION_NAVIGATE_BOOKING" }
      ],
    },
  };
}

// --- WORKFLOW CONSTRUCTION ---

const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("booking_redirect", bookingRedirectNode) // Updated node name
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

// Conditional Logic
const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    booking_redirect: "booking_redirect",
    services_list: "services", // Maps services_list intent to serviceInfoNode
    emergency: "emergency",
    general_chat: "general",
  };
  return intentMap[state.intent || "general_chat"] || "general";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);

// All nodes terminate at END
["welcome", "find_doctor", "doctor_details", "booking_redirect", "services", "emergency", "general"].forEach((node:any) => {
  workflow.addEdge(node, END);
});

const appGraph = workflow.compile();

// --- API HANDLER ---
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { message, history } = body;

    const result = await appGraph.invoke({
      user_message: message,
      chat_history: history || [],
    });

    return NextResponse.json(result.final_response);

  } catch (error) {
    console.error("Chat Graph Error:", error);
    return NextResponse.json(
      { 
        type: "text", 
        text: "I'm having trouble connecting to the server. Please call us directly at 080-48903967 for assistance." 
      },
      { status: 500 }
    );
  }
}