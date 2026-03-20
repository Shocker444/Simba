import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    { q: "Is the work plagiarism-free?", a: "Absolutely. All code is written from scratch, and documentation follows academic integrity standards. We provide a clean, unique project for every student." },
    { q: "Can revisions be requested?", a: "Yes. We offer free revisions within the original scope of the project to ensure the deliverables meet your expectations and supervisor's feedback." },
    { q: "Will I understand the project?", a: "That is our priority. We include a free walkthrough session to explain the code, the model logic, and the results so you're ready for your defense." },
    { q: "Is this acceptable by my school?", a: "We provide technical implementation support. As long as you understand and can defend your work, these are your project materials. It's an educational aid." },
    { q: "How long does delivery take?", a: "Standard projects usually take 1-2 weeks. However, we can accommodate urgent requests depending on the complexity and package chosen." }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg text-gray-800">{faq.q}</span>
                <span className={`transition-transform duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}>
                  <HelpCircle className="text-blue-500" />
                </span>
              </button>
              {activeIndex === i && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed bg-gray-50/50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
