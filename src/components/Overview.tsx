import React from 'react';
import { theme } from '../theme';
import { Layers } from 'lucide-react';

const Overview = () => {
  return (
    <section id="overview" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[#b4befe] rounded-full blur-[150px] opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-16">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4" 
            style={{ background: theme.gradients.primary, boxShadow: theme.shadows.md }}>
            <Layers size={32} className="text-white" />
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Automation for the{' '}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: theme.gradients.primary }}>
              Decentralized World
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-[#a6adc8] mb-8">
            Flowweave empowers you to create, connect, and automate processes across both traditional and blockchain platforms without writing a single line of code. 
          </p>
          
          <div className="inline-block bg-[#313244] rounded-lg p-4 border border-[#45475a]" style={{ boxShadow: theme.shadows.md }}>
            <p className="text-lg font-medium">
              No-code platform to build visual automations, forever stored on Arweave.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {overviewItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#313244] rounded-xl p-6 transition-all duration-300 hover:transform hover:translate-y-[-4px]"
              style={{ boxShadow: theme.shadows.sm }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: item.color }}
              >
                <item.icon size={24} className="text-[#1e1e2e]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-[#a6adc8]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { FileCode, Workflow, Database } from 'lucide-react';

const overviewItems = [
  {
    icon: FileCode,
    title: "No-Code Builder",
    description: "Drag, drop, and connect blocks to create powerful automations without coding knowledge.",
    color: "#cba6f7"
  },
  {
    icon: Workflow,
    title: "Connect Everything",
    description: "Seamlessly integrate Web2 and Web3 services in the same workflow with our extensive connector library.",
    color: "#b4befe"
  },
  {
    icon: Database,
    title: "Permanent Storage",
    description: "All your flows are securely stored on Arweave, ensuring they will run forever without central control.",
    color: "#f5e0dc"
  }
];

export default Overview;