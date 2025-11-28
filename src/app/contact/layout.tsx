import type { Metadata } from "next";

const siteUrl = "https://www.smilesciencedentalclinic.com";
const clinicName = "Smile Science Dental Clinic";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Contact Us | Smile Science Dental Clinic",
  description: "Get in touch with Smile Science Dental Clinic in Electronic City, Bangalore. Call, email, WhatsApp, or visit us for your dental needs. Available Mon-Sat 12 PM - 8 PM.",
  keywords: [
    "contact Smile Science Dental Clinic",
    "dental clinic contact Electronic City",
    "dentist contact Bangalore",
    "book dental appointment",
    "dental clinic phone number",
    "dental clinic address Electronic City",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Smile Science Dental Clinic | Electronic City, Bangalore",
    description: "Reach out to us for dental appointments, inquiries, or emergency services. Multiple contact options available.",
    url: `${siteUrl}/contact`,
    siteName: clinicName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Smile Science Dental Clinic",
    description: "Get in touch with our dental clinic in Electronic City, Bangalore.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
