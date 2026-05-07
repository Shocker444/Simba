import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DeveloperSignIn from './pages/DeveloperSignIn';
import UnderConstructionPopup from './components/UnderConstructionPopup';
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden flex flex-col">
        <UnderConstructionPopup />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/developer-sign-in" element={<DeveloperSignIn />} />
        </Routes>
        <Analytics />
      </div>
    </BrowserRouter>
  );
}
