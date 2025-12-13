import { Document } from "@langchain/core/documents";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai"; 
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";

// Find .env file by going up directories
function findEnvFile(): string {
  let currentDir = __dirname;
  
  // Try up to 5 levels up
  for (let i = 0; i < 5; i++) {
    const envPath = path.join(currentDir, '.env');
    const envLocalPath = path.join(currentDir, '.env.local');
    
    if (fs.existsSync(envLocalPath)) {
      console.log(`✅ Found .env.local at: ${envLocalPath}`);
      return envLocalPath;
    }
    if (fs.existsSync(envPath)) {
      console.log(`✅ Found .env at: ${envPath}`);
      return envPath;
    }
    
    currentDir = path.join(currentDir, '..');
  }
  
  throw new Error('Could not find .env or .env.local file');
}

// Load environment variables
const envPath = findEnvFile();
dotenv.config({ path: envPath });

const getEnv = (name: string): string => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
};

const PINECONE_API_KEY = getEnv("PINECONE_API_KEY");
const PINECONE_INDEX_NAME = getEnv("PINECONE_INDEX_NAME");
const OPENAI_API_KEY = getEnv("OPENAI_API_KEY");

// --- NEW DATASET: Smile Science Dental Clinic ---
const documentData = [
  {
    name: "doctor_profile.txt",
    content: `Q: What is the name of the doctor at the clinic?
A: The doctor's name is Dr. Pranjal Sinha.

Q: What is the specialization of the doctor?
A: Dr. Pranjal Sinha is a Dental Surgeon.

Q: Who will handle my treatment?
A: Your treatment will be done by Dr. Pranjal Sinha.

Q: Do you have a specialist dentist at the clinic?
A: Yes, Dr. Pranjal Sinha is a qualified Dental Surgeon.

Q: Can I know the doctor's experience?
A: Yes, details about doctor's experience are shared upon request.`
  },
  {
    name: "contact_booking.txt",
    content: `Q: What is the contact number of the clinic?
A: You can contact the clinic at +91 62067 00442.

Q: How can I book an appointment?
A: You can book an appointment by calling or WhatsApp messaging on +91 62067 00442.

Q: Is WhatsApp available for appointment booking?
A: Yes, appointments can be booked through WhatsApp at +91 62067 00442.

Q: What is the fastest way to reach the clinic?
A: The fastest way is to message or call on +91 62067 00442.

Q: Is WhatsApp the primary mode of communication?
A: Yes, WhatsApp is the fastest and easiest way to contact us.`
  },
  {
    name: "timings_availability.txt",
    content: `Q: What are your clinic timings?
A: Smile Science Dental Clinic is open Monday to Saturday from 11:30 AM to 8 PM, and on Sundays from 11:30 AM to 5:30 PM.

Q: Are you open today?
A: Yes, Smile Science Dental Clinic is open today as per our regular timings: Mon-Sat 11:30 AM - 8 PM and Sun 11:30 AM - 5:30 PM.

Q: Are you open on Sundays?
A: Our clinic is open Monday to Saturday from 11:30 AM to 8 PM. On Sundays, we are open from 12 PM to 5 PM.

Q: Are appointments available during public holidays?
A: Limited services may be available on public holidays; please confirm in advance.`
  },
  {
    name: "location_parking.txt",
    content: `Q: Where is Smile Science Dental Clinic located?
A: Smile Science Dental Clinic is located at 5th Floor, 224, 3rd Cross Road, Neeladri Nagar, Electronic City Phase I, Bengaluru, Karnataka 560100. Message us for the Google Maps location pin.

Q: Do you have parking available?
A: Yes, parking is available near the clinic premises.

Q: Is parking free for patients?
A: Yes, parking is available free of cost for patients.

Q: How can I get the location pin?
A: We can share the exact Google Maps location on WhatsApp.`
  },
  {
    name: "walkins_emergency.txt",
    content: `Q: Do you accept walk-ins?
A: Yes, we do accept walk-ins. You may visit anytime during our operating hours.

Q: Do you offer emergency appointments?
A: Yes, emergency cases are given priority. Please message us immediately if it's urgent.

Q: Are walk-ins allowed in the evening?
A: Yes, walk-ins are accepted, but evening hours may be busier. Booking is recommended.

Q: Do you treat tooth pain urgently?
A: Yes, tooth pain cases are treated on priority.

Q: Can I get emergency dental care at night?
A: Yes, urgent cases are accommodated after clinic hours whenever possible.`
  },
  {
    name: "payments_insurance.txt",
    content: `Q: What is your consultation fee?
A: The consultation fee varies depending on the treatment. Please message us for exact details.

Q: Do you accept card payments?
A: Yes, all major card payments are accepted.

Q: Do you accept UPI?
A: Yes, UPI payments are accepted at the clinic.

Q: Do you accept health insurance?
A: Insurance coverage depends on the provider. Please message us for details.

Q: Can I pay in installments for major procedures?
A: Yes, EMI options are available depending on the treatment.

Q: Do you provide a bill or invoice?
A: Yes, invoices are provided for all treatments.`
  },
  {
    name: "general_services.txt",
    content: `Q: What treatments do you offer?
A: We offer a wide range of dental services. Message us with your concern for more specific details.

Q: Do you perform root canal treatments?
A: Yes, root canal treatments are available at the clinic.

Q: Do you provide dental cleaning (scaling)?
A: Yes, the clinic provides professional dental cleaning (scaling) and polishing services.

Q: Do you offer teeth whitening?
A: Yes, teeth whitening treatments are available at the clinic.

Q: Do you provide crowns and bridges?
A: Yes, restorative treatments including crowns, bridges, and implants are offered.

Q: Do you provide dentures?
A: Yes, full and partial dentures are available.`
  },
  {
    name: "orthodontics.txt",
    content: `Q: Do you offer braces consultation?
A: Yes, braces consultations are available for teenagers and adults.

Q: Do braces require prior consultation?
A: Yes, braces require an orthodontic consultation first.

Q: Can I consult for misaligned teeth?
A: Yes, orthodontic assessment and treatment options are available.

Q: Do you provide guidance on braces maintenance?
A: Yes, patients are advised on proper care and hygiene for braces.`
  },
  {
    name: "pediatric_care.txt",
    content: `Q: Do you treat children?
A: Yes, we provide dental care and consultations for children as well.

Q: Is your clinic kid-friendly?
A: Yes, the clinic environment is safe and comfortable for children.

Q: Do you provide fluoride treatments for children?
A: Yes, preventive fluoride applications are available for pediatric patients.

Q: Do you provide dental sealants for children?
A: Yes, protective sealants are available for pediatric patients.`
  },
  {
    name: "pain_anxiety.txt",
    content: `Q: Do you offer painless dentistry?
A: Yes, we use modern techniques to ensure minimal discomfort.

Q: Do you provide sedation for nervous patients?
A: Sedation options may be available depending on the procedure.

Q: Do you offer painless injections?
A: Yes, we use techniques to minimize discomfort.`
  },
  {
    name: "booking_process.txt",
    content: `Q: How can I reschedule my appointment?
A: You can reschedule anytime by sending us your new preferred date and time.

Q: Can I cancel my appointment?
A: Yes, appointments can be cancelled through WhatsApp.

Q: Do you offer online consultations?
A: Yes, online consultations are available depending on doctor availability.

Q: Do you send appointment reminders?
A: Yes, we send reminders through WhatsApp for confirmed appointments.`
  },
  {
    name: "clinic_amenities.txt",
    content: `Q: Is there a waiting area in the clinic?
A: Yes, we have a clean and comfortable waiting area for patients.

Q: Is wheelchair access available?
A: Yes, the clinic is wheelchair accessible.

Q: Is the clinic air-conditioned?
A: Yes, the clinic is fully air-conditioned for patient comfort.`
  },
  {
    name: "specific_conditions.txt",
    content: `Q: Do you treat infected gums?
A: Yes, gum treatments are available.

Q: Do you treat dental abscesses?
A: Yes, abscesses are treated promptly to avoid complications.

Q: Do you treat jaw pain or TMJ disorders?
A: Yes, jaw pain, clicking, and TMJ assessments are available.

Q: Can I consult for teeth grinding (bruxism)?
A: Yes, we provide evaluations and night guards for teeth grinding.

Q: Do you treat sensitive teeth?
A: Yes, sensitivity treatments are available.`
  },
  {
    name: "procedures_misc.txt",
    content: `Q: Do you perform X-rays?
A: Yes, dental X-rays are available depending on the case.

Q: Do you provide dental certificates?
A: Yes, dental certificates can be issued upon request after examination.

Q: Can I get a second opinion?
A: Yes, the doctor can provide an expert second opinion.

Q: Do you treat dental trauma or accidents?
A: Yes, emergency treatment for dental trauma is available.`
  }
];

