import React from 'react';
import { ShieldCheck, Users, Clock, MessageCircle } from 'lucide-react';

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 bg-blue-900 text-white overflow-hidden relative scroll-mt-24">
    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-800 rounded-full -mr-32 -mt-32 opacity-50 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full -ml-48 -mb-48 opacity-50 blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-blue-300">Why Simba?</h2>
        <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Plagiarism-Free", icon: <ShieldCheck size={32} />, text: "Original implementations and documentation created from scratch." },
          { title: "Student-Friendly", icon: <Users size={32} />, text: "Pricing structured specifically for undergraduate budgets." },
          { title: "On-Time Delivery", icon: <Clock size={32} />, text: "We respect your school deadlines and provide early drafts." },
          { title: "Defense Ready", icon: <MessageCircle size={32} />, text: "Comprehensive support to help you answer any panel question." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="mb-6 mx-auto w-20 h-20 bg-blue-800 border border-blue-700 flex items-center justify-center rounded-3xl group-hover:bg-blue-600 group-hover:border-blue-400 transition-all transform group-hover:-translate-y-2 group-hover:rotate-3 shadow-lg">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-blue-100 leading-relaxed text-sm opacity-90">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
