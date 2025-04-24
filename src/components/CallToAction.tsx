import React from 'react';
import { theme } from '../theme';
import { Rocket, Github, BookOpen } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[#cba6f7] rounded-full blur-[150px] opacity-5 translate-x-1/3"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="max-w-5xl mx-auto rounded-2xl p-8 md:p-12 relative overflow-hidden"
          style={{ boxShadow: theme.shadows.lg }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#313244] to-[#1e1e2e]"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#cba6f7] rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#b4befe] rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div 
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ 
                background: theme.gradients.primary,
                boxShadow: theme.shadows.md
              }}
            >
              <Rocket size={32} className="text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your First Flow?
            </h2>
            
            <p className="text-lg md:text-xl text-[#a6adc8] mb-10 max-w-2xl">
              Start building powerful, unstoppable automations today with our intuitive no-code platform. No credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                icon={<Rocket size={20} />}
                label="Get Started"
                primary={true}
              />
              
              <Button 
                icon={<Github size={20} />}
                label="View GitHub"
                primary={false}
              />
              
              <Button 
                icon={<BookOpen size={20} />}
                label="Read the Docs"
                primary={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ButtonProps {
  icon: React.ReactNode;
  label: string;
  primary: boolean;
}

const Button = ({ icon, label, primary }: ButtonProps) => {
  const style = primary 
    ? { 
        background: theme.gradients.primary,
        boxShadow: theme.shadows.md
      }
    : {
        backgroundColor: "#313244",
        boxShadow: theme.shadows.sm
      };

  const hoverClass = primary
    ? "hover:shadow-lg"
    : "hover:bg-[#45475a]";

  return (
    <a
      href="#"
      className={`px-6 py-3 rounded-lg font-medium transition duration-300 transform hover:-translate-y-1 flex items-center justify-center ${hoverClass}`}
      style={style}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </a>
  );
};

export default CallToAction;