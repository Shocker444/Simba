
import React, { useState } from 'react';
import { 
  CheckCircle, 
  Code, 
  Database, 
  FileText, 
  BarChart3, 
  HelpCircle, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Users, 
  ArrowRight,
  Menu,
  X,
  Plus
} from 'lucide-react';

// --- Shared Utility ---
const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, closeMenu?: () => void) => {
  e.preventDefault();
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  
  if (element) {
    const offset = 80; // Height of the fixed navbar
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  } else if (href === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  if (closeMenu) closeMenu();
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[100] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <a 
              href="#" 
              onClick={(e) => handleScroll(e, '#')}
              className="text-2xl font-black text-blue-600 tracking-tighter hover:opacity-80 transition-opacity"
            >
              Simba
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center text-sm font-semibold">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-gray-500 hover:text-blue-600 transition-colors py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 hover:shadow-blue-200 transform hover:-translate-y-0.5"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-900 p-2 rounded-xl hover:bg-gray-100 transition-colors outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-6 space-y-3">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href, () => setIsOpen(false))} 
              className="block px-4 py-4 text-gray-800 hover:bg-blue-50 rounded-2xl transition-colors font-bold text-lg border-b border-gray-50 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact', () => setIsOpen(false))} 
              className="block px-4 py-5 bg-blue-600 text-white rounded-2xl text-center font-black text-xl shadow-xl shadow-blue-100 active:scale-95 transition-transform"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

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

const Pricing = () => (
  <section id="pricing" className="py-20 bg-white scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Project Pricing & Packages</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Tailor your project by selecting the core implementation and optional components.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-2 border-blue-600 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 rounded-bl-3xl font-bold uppercase tracking-widest text-xs">Major Package</div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-blue-600 font-bold uppercase text-xs tracking-widest mb-4 inline-block">Professional Implementation</span>
              <h3 className="text-3xl font-black text-gray-900 mb-2">Code Implementation</h3>
              <div className="text-3xl font-black text-blue-600 mb-6 italic">₦30,000 - ₦50,000</div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our core service provides a fully functional project built to academic standards. Pricing varies based on the technical complexity and scope discussed.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  "Fully functional implementation",
                  "Clean, well-commented code",
                  "Model training & Performance analysis",
                  "Ready-to-run environment setup"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <CheckCircle size={18} className="text-blue-500 mr-3 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-4 flex items-center">
                  <Plus size={18} className="mr-2" /> Additional Selections
                </h4>
                <div className="space-y-4">
                  {[
                    { name: "Dataset Provision", price: "₦5,000" },
                    { name: "Chapter 4 Documentation", price: "₦10,000" },
                    { name: "Chapter 5 Documentation", price: "₦5,000" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm border-b border-blue-100 pb-3 last:border-0 last:pb-0">
                      <span className="text-blue-800 font-medium">{item.name}</span>
                      <span className="font-bold text-blue-600">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-3xl border border-purple-100 relative">
                <span className="absolute -top-3 left-6 bg-purple-600 text-white px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight">Optional Add-on</span>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-bold text-purple-900">Interactive Web App</h4>
                  <span className="font-black text-purple-600">₦20,000</span>
                </div>
                <p className="text-xs text-purple-800 opacity-80 italic">Streamlit-based interface for live model demonstrations.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="flex items-center bg-green-50 text-green-700 px-6 py-3 rounded-2xl border border-green-100">
                <ShieldCheck className="mr-3" />
                <span className="text-sm font-bold uppercase tracking-tight">Included Bonus: One-on-one Code Walkthrough (Free)</span>
             </div>
             <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100"
            >
              Get Started Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

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

const Contact = () => {
  const availableServices = [
    "Core Code Implementation",
    "Dataset Sourcing & Cleaning",
    "Chapter 4 Documentation",
    "Chapter 5 Documentation",
    "Interactive Streamlit Web App",
    "Topic Guidance"
  ];

  const [formData, setFormData] = useState({ 
    name: '', 
    project: '', 
    selectedServices: [] as string[], 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service: string) => {
    setFormData(prev => {
      const isSelected = prev.selectedServices.includes(service);
      const nextServices = isSelected 
        ? prev.selectedServices.filter(s => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: nextServices };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const subject = encodeURIComponent(`New Project Inquiry: ${formData.project}`);
    const servicesString = formData.selectedServices.length > 0 
      ? formData.selectedServices.join(', ') 
      : 'No specific services selected';
      
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Project Topic: ${formData.project}\n` +
      `Services Needed: ${servicesString}\n\n` +
      `Additional Message: ${formData.message}`
    );
    
    setTimeout(() => {
      window.location.href = `mailto:essetdonald617@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight leading-tight">Ready to Ace Your Project?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Fill out the form with your project details. We'll review your requirements and get back to you with a personalized implementation plan.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-50 flex items-center justify-center rounded-xl text-blue-600 mr-4 shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Tailored Solutions</h4>
                  <p className="text-sm text-gray-500">Every project is unique. We adapt to your specific supervisor's requirements and school standards.</p>
                </div>
              </div>

              <div className="flex items-start bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-green-50 flex items-center justify-center rounded-xl text-green-600 mr-4 shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Direct Support</h4>
                  <p className="text-sm text-gray-500">Fast communication for updates and technical questions during the implementation phase.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/your-whatsapp-link" target="_blank" className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-95">
                  <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
                </a>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-gray-100">
            <h3 className="text-2xl font-black mb-8 text-gray-900">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Project Topic</label>
                  <input 
                    type="text" 
                    required
                    value={formData.project}
                    onChange={e => setFormData({...formData, project: e.target.value})}
                    placeholder="e.g. AI Fraud Detection"
                    className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-4 uppercase tracking-wider">Services Needed (Multi-select)</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {availableServices.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between group ${
                        formData.selectedServices.includes(service)
                          ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-100'
                          : 'border-gray-100 bg-gray-50 text-gray-600 hover:border-blue-200'
                      }`}
                    >
                      {service}
                      {formData.selectedServices.includes(service) ? (
                        <CheckCircle size={16} className="text-blue-600" />
                      ) : (
                        <Plus size={16} className="text-gray-300 group-hover:text-blue-300" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Additional Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  placeholder="Share any special requirements or deadlines..."
                  className="w-full px-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-50 transform hover:-translate-y-1 active:scale-95"
              >
                {isSubmitting ? "Opening Email..." : "Submit Inquiry"}
              </button>
              
              <p className="text-center text-xs text-gray-400 font-medium italic">
                This will open your email client with the draft inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

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

export default function App() {
  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Pricing />
        <HowItWorks />
        <WhyChooseUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
