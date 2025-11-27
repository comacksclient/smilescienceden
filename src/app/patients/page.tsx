import { PatientsHero } from "@/components/patients/patients-hero";
import { WhatToExpect } from "@/components/patients/what-to-expect";
import { PatientForms } from "@/components/patients/patient-forms";
import { PatientPricing } from "@/components/patients/patient-pricing";
import { PatientSupport } from "@/components/patients/patient-support";

export default function PatientsPage() {
  return (
    <div className="bg-[#FDFBF0]">
      <PatientsHero />
      <WhatToExpect />
      <PatientForms />
      <PatientPricing />
      <PatientSupport />
    </div>
  );
}


