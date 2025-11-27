
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Script from "next/script";
import dynamic from "next/dynamic";
import { Chatbot } from "@/components/chatbot";

// Modern, clean fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});



const siteUrl = "https://www.smilesciencedentalclinic.com";
const clinicName = "Smile Science Dental Clinic";
const clinicDescription =
  "Smile Science Dental Clinic in Neeladri Layout, Electronic City, Bangalore offers preventive, restorative, cosmetic, and oral surgery care with a 4.8★ Google rating.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${clinicName} | Neeladri Layout, Electronic City`,
    template: `%s | ${clinicName}`,
  },
  description: clinicDescription,
  keywords: [
    "Smile Science Dental Clinic",
    "dentist in Electronic City",
    "dental clinic Neeladri Layout",
    "oral surgeon Bangalore",
    "teeth whitening Electronic City",
    "dental implants Electronic City",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${clinicName} | Best Dentist in Electronic City, Bangalore`,
    description: clinicDescription,
    url: siteUrl,
    siteName: clinicName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${clinicName} | Electronic City, Bangalore`,
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinicName,
  image: `${siteUrl}/clinic.jpg`,
  "@id": siteUrl,
  url: siteUrl,
  telephone: "+91-6206700442",
  email: "drpranjal@smilescience.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4th Floor, 224, 3rd Cross Road, Neeladri Nagar, Above ICICI Bank",
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
      opens: "12:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "231",
  },
  sameAs: [
    "https://www.facebook.com/",
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#FDFBF0" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} antialiased font-sans`}>
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </Script>
        <Header />
        <main className="min-h-screen pt-28 lg:pt-32">
          {children}
          <Chatbot />
        </main>
        <Footer />
      </body>
    </html>
  );
}