import { NextRequest, NextResponse } from "next/server";
import { StateGraph, END, Annotation } from "@langchain/langgraph";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";


const llm = new ChatGoogleGenerativeAI({
  model: "gemini-2.0-flash",
  temperature: 0,
  apiKey: process.env.GOOGLE_API_KEY, 
});

// --- MOCK DATABASE ---
const DOCTORS_DB = {
  dr_01: {
    id: "dr_01",
    name: "Dr. Sarah Jenkins",
    specialty: "Orthodontist",
    image_url: "https://img.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg",
    short_bio: "Top rated Invisalign provider.",
  },
  dr_02: {
    id: "dr_02",
    name: "Dr. Kenji Tanaka",
    specialty: "Oral Surgeon",
    image_url: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
    short_bio: "Specialist in painless extractions.",
  },
};

// --- STATE DEFINITION ---
// In JS LangGraph, we use Annotation to define the state structure
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
  // Get last 5 messages for context
  const history = (state.chat_history || []).slice(-5).join("\n");

  if (msg === "INIT_CHAT") return { intent: "welcome" };
  if (msg.includes("FORM_SUBMITTED")) return { intent: "process_booking" };
  if (msg.includes("ACTION_TRIGGER_BOOKING")) return { intent: "show_form" };
  if (msg.includes("ACTION_DETAILS")) {
    const docId = msg.split("_").pop(); // Get last part
    return { intent: "doctor_details", selected_doctor_id: docId };
  }

  const systemPrompt = `
    Classify intent: [find_doctor, services, emergency, general_chat].
    Context:
    ${history}
    Rules:
    - Ask for doctor/surgeon/staff -> 'find_doctor'
    - Whitening/implants/price -> 'services'
    - Pain/blood/urgent -> 'emergency'
    - Otherwise -> 'general_chat'
    Return ONLY the intent word.
  `;

  try {
    const response = await llm.invoke(`${systemPrompt}\nUser Input: ${msg}`);
    const intent = response.content.toString().trim().toLowerCase();
    return { intent };
  } catch (e) {
    return { intent: "general_chat" };
  }
}

async function generalChatNode(state: typeof AgentState.State) {
  const msg = state.user_message;
  const history = (state.chat_history || []).join("\n");

  const prompt = `
    You are a helpful dental assistant at Comacks Dental.
    Use the chat history to answer contextually.
    Chat History:
    ${history}
    Patient: ${msg}
    Answer briefly and professionally.
  `;

  const response = await llm.invoke(prompt);

  return {
    final_response: {
      type: "text",
      text: response.content.toString(),
    },
  };
}

// --- STANDARD NODES ---

function welcomeMessageNode() {
  return {
    final_response: {
      type: "welcome_card",
      text: "Welcome to Comacks Dental! 🦷\nI'm your AI assistant. How can I help you today?",
      buttons: [
        { label: "Book Appointment", payload: "ACTION_TRIGGER_BOOKING" },
        { label: "Meet the Doctors", payload: "I want to see your doctors" },
        { label: "Our Services", payload: "What services do you offer?" },
        { label: "Emergency", payload: "I have an emergency" },
      ],
    },
  };
}

function retrieveDoctorProfileNode(state: typeof AgentState.State) {
  const msg = state.user_message.toLowerCase();
  let doc;
  
  if (msg.includes("surgeon") || msg.includes("implant")) {
    doc = DOCTORS_DB["dr_02"];
  } else {
    doc = DOCTORS_DB["dr_01"];
  }

  return {
    doctor_data: doc,
    selected_doctor_id: doc.id,
    final_response: {
      type: "card",
      text: `I recommend **${doc.name}**.`,
      image: doc.image_url,
      buttons: [
        { label: "More Info", payload: `ACTION_DETAILS_${doc.id}` },
        { label: "Book Now", payload: "ACTION_TRIGGER_BOOKING" },
      ],
    },
  };
}

function retrieveDoctorDetailsNode(state: typeof AgentState.State) {
  const docId = state.selected_doctor_id || "dr_01";
  // @ts-ignore
  const doc = DOCTORS_DB[docId] || DOCTORS_DB["dr_01"];

  return {
    final_response: {
      type: "card",
      text: `**${doc.name}**\n${doc.short_bio}\nAvailability: Mon-Fri`,
      buttons: [{ label: "Book This Doctor", payload: "ACTION_TRIGGER_BOOKING" }],
    },
  };
}

function showBookingFormNode() {
  return {
    final_response: { type: "booking_form", text: "Please enter your details." },
  };
}

function processBookingNode() {
  return {
    final_response: { type: "text", text: "✅ **Success!** Appointment received." },
  };
}

function serviceInfoNode() {
  return {
    final_response: {
      type: "text",
      text: "We offer:\n- ✨ Teeth Whitening\n- 🦷 Dental Implants\n- 😬 Invisalign",
      buttons: [{ label: "Book Service", payload: "ACTION_TRIGGER_BOOKING" }],
    },
  };
}

function emergencyNode() {
  return {
    final_response: {
      type: "text",
      text: "🚨 **Emergency**\nCall **555-0199** immediately.",
      buttons: [{ label: "Book Urgent Slot", payload: "ACTION_TRIGGER_BOOKING" }],
    },
  };
}



const workflow = new StateGraph(AgentState)
  .addNode("classifier", intentClassifierNode)
  .addNode("welcome", welcomeMessageNode)
  .addNode("find_doctor", retrieveDoctorProfileNode)
  .addNode("doctor_details", retrieveDoctorDetailsNode)
  .addNode("show_form", showBookingFormNode)
  .addNode("process_booking", processBookingNode)
  .addNode("services", serviceInfoNode)
  .addNode("emergency", emergencyNode)
  .addNode("general", generalChatNode);

// Define Conditional Logic
const routeIntent = (state: typeof AgentState.State) => {
  const intentMap: Record<string, string> = {
    welcome: "welcome",
    find_doctor: "find_doctor",
    doctor_details: "doctor_details",
    show_form: "show_form",
    process_booking: "process_booking",
    services: "services",
    emergency: "emergency",
    general_chat: "general",
  };
  return intentMap[state.intent || "general_chat"] || "general";
};

workflow.addEdge("__start__", "classifier");
workflow.addConditionalEdges("classifier", routeIntent);


["welcome", "find_doctor", "doctor_details", "show_form", "process_booking", "services", "emergency", "general"].forEach((node:any) => {
  workflow.addEdge(node, END);
});


const appGraph = workflow.compile();



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
    console.error("Graph Error:", error);
    return NextResponse.json(
      { type: "text", text: "Sorry, I encountered an error." },
      { status: 500 }
    );
  }
}