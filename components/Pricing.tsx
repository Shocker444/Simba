import React from 'react';
import { CheckCircle, Plus } from 'lucide-react';
import { handleScroll } from '../utils/handleScroll';

const Pricing = () => {
  const tiers = [
    {
      name: "Basic",
      price: "₦70k - ₦100k",
      positioning: "For students who want to deeply understand and optimize their project.",
      valueProp: "Master your defense with deep understanding.",
      features: [
        "Model tuning & hyperparameter optimization",
        "Multiple model comparisons (e.g., CNN vs RF)",
        "Performance visualization (ROC, Confusion Matrix)",
        "Live or recorded code walkthrough",
        "Light documentation support"
      ],
      buttonClass: "bg-blue-100 text-blue-700 hover:bg-blue-200",
      cardClass: "border-gray-200 bg-white",
      popular: false
    },
    {
      name: "Premium",
      price: "₦100k - ₦150k",
      positioning: "For students who want guaranteed academic success and full documentation.",
      valueProp: "Your project will stand out. Complete academic success.",
      features: [
        "Everything in Basic",
        "Dataset sourcing & preprocessing",
        "Chapter 4 & 5 fully written",
        "Defense coaching session",
        "Revisions based on supervisor feedback"
      ],
      buttonClass: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200",
      cardClass: "border-blue-600 bg-white shadow-2xl relative transform md:-translate-y-4",
      popular: true
    },
    {
      name: "Elite",
      price: "₦150k - ₦200k",
      positioning: "For students who want a completely done-for-you, zero-stress experience.",
      valueProp: "Zero stress. Maximum prestige. We handle everything.",
      features: [
        "Everything in Premium",
        "End-to-end project handling",
        "Custom UI/dashboard for demo",
        "Research formatting (IEEE/APA)",
        "GitHub portfolio setup",
        "Weekly updates & Priority delivery",
        "Direct WhatsApp support",
        "Full mock defense preparation"
      ],
      buttonClass: "bg-gray-900 text-white hover:bg-gray-800",
      cardClass: "border-gray-200 bg-gradient-to-b from-gray-50 to-white",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Transform Your Project into a Masterpiece</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the level of support you need. From deep technical optimization to a completely done-for-you, zero-stress experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {tiers.map((tier, i) => (
            <div key={i} className={`rounded-[2.5rem] p-8 md:p-10 border-2 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${tier.cardClass}`}>
              {tier.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm h-10">{tier.positioning}</p>
              </div>
              
              <div className="mb-8">
                <div className="text-4xl font-black text-gray-900 tracking-tight mb-3">{tier.price}</div>
                <div className="text-sm font-bold text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-xl border border-blue-100">
                  {tier.valueProp}
                </div>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <CheckCircle className={`shrink-0 w-5 h-5 mr-3 ${tier.popular ? 'text-blue-600' : 'text-gray-400'}`} />
                      <span className={`text-sm ${j === 0 && i > 0 ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, '#contact')}
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all ${tier.buttonClass}`}
              >
                Select {tier.name}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Plus className="text-blue-600 mr-2" /> Optional Add-ons
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: "Express Delivery (72 Hours)", price: "₦30,000", desc: "Jump the queue and get your project delivered in record time." },
                { name: "Custom UI Dashboard", price: "₦25,000", desc: "Interactive Streamlit or React dashboard for your model." },
                { name: "Extra Revisions", price: "₦10,000/round", desc: "Additional rounds of revisions beyond the included scope." },
                { name: "Plagiarism Report Certificate", price: "₦5,000", desc: "Official Turnitin or similar plagiarism report for your docs." }
              ].map((addon, i) => (
                <div key={i} className="p-5 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-gray-900">{addon.name}</h4>
                    <span className="font-black text-blue-600 text-sm">{addon.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{addon.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
