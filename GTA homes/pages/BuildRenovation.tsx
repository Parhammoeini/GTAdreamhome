import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Ruler, PenTool, CheckCircle } from 'lucide-react';

const renovationProjects = [
  {
    id: 1,
    title: "Modern Custom Home",
    description: "A 3,500 sq ft luxury build in North York featuring floor-to-ceiling windows and smart home integration.",
    imageUrl: "https://i.imgur.com/mksjiEH.jpeg"
  },
  {
    id: 2,
    title: "Chef's Kitchen Remodel",
    description: "Complete transformation with custom cabinetry, quartz waterfall island, and high-end appliances.",
    imageUrl: "https://i.imgur.com/647SQQz.jpeg"
  },
  {
    id: 3,
    title: "Luxury Basement Suite",
    description: "Underpinning and finishing a basement to create a high-ceiling entertainment zone with wet bar.",
    imageUrl: "https://i.imgur.com/hBsjqnD.jpeg"
  },
   {
    id: 4,
    title: "Master Bathroom Oasis",
    description: "Spa-inspired bathroom renovation featuring heated floors, freestanding tub, and glass rain shower.",
    imageUrl: "https://i.imgur.com/Tri7bot.jpeg"
  }
];

const BuildRenovation: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">GTA Dream Homes – Build & Renovation</h1>
          <p className="text-xl text-gold-400 max-w-2xl mx-auto">
            From Concept to Creation · Project Management · Custom Design
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
               <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Crafting Your Vision</h2>
               <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                 We specialize in transforming spaces. Whether it's a complete new build, a luxury kitchen renovation, or a commercial fit-out, GTA Dream Homes brings precision, quality materials, and expert craftsmanship to every project.
               </p>
               
               <div className="space-y-6">
                 {[
                   { icon: <Layers className="w-6 h-6"/>, title: "New Construction", text: "Full-service custom home building managed from ground-breaking to key turnover." },
                   { icon: <PenTool className="w-6 h-6"/>, title: "Renovation & Remodeling", text: "Modernizing interiors, basement finishing, and luxury kitchen/bath upgrades." },
                   { icon: <Ruler className="w-6 h-6"/>, title: "Design & Planning", text: "Architectural drawings, permit acquisition, and 3D interior design rendering." },
                 ].map((item, idx) => (
                   <div key={idx} className="flex gap-4">
                     <div className="bg-navy-900 text-gold-500 p-3 h-fit rounded-sm shadow-md">
                       {item.icon}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold text-navy-900 mb-2">{item.title}</h3>
                       <p className="text-gray-600">{item.text}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gold-100 rounded-r-lg"></div>
              <div className="grid grid-cols-2 gap-4 p-4">
                <img src="https://i.imgur.com/Tri7bot.jpeg" className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8" alt="Renovation 1" />
                <img src="https://i.imgur.com/hBsjqnD.jpeg" className="w-full h-64 object-cover rounded-lg shadow-md" alt="Renovation 2" />
                <img src="https://i.imgur.com/647SQQz.jpeg" className="w-full h-64 object-cover rounded-lg shadow-md transform translate-y-8" alt="Renovation 3" />
                <img src="https://i.imgur.com/mksjiEH.jpeg" className="w-full h-64 object-cover rounded-lg shadow-md" alt="Renovation 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Our Process</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { step: "01", title: "Consultation", desc: "We meet to discuss your goals, budget, and timeline." },
              { step: "02", title: "Design", desc: "Architectural planning and material selection tailored to your style." },
              { step: "03", title: "Build", desc: "Our expert tradespeople bring the design to life with regular updates." },
              { step: "04", title: "Reveal", desc: "Final walkthrough and project handover. Welcome to your dream space." },
            ].map((p, i) => (
              <div key={i} className="relative">
                 <div className="text-6xl font-bold text-navy-800 absolute -top-10 left-1/2 transform -translate-x-1/2 -z-0 opacity-50 select-none">
                   {p.step}
                 </div>
                 <div className="relative z-10 bg-navy-800/50 p-6 rounded-lg border border-navy-700 hover:border-gold-500 transition-colors">
                   <h3 className="text-xl font-bold text-gold-500 mb-3">{p.title}</h3>
                   <p className="text-gray-400">{p.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-navy-900 mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore a selection of our recently completed builds and renovations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {renovationProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                   <img
                     src={project.imageUrl}
                     alt={project.title}
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 transition-colors"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-navy-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gold-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ready to Renovate?</h2>
          <p className="text-navy-900 text-lg max-w-2xl mx-auto mb-8 font-medium">
            Contact our project management team for a free estimate and consultation.
          </p>
          <Link to="/#contact" className="px-10 py-4 bg-navy-900 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-colors shadow-lg rounded-sm">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BuildRenovation;
