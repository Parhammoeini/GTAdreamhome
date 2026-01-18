import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Star, Home as HomeIcon, Hammer, BedDouble, Phone } from 'lucide-react';
import { TeamMember } from '../types';

// EDIT THESE URLS TO CHANGE TEAM PHOTOS
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Thom Mazinani',
    role: 'Director',
    description: 'Visionary leadership driving excellence in GTA real estate and development.',
    imageUrl: 'https://i.imgur.com/DgMms57.png',
    phone: '647-450-7567'
  },
  {
    id: 2,
    name: 'Sam Mazinani',
    role: 'Senior Partner',
    description: 'Expert strategies in investment and property management solutions.',
    imageUrl: 'https://i.imgur.com/xrXNrU3.png',
    phone: '647-563-1835'
  },
  {
    id: 3,
    name: 'Marcus Mir',
    role: 'Head of Operations',
    description: 'Ensuring seamless execution across all construction and rental projects.',
    imageUrl: 'https://i.imgur.com/061qd0H.png',
    phone: '437-661-3808'
  },
  {
    id: 4,
    name: 'Patrick Moeni',
    role: 'Sales Executive',
    description: 'Connecting clients with their dream properties through dedicated service.',
    imageUrl: 'https://i.imgur.com/OAnpaE1.png',
    phone: '416-508-2068'
  },
];

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.getElementById(location.hash.substring(1));
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-navy-900/50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <div className="mb-6 inline-block p-3 border border-gold-500/50 rounded-sm bg-black/30 backdrop-blur-sm animate-fade-in">
             <span className="text-gold-400 tracking-[0.3em] text-xs md:text-sm font-bold uppercase">Welcome to GTA Dream Homes</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Building Dreams,<br />
            <span className="text-gold-500">Finding Homes.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light">
            Your partner in luxury real estate, custom build & renovation, and premium short-stay accommodations across the Greater Toronto Area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/realty" className="px-8 py-4 bg-gold-600 text-white font-bold uppercase tracking-widest hover:bg-gold-500 transition-all transform hover:-translate-y-1 rounded-sm shadow-lg">
              Find a Property
            </Link>
            <Link to="/build-renovation" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all transform hover:-translate-y-1 rounded-sm">
              Start Building
            </Link>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Our Divisions</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Three distinct pillars of excellence working together to provide comprehensive property solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Realty Card */}
            <div className="group bg-white rounded-md shadow-xl overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url("https://i.imgur.com/62ddGqn.jpeg")' }}
                ></div>
                <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                 <div className="absolute -top-8 left-8 bg-gold-500 w-16 h-16 flex items-center justify-center rounded-sm shadow-lg">
                   <HomeIcon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 mt-6">Realty Services with Thom</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Professional real estate solutions for buying, selling, renting, and investing across the GTA — powered by local expertise and personalized guidance.
                </p>
                <Link to="/realty" className="inline-flex items-center text-gold-600 font-bold uppercase text-sm tracking-wider hover:text-navy-900 transition-colors">
                  Explore Realty Services <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Build Card */}
            <div className="group bg-white rounded-md shadow-xl overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url("https://i.imgur.com/FIR3qtg.png")' }}
                ></div>
                 <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                 <div className="absolute -top-8 left-8 bg-gold-500 w-16 h-16 flex items-center justify-center rounded-sm shadow-lg">
                   <Hammer className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 mt-6">Build & Renovation Services</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  High-quality construction, renovation, and project management designed to elevate every home with precision craftsmanship.
                </p>
                <Link to="/build-renovation" className="inline-flex items-center text-gold-600 font-bold uppercase text-sm tracking-wider hover:text-navy-900 transition-colors">
                  Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* Short Stay Card */}
            <div className="group bg-white rounded-md shadow-xl overflow-hidden flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: 'url("https://a0.muscache.com/im/pictures/hosting/Hosting-1503903647457500417/original/335b8e36-c83f-421b-956c-f8627e30e27c.png?im_w=960")' }}
                ></div>
                 <div className="absolute inset-0 bg-navy-900/30 group-hover:bg-navy-900/10 transition-colors"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow relative">
                 <div className="absolute -top-8 left-8 bg-gold-500 w-16 h-16 flex items-center justify-center rounded-sm shadow-lg">
                   <BedDouble className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-navy-900 mb-4 mt-6">GTA Dream Homes Short-Stay</h3>
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  Premium short-term rental suites designed for comfort, privacy, and a 5-star guest experience.
                </p>
                <Link to="/short-stay" className="inline-flex items-center text-gold-600 font-bold uppercase text-sm tracking-wider hover:text-navy-900 transition-colors">
                  Explore Short-Stay Listings <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-600 font-bold tracking-widest uppercase text-sm">Our People</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mt-2">Meet The Team</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="relative overflow-hidden rounded-md mb-4 aspect-[3/4]">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/5 transition-colors"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-navy-900">{member.name}</h3>
                  <p className="text-gold-600 font-medium text-sm uppercase tracking-wide mb-1">{member.role}</p>
                  {member.phone && (
                    <a href={`tel:${member.phone.replace(/[^0-9]/g, '')}`} className="inline-flex items-center justify-center gap-1.5 text-navy-800 hover:text-gold-600 font-bold text-sm mb-3 transition-colors">
                      <Phone className="w-3.5 h-3.5" />
                      {member.phone}
                    </a>
                  )}
                  <p className="text-gray-500 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-navy-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-300 mb-10 text-lg">
                Ready to find your dream home, start a renovation, or book a stay? Contact our expert team today.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-md">
                    <HomeIcon className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Our Office</h4>
                    <p className="text-gray-400">20 Merrill Avenue,<br/>Richmond Hill, Ontario</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold-500/20 p-3 rounded-md">
                    <Star className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-gray-400">gtadreamhome.inc@gmail.com</p>
                    <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-navy-800">
                <p className="text-gray-400 text-sm">
                   Our team is dedicated to providing specialized service across all divisions. Whether you need investment advice from Sam, project coordination from Marcus, or property viewing with Patrick, we are here to serve.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-2xl text-slate-800">
              <h3 className="text-2xl font-serif font-bold text-navy-900 mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                  <input type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" defaultValue="gtadreamhome.inc@gmail.com" />
                </div>
                 <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Division of Interest</label>
                  <select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors">
                    <option>Realty</option>
                    <option>Build & Renovation</option>
                    <option>Short Stay</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 p-3 rounded-sm focus:outline-none focus:border-gold-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-navy-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-gold-600 transition-colors rounded-sm">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
