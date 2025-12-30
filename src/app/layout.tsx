import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";
import { Chatbot } from "@/components/chatbot";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://smilesciencedentistry.in/";
const clinicName = "Smile Science Dental Clinic";


const clinicDescription =
  "Smile Science Dentistry: Trusted Electronic City dentists for painless RCT, implants. 4.8★ rated expert care.";

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${clinicName} | Best Dentist in Electronic City`,
    template: `%s | ${clinicName}`,
  },

  description: clinicDescription,


  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  keywords: [

    "Dentist in Neeladri Nagar",
    "Dentist in Electronic City",
    "Best dentist Electronic City",
    "Dental Clinic Neeladri Nagar",
    "Dental Clinic Electronic City",


    "Painless Root Canal Near Me",
    "Root Canal Specialist Electronic City",
    "Dental Implants Neeladri Nagar",
    "Clear Aligners Electronic City",
    "Invisalign Electronic City",
    "Cosmetic Dentist Neeladri Layout",
    "Smile Designing Near Me",
    "Dental Braces Electronic City",
    "Kids Dentist Neeladri Nagar",


    "Emergency Dentist Near Me",
    "Teeth Cleaning in Electronic City",
    "Best Dental Clinic Near Me",
    "Smile Science Dental Clinic",
  ],

  alternates: {
    canonical: siteUrl,
  },

  authors: [{ name: "Smile Science Dental Clinic" }],
  creator: clinicName,


  openGraph: {
    title: `Best Dental Clinic in the Electronic City`,
    description: clinicDescription,
    url: siteUrl,
    siteName: clinicName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Smile Science Dental Clinic - Best Dentist in Neeladri Nagar & Electronic City",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    title: `${clinicName} | Trusted Dentist in the Electronic City`,
    description: clinicDescription,
    images: [`${siteUrl}/og-image.jpg`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": siteUrl,

  name: clinicName,

  description:
    "Smile Science Dental Clinic offers painless Root Canal Treatment, Dental Implants, Clear Aligners, Invisalign, Braces, Smile Designing, Kids Dentistry, and Emergency Dental Care in Neeladri Nagar and Electronic City Phase 1. 4.8-star rated clinic with specialist dentists and advanced technology.",

  image: [
    `${siteUrl}/clinic-exterior.jpg`,
    `${siteUrl}/clinic-interior.jpg`,
    `${siteUrl}/team.jpg`,
  ],

  url: siteUrl,
  telephone: "+91-6206700442",
  email: "drpranjal@smilescience.in",
  priceRange: "₹₹",

  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, 224, Neeladri Nagar, Above ICICI Bank",
    addressLocality: "Electronic City Phase 1",
    addressRegion: "Karnataka",
    postalCode: "560100",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: "12.8438",
    longitude: "77.6637",
  },

  hasMap: "https://maps.app.goo.gl/",

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "17:00",
    },
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "231",
  },

  paymentAccepted: ["Cash", "Credit Card", "UPI", "Debit Card"],

  medicalSpecialty: [
    "Dentistry",
    "Endodontics",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Implant Dentistry",
  ],

  sameAs: [
    "https://www.instagram.com/",
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
  ],
  potentialAction: {
    "@type": "ReserveAction",
    name: "Book Appointment",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/book`,
    },
  }
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you offer painless root canal treatment in Neeladri Nagar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we specialise in single-sitting, painless root canal treatments using modern rotary instruments and local anesthesia. Most patients return to normal activities the same day.",
      },
    },
    {
      "@type": "Question",
      name: "Are weekend appointments available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we are open on Sundays (12:00 PM - 5:00 PM) with limited slots to accommodate working professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide dental implants in Electronic City?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we provide implant consultations and placements using trusted implant systems and offer transparent pricing during consultation.",
      },
    },
    {
      "@type": "Question",
      name: "How do I reach the clinic from Wipro gate (Electronic City)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located in Neeladri Nagar above ICICI Bank. It's a 5–10 minute drive from Wipro gate depending on traffic — precise directions are available on our map page.",
      },
    },
    {
      "@type": "Question",
      name: "Do you accept insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept most major insurance plans and assist with pre-authorisation paperwork — please bring your policy details at the time of visit.",
      },
    },
  ],
};


const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: clinicName,
  url: siteUrl,
  service: [
    { "@type": "MedicalProcedure", name: "Root Canal Treatment (RCT)" },
    { "@type": "MedicalProcedure", name: "Dental Implants" },
    { "@type": "MedicalProcedure", name: "Clear Aligners (Invisalign)" },
    { "@type": "MedicalProcedure", name: "Teeth Whitening & Cleaning" },
    { "@type": "MedicalProcedure", name: "Kids Dentistry" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${manrope.variable}
          ${playfair.variable}
          antialiased
          font-sans
          bg-[#FDFBF7]
          text-[#1A3C34]
          selection:bg-[#1A3C34] selection:text-[#FDFBF7]
        `}
      >
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Script
          id="ld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />


        <Script
          id="ld-services"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />

        <Header />

        <main className="min-h-screen relative flex flex-col">
          {children}
        </main>

        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
