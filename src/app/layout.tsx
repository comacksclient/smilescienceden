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
  "Smile Science Dental Clinic in Neeladri Layout, Electronic City. Rated 4.8★. Specialists in Painless Root Canals, Implants, and Cosmetic Dentistry.";


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
  keywords: [
    "Dentist Electronic City Phase 1",
    "Dental Clinic Neeladri Nagar",
    "Best Root Canal Specialist Bangalore",
    "Invisalign Provider Electronic City",
    "Smile Science Dental Clinic",
    "Emergency Dentist Electronic City",
  ],
  authors: [{ name: "Dr. Pranjal" }], // Assuming principal dentist
  creator: clinicName,
  icons: {
    icon: "/favicon.ico", // Ensure you have this file
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${clinicName} | Expert Dental Care in Bangalore`,
    description: clinicDescription,
    url: siteUrl,
    siteName: clinicName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`, // Make sure to add an OG image for social sharing
        width: 1200,
        height: 630,
        alt: "Smile Science Dental Clinic Interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicName}`,
    description: clinicDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 3. SCHEMA: "Real Time" Data Structure for Google
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": siteUrl,
  "name": clinicName,
  "image": [
    `${siteUrl}/clinic-exterior.jpg`,
    `${siteUrl}/clinic-interior.jpg`
  ],
  "url": siteUrl,
  "telephone": "+91-6206700442",
  "email": "drpranjal@smilescience.in",
  "priceRange": "₹₹", // Important for Google Maps
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
  "hasMap": "https://maps.app.goo.gl/YourGoogleMapsLink", // Replace with actual G-Maps link
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:30", // Adjusted slightly for typical Bangalore clinic hours
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
    "bestRating": "5",
    "worstRating": "1"
  },
  "paymentAccepted": ["Cash", "Credit Card", "UPI", "Debit Card"],
  "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry", "Orthodontics", "Endodontics"],
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
        {/* Inject Schema for Google Rich Results */}
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