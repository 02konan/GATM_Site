import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Nos domaines', href: '#domains' },
    { name: 'Formations', href: '#programs' },
    { name: 'Actualités', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center 
            `}>
              <img src="/img/logo.jpg" alt="GATM Logo" className="w-full h-full object-contain" />

              <Building2 className={`${isScrolled ? 'text-gold' : 'text-white'}`} size={24} />
            </div>
            <div className={`text-2xl font-bold font-lora ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}>
              <span className="text-gold">GATM</span>
            </div>
            <div className={`hidden md:block text-sm ${
              isScrolled ? 'text-navy-light' : 'text-white/90'
            }`}>
              <div>Groupe d'Alternance</div>
              <div>Talents et Métiers</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? 'text-navy hover:text-gold' : 'text-white hover:text-gold'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button className="bg-gold text-navy px-6 py-2 rounded-lg font-medium hover:bg-gold-light transition-colors duration-300">
              Nous contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? 'text-navy' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-navy hover:text-gold transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full bg-gold text-navy px-6 py-3 rounded-lg font-medium hover:bg-gold-light transition-colors duration-300 mt-3">
              Nous contacter
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;