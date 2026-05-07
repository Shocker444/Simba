import React from 'react';
import { Hammer } from 'lucide-react';

export default function UnderConstructionPopup() {
  const handleAcknowledge = () => {
    // Attempt to close the window (this works if the tab was opened via script)
    window.close();
    // Fallback: Redirect away to a blank page to effectively "close" the site access
    window.location.href = 'about:blank';
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-gray-50">
      <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 relative border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 ring-8 ring-blue-50/50">
            <Hammer className="w-10 h-10" />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Site Unavailable
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            Welcome to Simba! We are currently undergoing major construction and the site is not accessible at this time. Please check back later.
          </p>
          
          <button 
            onClick={handleAcknowledge}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
