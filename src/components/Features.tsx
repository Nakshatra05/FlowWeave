import React from 'react';
import { theme } from '../theme';
import { Boxes, Webhook, HardDrive, Zap, Bot, Lock } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-[#1e1e2e]/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Key Features</h2>
          <p className="text-lg md:text-xl text-[#a6adc8] max-w-3xl mx-auto">
            Everything you need to build powerful and reliable automation flows
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.FC<{ size: number; className: string }>;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon: Icon, title, description, color }: FeatureCardProps) => {
  return (
    <div 
      className="bg-[#313244] rounded-xl p-6 hover:bg-[#45475a] transition-all duration-300 group flex flex-col h-full"
      style={{ boxShadow: theme.shadows.sm }}
    >
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
        style={{ backgroundColor: color }}
      >
        <Icon size={24} className="text-[#1e1e2e]" />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-[#a6adc8] flex-grow">{description}</p>
    </div>
  );
};

const features = [
  {
    icon: Boxes,
    title: "Visual Process Builder",
    description: "Drag-and-drop interface for creating complex automations with our visual builder. No coding required.",
    color: "#cba6f7"
  },
  {
    icon: Webhook,
    title: "Web2 & Web3 API Integration",
    description: "Connect traditional services with blockchain protocols for truly seamless automations.",
    color: "#b4befe"
  },
  {
    icon: HardDrive,
    title: "Immutable Storage",
    description: "Your flows are permanently stored on Arweave, making them resistant to censorship and central failure.",
    color: "#f5e0dc"
  },
  {
    icon: Zap,
    title: "Event-Driven Triggers",
    description: "Start your automations based on events from any connected platform, blockchain, or time-based schedule.",
    color: "#f9e2af" 
  },
  {
    icon: Bot,
    title: "Custom Bots & Templates",
    description: "Create and share templates or deploy custom bots that run your workflows automatically.",
    color: "#a6e3a1"
  },
  {
    icon: Lock,
    title: "Trustless and Decentralized",
    description: "Runs on decentralized infrastructure ensuring your automations keep working without central control.",
    color: "#89b4fa"
  }
];

export default Features;