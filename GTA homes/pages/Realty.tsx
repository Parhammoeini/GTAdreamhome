import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Building, Key, TrendingUp, Search, Globe, Award } from 'lucide-react';

const Realty: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">GTA Dream Homes – Realty</h1>
          <p className="text-xl text-gold-400 max-w-2xl mx-auto">
            Residential & Commercial · Buy, Sell, Rent, Invest
          </p>
        </div>
      </div>

      {/* Agent Introduction Section */}
      <section className="relative z-20 -mt-32 pb-12">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col lg:flex-row border-t-4 border-gold-500">
            {/* Images Column */}
            <div className="lg:w-1/3 bg-gray-100 flex flex-col relative group">
              {/* Agent Photo Placeholder */}
              <div className="relative h-96 lg:h-3/5 overflow-hidden bg-gray-200 flex items-center justify-center">
                 <img
                   src="https://i.imgur.com/DgMms57.png"
                   alt="Thom Mazinani"
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-navy-900/90 text-white p-4 backdrop-blur-sm">
                    <p className="font-serif font-bold text-xl">Thom Mazinani</p>
                    <p className="text-gold-500 text-xs uppercase tracking-widest font-bold">Director & Licensed Agent</p>
                 </div>
              </div>
              
              {/* Business Card Section */}
              <div className="flex-grow bg-gray-200 p-8 flex flex-col items-center justify-center border-t border-gray-300">
                 <div className="w-full max-w-md aspect-[2/1] bg-navy-900 rounded-lg shadow-2xl overflow-hidden relative group transform hover:scale-105 transition-transform duration-300 select-none">
                    <div className="flex h-full">
                      {/* Left Content - Further reduced width to maximize photo space */}
                      <div className="w-[35%] p-3 md:p-4 flex flex-col justify-between text-white z-10 relative">
                        <div>
                          <h3 className="font-sans font-bold text-[8px] md:text-xs leading-tight tracking-wider uppercase mb-1">Sales Rep</h3>
                          <h3 className="font-sans font-bold text-[8px] md:text-xs leading-tight tracking-wider uppercase mb-2">Realtor®</h3>
                          
                          <div className="text-[8px] font-light tracking-wide opacity-90 leading-tight space-y-0.5">
                            <p className="font-bold">EXP REALTY</p>
                            <p className="opacity-75">Brokerage</p>
                          </div>
                        </div>
                        
                        <div className="text-[7px] opacity-60 tracking-wider leading-tight">
                           <p>Cloud-Based</p>
                        </div>
                      </div>
                      
                      {/* Right Image - Increased width significantly to 65% for a "longer" photo box */}
                      <div className="w-[65%] relative">
                        <div className="absolute inset-0 bg-gray-300">
                          <img 
                            src="https://i.imgur.com/62ddGqn.jpeg"
                            alt="Thom Mazinani"
                            className="w-full h-full object-cover object-top"
                          />
                        </div>
                        {/* Diagonal Slash Overlay - Adjusted skew and position for new ratio */}
                        <div className="absolute top-0 left-0 h-full w-12 bg-navy-900 transform -skew-x-[15deg] -translate-x-6"></div>
                      </div>
                    </div>
                 </div>
                 <p className="mt-3 text-gray-500 text-[10px] uppercase tracking-widest font-bold">Official Business Card</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:w-2/3 p-8 md:p-12 flex flex-col justify-center">
               <div className="flex items-center gap-3 mb-6">
                  <span className="bg-navy-50 text-navy-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-navy-100">
                    eXp Realty Partner
                  </span>
               </div>
               
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">
                 Meet Your Agent – Thom Mazinani
               </h2>

               <div className="prose prose-lg text-gray-600 mb-8 leading-relaxed">
                 <p className="mb-4">
                   As a licensed Real Estate Agent with <strong>eXp Realty</strong>, Thom brings a unique advantage to his clients:
                   over a decade of hands-on experience in construction, project management, and residential design in the GTA.
                 </p>
                 <p>
                   His combined background in building and real estate allows him to provide highly accurate market analysis,
                   precise property evaluations, and strategic guidance for buyers, sellers, and investors.
                 </p>
               </div>

               {/* eXp Benefits */}
               <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-500 mb-8">
                  <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
                    <Globe className="w-4 h-4 text-gold-600" />
                    Powered by eXp Realty Platform
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700">
                    {[
                      'Real-time MLS access', 
                      'Fast listing uploads', 
                      'Advanced marketing tools', 
                      'Seamless virtual collaboration', 
                      'Professional transaction support'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0"></span> 
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>

               {/* Why Work With Thom */}
               <div className="mb-10">
                  <h3 className="text-xl font-serif font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gold-500" />
                    Why Work With Thom?
                  </h3>
                  <p className="text-gray-600 italic border-l-2 border-gray-200 pl-4 py-1">
                    "Thom’s dual expertise provides clients with a rare advantage:
                    insight into property structure, renovation potential, long-term value, and real-world construction quality.
                    Whether buying, selling, or investing, his approach blends technical knowledge with data-driven market strategy."
                  </p>
               </div>

               <div>
                  <a
                    href="https://www.exprealty.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-navy-900 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-gold-600 transition-all shadow-lg transform hover:-translate-y-0.5"
                  >
                    Browse Listings on eXp Realty
                  </a>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-serif font-bold text-navy-900">Comprehensive Real Estate Services</h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto mt-3"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Buy', icon: <Search className="w-8 h-8"/>, desc: 'Find your perfect home with our curated listings and expert market guidance.' },
              { title: 'Sell', icon: <Key className="w-8 h-8"/>, desc: 'Maximize your property value with our strategic marketing and negotiation.' },
              { title: 'Rent', icon: <Building className="w-8 h-8"/>, desc: 'Luxury leasing solutions for tenants and landlords across the GTA.' },
              { title: 'Invest', icon: <TrendingUp className="w-8 h-8"/>, desc: 'Strategic investment opportunities for long-term growth and returns.' },
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-t-4 border-gold-500 group hover:-translate-y-1">
                <div className="text-navy-900 mb-4 group-hover:text-gold-600 transition-colors">{service.icon}</div>
                <h3 className="text-xl font-bold font-serif mb-3 text-navy-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* General Company Value Prop */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
               alt="Luxury Interior" 
               className="rounded-lg shadow-xl"
             />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Expertise in GTA Real Estate</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At GTA Dream Homes Realty, we understand that a home is more than just a place to live—it's a cornerstone of your life and a significant investment. Whether you are looking for a luxury condo downtown, a family home in Richmond Hill, or a commercial space for your business, our team is dedicated to exceeding your expectations.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Exclusive access to off-market listings',
                'Comprehensive market analysis',
                'Personalized property tours',
                'Full legal and financial support network'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <div className="bg-gold-100 p-1 rounded-full">
                    <Check className="w-4 h-4 text-gold-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/#contact" className="px-8 py-3 bg-navy-900 text-white font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors rounded-sm inline-block">
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realty;
