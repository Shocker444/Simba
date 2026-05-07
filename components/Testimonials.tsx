import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Michael Chen",
      role: "Computer Science Senior",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "Simba was a lifesaver during my final year project. The documentation and clean code provided helped me pass my defense with flying colors. Highly recommend!",
      rating: 5
    },
    {
      name: "Sarah Jenkins",
      role: "Software Engineering Graduate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "I struggled with the frontend implementation of my project, but the team at Simba handled it perfectly. Very professional, student-friendly, and always on time.",
      rating: 5
    },
    {
      name: "David Adeleke",
      role: "IT Undergraduate",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      content: "The prompt communication and plagiarism-free guarantee really stood out. They made sure I understood every part of the codebase before my presentation.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 overflow-hidden relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-widest text-blue-900">What Students Say</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 flex-grow">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
