import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, MapPin, Instagram, Facebook, Linkedin, Home } from 'lucide-react';
import ChatWidget from './ChatWidget';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Realty', path: '/realty' },
    { name: 'Build & Renovation', path: '/build-renovation' },
    { name: 'Short Stay', path: '/short-stay' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-slate-800">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-navy-900 shadow-lg py-3' : 'bg-navy-900/95 py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gold-500 rounded-sm flex items-center justify-center">
              <Home className="text-white w-8 h-8" />
            </div>
            <div className="text-white">
              <h1 className="text-xl md:text-2xl font-bold tracking-wider leading-none font-serif">
                GTA DREAM HOMES
              </h1>
              <p className="text-[0.65rem] md:text-xs text-gold-500 uppercase tracking-[0.2em] mt-1">
                Building Dreams, Finding Homes
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium uppercase tracking-widest hover:text-gold-500 transition-colors ${
                  location.pathname === link.path ? 'text-gold-500' : 'text-gray-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="px-6 py-2 bg-gold-600 text-white text-sm font-bold uppercase tracking-wider hover:bg-gold-500 transition-colors rounded-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-navy-900 border-t border-gray-800 shadow-xl py-6 px-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-serif hover:text-gold-500 ${
                  location.pathname === link.path ? 'text-gold-500' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/#contact"
              className="text-lg font-serif text-white hover:text-gold-500 mt-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Footer */}
      <footer className="bg-navy-900 text-white pt-16 pb-8 border-t-4 border-gold-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                 <div className="w-10 h-10 bg-gold-500 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Home className="text-white w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-bold font-serif tracking-wider">GTA DREAM HOMES</h2>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your premier partner for luxury real estate, custom construction, and premium short-term rentals across the Greater Toronto Area.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-serif font-bold mb-6 text-gold-500">Divisions</h3>
              <ul className="space-y-4">
                <li>
                  <Link to="/realty" className="text-gray-300 hover:text-gold-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Realty
                  </Link>
                </li>
                <li>
                  <Link to="/build-renovation" className="text-gray-300 hover:text-gold-500 transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Build & Renovation
                  </Link>
                </li>
                <li>
                  <Link to="/short-stay" className="text-gray-300 hover:text-gold-500 transition-colors flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Short Stay
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-gray-300 hover:text-gold-500 transition-colors flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span> Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div id="contact-footer">
              <h3 className="text-lg font-serif font-bold mb-6 text-gold-500">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    20 Merrill Avenue,<br />
                    Richmond Hill, Ontario
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <a href="mailto:gtadreamhome.inc@gmail.com" className="text-gray-300 hover:text-white">
                    gtadreamhome.inc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} GTA Dream Homes Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
