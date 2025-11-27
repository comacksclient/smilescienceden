"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';

const steps = [
  {
    step: "Step 1",
    title: "Consultation",
    description: `Typically, your doctor will send over a referral for treatment, however, we do see patients without a referral. Prior to your appointment, you'll complete a medical history form with allergies, previous surgeries, medications, and insurance information. Be thorough—these details guide your treatment and help avoid complications. If needed, we'll capture diagnostic imaging (X-rays or CT scans) during this visit so your oral surgeon has everything required.`,
  },
  {
    step: "Step 2",
    title: "Diagnosis",
    description: `Your oral surgeon performs a full visual inspection of hard and soft tissues along with jaw alignment. Combined with your records and imaging, this creates a clear diagnosis so we can chart the healthiest path forward.`,
  },
  {
    step: "Step 3",
    title: "Discuss options",
    description: `We review every finding together, walk through treatment options, timelines, sedation or anesthesia choices, and recovery expectations. Once a plan is agreed upon, you’ll sign consent forms and our coordinator will prepare a detailed financial summary, insurance estimates, and schedule.`,
  },
  {
    step: "Step 4",
    title: "Treatment",
    description: `Whenever possible, treatment happens the same day. For more complex procedures or medical histories, we’ll lock in a dedicated surgical appointment. You’ll leave with written pre-op instructions and direct contact support for any questions.`,
  },
];

export const WhatToExpect = () => {
  return (
    <section className="bg-white px-6 md:px-12 py-24">
      <ScrollAnimation>
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.35em] mb-3 block">
            What to Expect
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#0F172A] mb-4">
            Your Initial Appointment
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Our collaborative team of oral and maxillofacial specialists combines world-class expertise to deliver exceptional care at every visit.
          </p>
        </div>
      </ScrollAnimation>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {steps.map((item, index) => (
          <ScrollAnimation key={item.step} delay={index * 0.1}>
            <div className="bg-[#FDFBF0] rounded-3xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 text-sm font-semibold text-[#1B4D3E] mb-2">
                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#1B4D3E]/20">
                  {index + 1}
                </span>
                {item.step}
              </div>
              <h3 className="text-2xl font-serif font-medium text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};


