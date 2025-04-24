import React from 'react';
import { theme } from '../theme';
import { MousePointer, Link, Settings, Play } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[#f5e0dc] rounded-full blur-[150px] opacity-5 -translate-x-1/3"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg md:text-xl text-[#a6adc8] max-w-3xl mx-auto">
            Building automations with Flowweave is simple and intuitive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center relative"
            >
              {/* Step number and connection line */}
              <div className="relative">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 z-10 relative"
                  style={{ 
                    background: theme.gradients.primary,
                    boxShadow: theme.shadows.md
                  }}
                >
                  <step.icon size={24} className="text-white" />
                </div>
                
                {/* Connection line to next step */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#cba6f7] to-transparent -z-10"></div>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-[#a6adc8]">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Visual example card */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div 
            className="bg-[#313244] rounded-xl overflow-hidden"
            style={{ boxShadow: theme.shadows.lg }}
          >
            <div className="p-4 border-b border-[#45475a] flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#f38ba8]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f9e2af]"></div>
                <div className="w-3 h-3 rounded-full bg-[#a6e3a1]"></div>
              </div>
              <div className="mx-auto text-[#a6adc8] font-medium">Flowweave Builder</div>
            </div>
            
            <div className="p-6 flex justify-center">
              <div className="flex flex-col items-center md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
                {/* Nodes */}
                <WorkflowNode 
                  label="Webhook" 
                  type="Trigger" 
                  color="#cba6f7" 
                  icon={<Zap size={18} />} 
                />
                <div className="hidden md:flex items-center">
                  <svg width="60" height="24">
                    <path d="M0,12 L60,12" stroke="#cba6f7" strokeWidth="2" strokeDasharray="4,4" />
                    <path d="M52,6 L60,12 L52,18" fill="none" stroke="#cba6f7" strokeWidth="2" />
                  </svg>
                </div>
                <WorkflowNode 
                  label="Process Data" 
                  type="Function" 
                  color="#b4befe" 
                  icon={<Settings size={18} />} 
                />
                <div className="hidden md:flex items-center">
                  <svg width="60" height="24">
                    <path d="M0,12 L60,12" stroke="#b4befe" strokeWidth="2" strokeDasharray="4,4" />
                    <path d="M52,6 L60,12 L52,18" fill="none" stroke="#b4befe" strokeWidth="2" />
                  </svg>
                </div>
                <WorkflowNode 
                  label="Send Email" 
                  type="Action" 
                  color="#f5e0dc" 
                  icon={<Send size={18} />} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Zap, Send } from 'lucide-react';

interface WorkflowNodeProps {
  label: string;
  type: string;
  color: string;
  icon: React.ReactNode;
}

const WorkflowNode = ({ label, type, color, icon }: WorkflowNodeProps) => {
  return (
    <div 
      className="w-48 bg-[#1e1e2e] rounded-lg p-3 border transition-transform duration-300 hover:scale-105"
      style={{ borderColor: color, boxShadow: theme.shadows.sm }}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div 
            className="w-6 h-6 rounded flex items-center justify-center mr-2"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <span className="font-medium">{label}</span>
        </div>
      </div>
      <div className="text-xs text-[#a6adc8]">{type}</div>
    </div>
  );
};

const steps = [
  {
    icon: MousePointer,
    title: "Drag blocks",
    description: "Choose from our library of blocks representing triggers, actions, and transformations."
  },
  {
    icon: Link,
    title: "Connect flows",
    description: "Link blocks together to create your automation flow with intuitive connection points."
  },
  {
    icon: Settings,
    title: "Configure actions",
    description: "Set up each block with the specific parameters needed for your workflow."
  },
  {
    icon: Play,
    title: "Deploy and trigger",
    description: "Save your flow to Arweave and activate it to run based on your triggers."
  }
];

export default HowItWorks;