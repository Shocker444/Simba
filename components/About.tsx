import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => (
  <section id="about" className="py-20 bg-white border-y border-gray-100 scroll-mt-24">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">About the Service</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
          <p>
            Your final year project is the crowning achievement of your university journey. We understand the pressure of balancing academic requirements with technical complexity.
          </p>
          <p>
            Our service provides students in Computer Science, IT, Data Science, and AI/ML with high-quality project implementations. We don't just "do the work" — we ensure you understand the logic so you can defend it with confidence.
          </p>
        </div>
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Our Commitment</h3>
          <ul className="space-y-4">
            {[
              "100% Original Implementation",
              "Standard Coding Practices",
              "Clear Results & Performance Analysis",
              "Personalized Defense Guidance"
            ].map((item, i) => (
              <li key={i} className="flex items-center space-x-3">
                <CheckCircle className="text-blue-600" size={20} />
                <span className="font-medium text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
