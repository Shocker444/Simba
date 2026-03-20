import React from 'react';

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-gray-50 scroll-mt-24">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Your Journey to Success</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="relative">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-blue-100 -translate-x-1/2 hidden md:block"></div>
        <div className="space-y-12">
          {[
            { title: "Initial Consultation", desc: "Contact us via WhatsApp or the form below. We'll discuss your topic and specific project requirements." },
            { title: "Project Scoping", desc: "We define the technical depth and documentation needs to give you an accurate price within the ₦30k-₦50k range." },
            { title: "Implementation", desc: "Our developers build the project core and prepare any selected documentation or web apps." },
            { title: "Delivery & Walkthrough", desc: "Receive your final files and join a 1-on-1 session where we explain the implementation logic." },
            { title: "Defense Preparation", desc: "Final Q&A support to ensure you are fully prepared to face your academic panel with confidence." }
          ].map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row gap-8 items-start relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 text-white items-center justify-center rounded-full font-bold z-10 shadow-lg border-4 border-white">
                {i + 1}
              </div>
              <div className="w-12 h-12 md:hidden bg-blue-600 text-white flex items-center justify-center rounded-full font-bold shadow-lg">
                {i + 1}
              </div>
              <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex-grow md:w-[42%] hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
              <div className="md:w-[42%] hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
