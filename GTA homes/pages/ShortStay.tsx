import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, MapPin, Users, Star } from 'lucide-react';
import { Property } from '../types';

const properties: Property[] = [
  {
    id: 1,
    title: "Luxury Richmond Hill Suite",
    location: "Richmond Hill, ON",
    guests: 2,
    bedrooms: 1,
    imageUrl: "https://i.imgur.com/F3a5nYe.jpeg",
    pricePerNight: "$150",
    airbnbUrl: "https://www.airbnb.com/l/eJGdpFkr"
  },
  {
    id: 2,
    title: "Modern Richmond Hill Retreat",
    location: "Richmond Hill, ON",
    guests: 6,
    bedrooms: 3,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1259794742142668517/original/eb9c4461-49a2-4565-b422-ded1ef66e255.jpeg?im_w=720",
    pricePerNight: "$300",
    airbnbUrl: "https://www.airbnb.com/l/HJsD0c87"
  },
  {
    id: 3,
    title: "Mill Pond Executive Estate",
    location: "Richmond Hill, Mill Pond, ON",
    guests: 4,
    bedrooms: 2,
    imageUrl: "https://a0.muscache.com/im/pictures/hosting/Hosting-1503903647457500417/original/335b8e36-c83f-421b-956c-f8627e30e27c.png?im_w=960",
    pricePerNight: "$200",
    airbnbUrl: "https://www.airbnb.com/l/FPBPNp0t"
  },
  {
    id: 4,
    title: "Grand Markham Residence",
    location: "Markham, ON",
    guests: 8,
    bedrooms: 4,
    imageUrl: "https://i.imgur.com/HAmR4mn.jpeg",
    pricePerNight: "$450",
    airbnbUrl: "https://www.airbnb.com/l/afZPVDdw"
  },
  {
    id: 5,
    title: "Luxury Markham Suite",
    location: "Markham, ON",
    guests: 4, 
    bedrooms: 2,
    imageUrl: "https://i.imgur.com/JEn4GXA.jpeg",
    pricePerNight: "$250",
    airbnbUrl: "https://www.airbnb.com/l/LwmUi6IN"
  }
];

const ShortStay: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-navy-900/60"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">GTA Dream Homes – Short Stay</h1>
          <p className="text-xl text-gold-400 max-w-2xl mx-auto">
            Experience comfort, luxury, and convenience in our hand-picked properties.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Your Home Away From Home</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are traveling for business, visiting family, or simply need a weekend getaway, our Short Stay division offers a curated collection of premium rentals. All properties are professionally cleaned, fully furnished, and equipped with modern amenities.
          </p>
        </div>
      </section>

      {/* Property Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-navy-900 font-serif">Available Listings</h3>
            {/* Filter Placeholder */}
            <div className="flex gap-2">
              <span className="text-sm font-bold text-gray-500 uppercase tracking-wide self-center mr-2">Sort By:</span>
              <select className="bg-white border border-gray-300 rounded-sm px-3 py-1 text-sm focus:outline-none focus:border-gold-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                   <img 
                     src={property.imageUrl} 
                     alt={property.title} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-navy-900 font-bold text-sm shadow-sm flex items-center gap-1">
                     <Star className="w-3 h-3 text-gold-500 fill-current" /> 4.9
                   </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-navy-900 font-serif leading-tight">{property.title}</h4>
                    {property.pricePerNight && (
                      <span className="text-gold-600 font-bold whitespace-nowrap ml-2">{property.pricePerNight}<span className="text-gray-400 text-xs font-normal">/night</span></span>
                    )}
                  </div>
                  
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-1 flex-shrink-0" /> {property.location}
                  </div>
                  
                  <div className="flex gap-4 border-t border-gray-100 pt-4 text-sm text-gray-600 mb-6">
                    <span className="flex items-center gap-1"><Users className="w-4 h-4 text-gold-500" /> {property.guests} Guests</span>
                    <span className="flex items-center gap-1"><Wifi className="w-4 h-4 text-gold-500" /> Free WiFi</span>
                  </div>

                  <div className="mt-auto">
                    <a 
                      href={property.airbnbUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 bg-navy-900 text-white text-sm font-bold uppercase tracking-wider hover:bg-gold-600 transition-colors rounded-sm"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-4">Don't see what you're looking for?</p>
            <Link to="/#contact" className="text-navy-900 font-bold border-b-2 border-gold-500 hover:text-gold-600 transition-colors">
              Contact us for custom requests
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShortStay;
