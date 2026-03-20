import React from 'react';
import { handleScroll } from '../utils/handleScroll';

const Footer = () => (
  <footer className="bg-white border-t border-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
      <div className="mb-6 md:mb-0">
        <a href="#" onClick={(e) => handleScroll(e, '#')} className="text-2xl font-bold text-blue-600">Simba</a>
        <p className="mt-2 text-gray-500 text-sm">Professional Final Year Project Services</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600 font-medium">
        <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-blue-600 transition-colors">About</a>
        <a href="#pricing" onClick={(e) => handleScroll(e, '#pricing')} className="hover:text-blue-600 transition-colors">Pricing</a>
        <a href="#how-it-works" onClick={(e) => handleScroll(e, '#how-it-works')} className="hover:text-blue-600 transition-colors">Process</a>
        <a href="#faq" onClick={(e) => handleScroll(e, '#faq')} className="hover:text-blue-600 transition-colors">FAQ</a>
      </div>
      <div className="mt-6 md:mt-0 text-gray-400 text-xs font-medium">
        &copy; {new Date().getFullYear()} Simba Services. Excellence in Engineering.
      </div>
    </div>
  </footer>
);

export default Footer;
