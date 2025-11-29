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


const siteUrl = "https://www.smilesciencedentalclinic.com";
const clinicName = "Smile Science Dental Clinic";

const clinicDescription = 
  "Smile Science Dental Clinic — the most trusted dentist in Electronic City Phase 1 and Neeladri Layout. Specialists in painless Root Canal Treatment (RCT), Dental Implants, Cosmetic Dentistry, Smile Designing, Invisalign Aligners, and Emergency Dental Care. 4.8★ rated clinic with expert dentists and advanced technology.";

export const viewport: Viewport = {
  themeColor: "#FDFBF7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ====================================
// 🔥 MOST POWERFUL SEO METADATA
// ====================================

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinicName} | Best Dentist in Electronic City Phase 1`,
    template: `%s | ${clinicName}`,
  },
  description: clinicDescription,
  keywords: [
    "Best dentist in Electronic City",
    "Dentist in Electronic City Phase 1",
    "Dental Clinic Neeladri Layout",
    "Root Canal Specialist Electronic City",
    "Painless Root Canal Bangalore",
    "Dental Implants Electronic City",
    "Invisalign Aligners Bangalore",
    "Smile Designing in Electronic City",
    "Cosmetic Dentist Electronic City",
    "Emergency Dentist Near Me",
    "Teeth Cleaning Electronic City",
    "Smile Science Dental Clinic",
    "Best Dental Clinic in Electronic City",
  ],
  authors: [{ name: "Dr. Pranjal" }],
  creator: clinicName,

  openGraph: {
    title: `Smile Science Dental Clinic | Expert Dentists in Electronic City`,
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
        alt: "Smile Science Dental Clinic - Best Dentist in Electronic City",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${clinicName} | Leading Dental Clinic in Electronic City`,
    description: clinicDescription,
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

// =============================
// 🔥 UPDATED STRUCTURED DATA
// =============================

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": siteUrl,
  "name": clinicName,
  "description":
    "Smile Science Dental Clinic offers painless dental treatments including Root Canal Treatment, Dental Implants, Orthodontics, Invisalign, and Smile Makeovers in Electronic City Phase 1.",
  "image": [
    `${siteUrl}/clinic-exterior.jpg`,
    `${siteUrl}/clinic-interior.jpg`,
    `${siteUrl}/team.jpg`,
  ],
  "url": siteUrl,
  "telephone": "+91-6206700442",
  "email": "drpranjal@smilescience.in",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "4th Floor, 224, 3rd Cross Road, Neeladri Nagar, Above ICICI Bank",
    "addressLocality": "Electronic City Phase 1",
    "addressRegion": "Karnataka",
    "postalCode": "560100",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.8438",
    "longitude": "77.6637",
  },
  "hasMap": "https://maps.app.goo.gl/YourGoogleMapsLink",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "10:00",
      "closes": "14:00",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "231",
  },
  "paymentAccepted": ["Cash", "Credit Card", "UPI", "Debit Card"],
  "medicalSpecialty": [
    "Dentistry",
    "Endodontics",
    "Cosmetic Dentistry",
    "Orthodontics",
    "Implant Dentistry",
  ],
  "sameAs": [
    "https://www.facebook.com/smilescience",
    "https://www.instagram.com/smilescience",
    "https://www.linkedin.com/company/smilescience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        {/* JSON-LD Schema */}
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>

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
