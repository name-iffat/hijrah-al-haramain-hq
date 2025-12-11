import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Moon, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-olive-900 text-sand-100 border-t-4 border-gold-600 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-pattern-subtle opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 border border-gold-500/30 rounded-full">
                <Moon className="w-6 h-6 text-gold-500" fill="currentColor" />
              </div>
              <div>
                <span className="block font-serif font-bold text-xl text-white tracking-wide">HIJRAH</span>
                <span className="block text-[0.6rem] text-gold-500 tracking-[0.25em] uppercase">Al Haramain HQ</span>
              </div>
            </div>
            <p className="text-olive-200/80 leading-relaxed text-sm font-light">
              Your trusted partner for a sincere and comfortable spiritual journey. We facilitate Umrah and Hajj with integrity, honouring the guests of Allah with the highest standard of service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Discover</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Our Story', path: '#about' },
                { name: 'Umrah Packages', path: '#packages' },
                { name: 'Journey Process', path: '#process' },
                { name: 'Pilgrim Gallery', path: '#gallery' },
                { name: 'Contact Us', path: '#contact' }
              ].map(link => (
                <li key={link.name}>
                  <a href={link.path} className="text-olive-100 hover:text-gold-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Visit Us</h3>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5 opacity-80" />
                <span className="leading-relaxed">123 Pilgrim Street,<br />Kuala Lumpur, 50450<br />Malaysia</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-gold-500 shrink-0 opacity-80" />
                <span>+60 3 1234 5678</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-gold-500 shrink-0 opacity-80" />
                <span>salam@hijrahalharamain.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Stay Connected</h3>
            <p className="text-xs text-olive-200/70 mb-5 leading-relaxed">
              Join our community for spiritual reminders and updates on upcoming group departures.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-olive-950/50 border border-olive-700 focus:border-gold-500 outline-none text-white text-sm placeholder-olive-500 transition-colors rounded-full"
                />
                <button className="absolute right-1 top-1 bottom-1 px-3 bg-gold-600 hover:bg-gold-500 text-white transition-colors rounded-full flex items-center justify-center w-10">
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-olive-400 font-light tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} Hijrah al Haramain HQ. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
            <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;