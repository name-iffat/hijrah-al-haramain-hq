import React, { useState, useEffect } from 'react';
import { Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo/favicon_io/apple-touch-icon.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section based on scroll position
      const sections = ['home', 'packages', 'process', 'gallery', 'about', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.substring(1); // Remove '#' from href
    const element = document.getElementById(targetId);
    if (element) {
      const navHeight = 100; // Approximate navbar height
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Halaman Utama', path: '#home' },
    { name: 'Pakej', path: '#packages' },
    { name: 'Proses', path: '#process' },
    { name: 'Galeri', path: '#gallery' },
    { name: 'Tentang Kami', path: '#about' },
    { name: 'Hubungi', path: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-500 border-b ${isScrolled
        ? 'shadow-sm border-olive-100 py-3'
        : 'bg-transparent border-transparent py-6'
        }`}
    >
      {/* Background Layer with Pattern - Visible on Scroll */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-500 pointer-events-none overflow-hidden ${isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <div className="absolute inset-0 bg-olive-50/95 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-pattern-islamic opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 group">
            <div className={` rounded-full border transition-all duration-300 ${isScrolled
              ? 'border-gold-500 text-gold-600'
              : 'border-white/30 text-white bg-black/10 backdrop-blur-sm'
              }`}>
              <img src={logo} alt="Hijrah Logo" className="w-10 h-10" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl tracking-wider leading-none transition-colors ${isScrolled ? 'text-olive-900' : 'text-white text-shadow'
                }`}>
                HIJRAH
              </span>
              <span className={`text-[0.65rem] tracking-[0.2em] uppercase mt-1 font-medium transition-colors ${isScrolled ? 'text-gold-600' : 'text-sand-100 text-shadow'
                }`}>
                AL HARAMAIN HQ
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-sm tracking-wide transition-all duration-300 relative group py-2 ${activeSection === link.path.substring(1)
                  ? isScrolled ? 'text-gold-600 font-medium' : 'text-gold-400 font-medium'
                  : isScrolled ? 'text-olive-800 hover:text-gold-600' : 'text-white hover:text-gold-300 text-shadow'
                  }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 transform origin-left transition-transform duration-300 ${activeSection === link.path.substring(1) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border ${isScrolled
                ? 'bg-olive-800 text-white border-olive-800 hover:bg-olive-900 shadow-md'
                : 'bg-gold-500 text-white border-gold-500 hover:bg-white hover:text-gold-600 shadow-lg'
                }`}
            >
              Borang
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-olive-900' : 'text-white'
              }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-olive-900/98 backdrop-blur-xl z-50 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full relative">
          {/* Ornamental Background */}
          <div className="absolute inset-0 bg-pattern-islamic opacity-10 pointer-events-none"></div>

          <div className="flex justify-between items-center p-6 border-b border-olive-800 relative z-10">
            <span className="font-serif text-white font-bold text-xl tracking-wider">MENU</span>
            <button onClick={() => setIsOpen(false)} className="text-sand-200 hover:text-white transition-colors p-2">
              <X size={28} />
            </button>
          </div>

          <div className="flex flex-col p-8 space-y-6 flex-1 justify-center items-center relative z-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`text-3xl font-serif font-medium transition-colors ${activeSection === link.path.substring(1) ? 'text-gold-500' : 'text-olive-100 hover:text-white'
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="p-8 border-t border-olive-800 relative z-10">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="block w-full text-center py-4 bg-gold-500 text-white text-lg font-medium tracking-widest hover:bg-gold-600 transition-colors rounded-full"
            >
              START JOURNEY
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;