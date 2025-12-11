import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Moon, ArrowRight } from 'lucide-react';

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
              Rakan kongsi anda yang dipercayai untuk perjalanan rohani yang ikhlas dan selesa. Kami memudahkan umrah dan haji dengan penuh integriti, memuliakan tetamu Allah dengan standard perkhidmatan yang tertinggi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Terokai</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Tentang Kami', path: '#about' },
                { name: 'Pakej', path: '#packages' },
                { name: 'Proses Perjalanan', path: '#process' },
                { name: 'Galeri', path: '#gallery' },
                { name: 'Hubungi Kami', path: '#contact' }
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
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Lawati Kami</h3>
            <ul className="space-y-5 text-sm font-light">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5 opacity-80" />
                <span className="leading-relaxed">A8, (Tingkat Atas) Jalan Semeling Maju 1,<br />Taman Semeling Setia,<br />08100 Bedong<br />Kedah Darul Aman, Malaysia</span>
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
            <h3 className="text-gold-500 font-serif font-semibold text-lg mb-6 tracking-wide">Sentiasa Berhubung</h3>
            <p className="text-xs text-olive-200/70 mb-5 leading-relaxed">
              Sertai komuniti kami untuk peringatan rohani dan kemas kini tentang perlepasan kumpulan yang akan datang.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-olive-400 hover:text-gold-500 transition-colors"><Youtube size={18} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-olive-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-olive-400 font-light tracking-wide text-center md:text-left">
            &copy; {new Date().getFullYear()} Hijrah al Haramain HQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;