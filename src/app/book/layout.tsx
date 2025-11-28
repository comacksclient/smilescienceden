import type { Metadata } from "next";

const siteUrl = "https://www.smilesciencedentalclinic.com";
const clinicName = "Smile Science Dental Clinic";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Book Appointment | Smile Science Dental Clinic",
  description: "Schedule your dental appointment at Smile Science Dental Clinic in Electronic City, Bangalore. Easy online booking or call us directly. Same-day appointments available.",
  keywords: [
    "book dental appointment",
    "schedule dentist appointment",
    "dental appointment booking",
    "dentist appointment Electronic City",
    "online dental booking",
    "dental clinic appointment",
  ],
  alternates: {
    canonical: `${siteUrl}/book`,
  },
  openGraph: {
    title: "Book Your Dental Appointment | Smile Science Dental Clinic",
    description: "Schedule your visit with our expert dental team. Quick and easy appointment booking.",
    url: `${siteUrl}/book`,
    siteName: clinicName,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Appointment | Smile Science Dental Clinic",
    description: "Schedule your dental appointment online or by phone.",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
