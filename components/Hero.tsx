import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Users } from 'lucide-react';
import { handleScroll } from '../utils/handleScroll';

const Hero = () => (
  <section id="hero" className="pt-40 pb-20 px-4 scroll-mt-24">
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-[1.1]">
        Excellence in Your <span className="text-blue-600">Final Year Project</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        Professional implementation, clean code, and academic documentation tailored for Computer Science, IT, and Engineering students.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="#pricing" 
          onClick={(e) => handleScroll(e, '#pricing')}
          className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center justify-center"
        >
          View Package <ArrowRight className="ml-2" size={20} />
        </a>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-8 grayscale opacity-70">
        <div className="flex items-center space-x-2"><ShieldCheck className="text-blue-600" /> <span className="font-semibold uppercase tracking-wider text-sm">Plagiarism Free</span></div>
        <div className="flex items-center space-x-2"><Clock className="text-blue-600" /> <span className="font-semibold uppercase tracking-wider text-sm">On-time Delivery</span></div>
        <div className="flex items-center space-x-2"><Users className="text-blue-600" /> <span className="font-semibold uppercase tracking-wider text-sm">Expert Support</span></div>
      </div>
    </div>
  </section>
);

export default Hero;
