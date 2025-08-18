import React from 'react';
import {Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';


const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'À propos', href: '#about' },
      { name: 'Nos domaines', href: '#domains' },
      { name: 'Équipe', href: '#team' },
      { name: 'Carrières', href: '#careers' },
    ],
    programs: [
      { name: 'Bachelor Alternance', href: '#bachelor' },
      { name: 'Master Alternance', href: '#master' },
      { name: 'Programme Intensif', href: '#intensif' },
      { name: 'Formation Continue', href: '#continue' },
    ],
    support: [
      { name: 'Contact', href: '#contact' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Support', href: '#support' },
      { name: 'Documentation', href: '#docs' },
    ],
    legal: [
      { name: 'Mentions légales', href: '#legal' },
      { name: 'Politique de confidentialité', href: '#privacy' },
      { name: 'Conditions d\'utilisation', href: '#terms' },
      { name: 'Cookies', href: '#cookies' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-20 left-1/4 w-64 h-64 bg-gold/20 rounded-full blur-2xl"
        />
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-gold/15 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-16">
        <div
          className="grid lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 flex items-center justify-center">
                <img src="/GATM_Site/src/img/WhatsApp Image 2025-08-15 à 05.24.23_64901d1a.jpg" alt="GATM Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-3xl font-bold font-lora">
                <span className="text-gold">GATM</span>
              </div>
              <div className="text-sm text-white/80">
                <div>Groupe d'Alternance</div>
                <div>Talents et Métiers</div>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Leader de l'alternance premium en France, GATM révèle les talents
              et forme les professionnels d'excellence dans les secteurs d'avenir.
            </p>
          </div>

          {/* Links Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-white/60 text-sm">
              <div className="flex space-x-4">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="hover:text-gold transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div className="text-center md:text-right">
                © {currentYear} GATM. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;