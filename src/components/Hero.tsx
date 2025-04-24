import React from 'react';
import { theme } from '../theme';
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent" 
              style={{ backgroundImage: theme.gradients.primary }}>
              Flowweave —<br />Drag. Connect. Automate.
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-[#a6adc8] max-w-lg">
              Build unstoppable Web2 & Web3 automations without code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#"
                className="px-6 py-3 rounded-lg font-medium text-center flex items-center justify-center transition duration-300 transform hover:translate-y-[-2px]"
                style={{ 
                  background: theme.gradients.primary,
                  boxShadow: theme.shadows.md
                }}
              >
                Launch App <ArrowRight size={20} className="ml-2" />
              </a>
              
              <a 
                href="#"
                className="px-6 py-3 rounded-lg font-medium bg-[#313244] hover:bg-[#45475a] text-center flex items-center justify-center transition duration-300 transform hover:translate-y-[-2px]"
                style={{ boxShadow: theme.shadows.sm }}
              >
                Join the Community <Zap size={20} className="ml-2" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg relative">
              <div className="absolute inset-0 bg-[#cba6f7] rounded-3xl blur-[100px] opacity-20"></div>
              <div className="relative bg-[#313244] rounded-xl overflow-hidden" style={{ boxShadow: theme.shadows.lg }}>
                {/* Grid illustrating workflow concept */}
                <div className="p-8 grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, index) => (
                    <div 
                      key={index}
                      className={`aspect-square rounded-lg flex items-center justify-center transition-all duration-500 hover:scale-105 ${
                        getBlockColor(index)
                      }`}
                      style={{ boxShadow: theme.shadows.sm }}
                    >
                      {getBlockContent(index)}
                    </div>
                  ))}
                </div>
                
                {/* Connection lines */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 300 300">
                  <path d="M75,75 L150,150 L225,75" stroke="#cba6f7" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  <path d="M75,150 L150,150" stroke="#b4befe" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                  <path d="M150,150 L225,225" stroke="#f5e0dc" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const getBlockColor = (index: number) => {
  const colors = [
    'bg-[#cba6f7]/20 border border-[#cba6f7]/30',
    'bg-[#b4befe]/20 border border-[#b4befe]/30',
    'bg-[#f5e0dc]/20 border border-[#f5e0dc]/30',
    'bg-[#f9e2af]/20 border border-[#f9e2af]/30',
    'bg-[#a6e3a1]/20 border border-[#a6e3a1]/30',
    'bg-[#89b4fa]/20 border border-[#89b4fa]/30',
  ];
  
  return colors[index % colors.length];
};

const getBlockContent = (index: number) => {
  if (index === 4) {
    return <div className="w-4 h-4 rounded-full bg-[#cba6f7]"></div>;
  }
  if (index % 3 === 0) {
    return <div className="w-full h-1 bg-[#cba6f7]/50 rounded-full"></div>;
  }
  if (index % 3 === 1) {
    return <div className="w-3 h-3 rounded-full bg-[#b4befe]/70"></div>;
  }
  return null;
};

export default Hero;