async function main() {
  console.log("🚀 Starting seeding process with OpenAI Embeddings...");

  try {
    const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY });

    console.log(`Checking if index "${PINECONE_INDEX_NAME}" exists...`);
    const indexList = await pinecone.listIndexes();
    const indexExists = indexList.indexes?.some(index => index.name === PINECONE_INDEX_NAME);

    if (!indexExists) {
      console.log(`Creating index "${PINECONE_INDEX_NAME}"...`);
      
      await pinecone.createIndex({
        name: PINECONE_INDEX_NAME,
        dimension: 1536, 
        metric: "cosine",
        spec: { serverless: { cloud: 'aws', region: 'us-east-1' } }
      });
      console.log(`Index created. Waiting for it to be ready...`);
      await new Promise(resolve => setTimeout(resolve, 60000));
    } else {
      console.log(`⚠️ Warning: Index "${PINECONE_INDEX_NAME}" already exists.`);
      console.log(`ℹ️ Ensuring it matches OpenAI embedding dimensions (1536).`);
    }

    const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);
    
    // Using OpenAI Embeddings
    const embeddings = new OpenAIEmbeddings({
      model: "text-embedding-3-small", // 1536 dimensions
      openAIApiKey: OPENAI_API_KEY,
    });

    const documents = documentData.map(doc => new Document({
      pageContent: doc.content,
      metadata: { source: doc.name },
    }));

    console.log("📤 Uploading documents to Pinecone...");
    await PineconeStore.fromDocuments(documents, embeddings, {
      pineconeIndex,
      namespace: "dental-info",
    });

    console.log("✅ Seeding complete! All documents uploaded successfully.");
  } catch (error) {
    console.error("❌ Error during seeding:", error);
    process.exit(1);
  }
}

main();