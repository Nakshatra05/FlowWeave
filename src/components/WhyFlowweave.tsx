import React from 'react';
import { theme } from '../theme';
import { CheckCircle, Globe, Shield, Rocket } from 'lucide-react';

const WhyFlowweave = () => {
  return (
    <section id="why-flowweave" className="py-16 md:py-24 bg-[#1e1e2e]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Flowweave?</h2>
            <p className="text-lg text-[#a6adc8] mb-8">
              Unlike traditional automation platforms, Flowweave is built for the decentralized future while remaining compatible with the services you use today.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle size={22} className="text-[#a6e3a1]" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-[#a6adc8]">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div 
              className="bg-[#313244] rounded-xl overflow-hidden relative"
              style={{ boxShadow: theme.shadows.lg }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#cba6f7]/10 to-transparent"></div>
              
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-center">Comparison</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#45475a]">
                        <th className="pb-4 text-left">Feature</th>
                        <th className="pb-4 text-center">Flowweave</th>
                        <th className="pb-4 text-center">Traditional Tools</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisons.map((comparison, index) => (
                        <tr key={index} className={index < comparisons.length - 1 ? "border-b border-[#45475a]/50" : ""}>
                          <td className="py-4 text-[#a6adc8] font-medium">{comparison.feature}</td>
                          <td className="py-4 text-center">
                            {comparison.flowweave ? 
                              <CheckCircle size={20} className="text-[#a6e3a1] mx-auto" /> : 
                              <XCircle size={20} className="text-[#f38ba8] mx-auto" />
                            }
                          </td>
                          <td className="py-4 text-center">
                            {comparison.traditional ? 
                              <CheckCircle size={20} className="text-[#a6e3a1] mx-auto" /> : 
                              <XCircle size={20} className="text-[#f38ba8] mx-auto" />
                            }
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 p-4 bg-[#45475a]/30 rounded-lg">
                  <p className="text-[#a6adc8] text-center">
                    "Flowweave combines the best of both worlds — the ease of traditional no-code tools with the power and permanence of decentralized technology."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { XCircle } from 'lucide-react';

const benefits = [
  {
    title: "No vendor lock-in",
    description: "Your automation flows are stored permanently on Arweave, giving you true ownership of your work with no risk of a central service shutting down."
  },
  {
    title: "Web2 + Web3 friendly",
    description: "Seamlessly connect traditional services like Google Sheets or Slack with blockchain platforms like Ethereum or Solana in the same workflow."
  },
  {
    title: "Transparent and unstoppable",
    description: "Once deployed, your automations will continue to run according to their defined logic without central control or interference."
  },
  {
    title: "Future-proof platform",
    description: "Built for the decentralized future while remaining compatible with the tools and services you use today."
  }
];

const comparisons = [
  {
    feature: "No-code builder",
    flowweave: true,
    traditional: true
  },
  {
    feature: "Web3 integration",
    flowweave: true,
    traditional: false
  },
  {
    feature: "Permanent storage",
    flowweave: true,
    traditional: false
  },
  {
    feature: "True ownership",
    flowweave: true,
    traditional: false
  },
  {
    feature: "Censorship resistant",
    flowweave: true,
    traditional: false
  }
];

export default WhyFlowweave;