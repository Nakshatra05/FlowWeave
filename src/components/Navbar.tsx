import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { theme } from '../theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#1e1e2e]/90 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-md" 
                style={{ background: theme.gradients.primary }}>
                <span className="text-2xl font-bold text-white">F</span>
              </div>
              <span className="ml-3 text-xl font-bold text-[#cdd6f4]">Flowweave</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#why-flowweave">Why Flowweave</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="px-4 py-2 rounded-md text-[#cdd6f4] hover:text-white transition duration-300">
              Sign In
            </a>
            <a 
              href="#"
              className="px-4 py-2 rounded-md font-medium transition duration-300"
              style={{ 
                background: theme.gradients.primary,
                boxShadow: theme.shadows.sm
              }}
            >
              Launch App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="p-2 rounded-md text-[#cdd6f4] hover:text-white focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-2 space-y-1 bg-[#313244] rounded-b-lg shadow-lg">
          <MobileNavLink href="#overview" onClick={toggleMenu}>Overview</MobileNavLink>
          <MobileNavLink href="#features" onClick={toggleMenu}>Features</MobileNavLink>
          <MobileNavLink href="#how-it-works" onClick={toggleMenu}>How It Works</MobileNavLink>
          <MobileNavLink href="#why-flowweave" onClick={toggleMenu}>Why Flowweave</MobileNavLink>
          <div className="pt-2 pb-3 border-t border-[#45475a]">
            <a href="#" className="block px-4 py-2 rounded-md text-[#cdd6f4] hover:bg-[#45475a] transition duration-300">
              Sign In
            </a>
            <a 
              href="#"
              className="block mt-2 px-4 py-2 rounded-md font-medium text-center transition duration-300"
              style={{ 
                background: theme.gradients.primary,
                boxShadow: theme.shadows.sm
              }}
            >
              Launch App
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-[#a6adc8] hover:text-[#cdd6f4] transition duration-300"
  >
    {children}
  </a>
);

const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="block px-4 py-2 rounded-md text-[#a6adc8] hover:bg-[#45475a] hover:text-[#cdd6f4] transition duration-300"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;