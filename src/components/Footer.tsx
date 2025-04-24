import React from 'react';
import { theme } from '../theme';
import { Twitter, Github, MessagesSquare, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1e2e] border-t border-[#313244] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-md" 
                style={{ background: theme.gradients.primary }}>
                <span className="text-lg font-bold text-white">F</span>
              </div>
              <span className="ml-2 text-lg font-bold text-[#cdd6f4]">Flowweave</span>
            </div>
            <p className="text-[#a6adc8] mb-6">
              Weaving the future of automation, one flow at a time.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<MessagesSquare size={18} />} href="#" />
              <SocialLink icon={<Github size={18} />} href="#" />
              <SocialLink icon={<BookOpen size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Templates</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Roadmap</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">API Reference</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#313244] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#a6adc8] text-sm">&copy; {new Date().getFullYear()} Flowweave. All rights reserved.</p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-[#a6adc8] text-sm">
              Built with 💜 for the decentralized future
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      className="w-8 h-8 rounded flex items-center justify-center text-[#a6adc8] hover:text-[#cdd6f4] transition duration-300 bg-[#313244] hover:bg-[#45475a]"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-[#a6adc8] hover:text-[#cdd6f4] transition duration-300"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;