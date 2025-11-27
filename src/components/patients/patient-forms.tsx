"use client";

import { ScrollAnimation } from '@/components/ui/scroll-animation';
import { Download, FileText, Languages } from 'lucide-react';

const forms = [
  { title: "New Patient Registration Form", language: "English", href: "#" },
  { title: "New Patient Registration Form", language: "Español", href: "#" },
  { title: "Notice of Privacy Practices", language: "English", href: "#" },
  { title: "Notice of Privacy Practices", language: "Español", href: "#" },
];

const instructions = [
  { title: "Pre-Operative Instructions", href: "#" },
  { title: "Post-Operative Instructions", href: "#" },
];

export const PatientForms = () => {
  return (
    <section className="bg-[#FDFBF0] px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ScrollAnimation>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#1B4D3E]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Forms</p>
                <h3 className="text-2xl font-serif font-medium text-[#0F172A]">Surgical & Patient Forms</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Complete and submit your paperwork online for the smoothest check-in experience. All information is secure and handled with care.
            </p>

            <div className="space-y-4">
              {forms.map((form) => (
                <a
                  key={`${form.title}-${form.language}`}
                  href={form.href}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-[#1B4D3E] hover:bg-[#FDFBF0]/60 transition-colors"
                >
                  <div>
                    <p className="text-sm font-semibold text-[#0F172A]">{form.title}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Languages className="w-3 h-3" />
                      {form.language}
                    </p>
                  </div>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.1}>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-full">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-[#1B4D3E]" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">Instructions</p>
                <h3 className="text-2xl font-serif font-medium text-[#0F172A]">Procedure Instructions</h3>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Every procedure is unique, but these guidelines help you prepare and recover comfortably. 
              Our team will customize instructions to your exact treatment plan.
            </p>

            <div className="space-y-4">
              {instructions.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-2xl border border-gray-200 hover:border-[#1B4D3E] hover:bg-[#FDFBF0]/60 transition-colors"
                >
                  <p className="text-sm font-semibold text-[#0F172A]">{item.title}</p>
                  <Download className="w-4 h-4 text-gray-500" />
                </a>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};


