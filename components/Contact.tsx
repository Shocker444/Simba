import React, { useState } from 'react';
import { CheckCircle, MessageCircle, Plus } from 'lucide-react';

const Contact = () => {
  const availableServices = [
    "Basic Tier (₦70k - ₦100k)",
    "Premium Tier (₦100k - ₦150k)",
    "Elite Tier (₦150k - ₦200k)",
    "Express Delivery Add-on",
    "Custom UI Dashboard Add-on",
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
      window.location.href = `mailto:simbaworkng@gmail.com?subject=${subject}&body=${body}`;
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
                <a href="https://wa.me/2347069478460?text=Hello,%20I'm%20interested%20in%20your%20Simba%20services!" target="_blank" className="flex items-center justify-center bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-100 active:scale-95">
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
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">Institution</label>
                  <input 
                    type="text" 
                    required
                    value={formData.institution}
                    onChange={e => setFormData({...formData, institution: e.target.value})}
                    placeholder="e.g. Landmark University"
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

export default Contact;
