import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import WhyFlowweave from './components/WhyFlowweave';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#1e1e2e] text-[#cdd6f4] min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <Features />
        <HowItWorks />
        <WhyFlowweave />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;