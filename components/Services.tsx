import React from 'react';
import { HelpCircle, Database, Code, BarChart3, FileText, MessageCircle } from 'lucide-react';

const Services = () => (
  <section id="services" className="py-20 bg-gray-50 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Core Expertise</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: "Topic Guidance", desc: "Expert help in selecting feasible, modern, and high-impact project topics.", icon: <HelpCircle className="text-blue-600" /> },
          { title: "Dataset Sourcing", desc: "Finding, cleaning, and structuring relevant data for AI/ML projects.", icon: <Database className="text-blue-600" /> },
          { title: "Full Implementation", desc: "End-to-end coding in Python, JavaScript, or Java with clean logic.", icon: <Code className="text-blue-600" /> },
          { title: "Model Evaluation", desc: "Rigorous training and testing of models with full accuracy reports.", icon: <BarChart3 className="text-blue-600" /> },
          { title: "Documentation", desc: "Professional Chapter 4 (Results) and Chapter 5 (Conclusion) writing.", icon: <FileText className="text-blue-600" /> },
          { title: "Live Demos", desc: "Interactive web applications built with Streamlit for project presentation.", icon: <MessageCircle className="text-blue-600" /> }
        ].map((service, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
            <div className="mb-4 bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
