import React, { useState } from 'react';
import { ZoomIn, Filter } from 'lucide-react';

interface ProjectImage {
  id: number;
  category: 'Build' | 'Realty' | 'Short Stay';
  title: string;
  imageUrl: string;
  description: string;
}

const projects: ProjectImage[] = [
  {
    id: 1,
    category: 'Build',
    title: 'Modern Kitchen Renovation',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Complete overhaul featuring quartz countertops and custom cabinetry.'
  },
  {
    id: 2,
    category: 'Realty',
    title: 'Richmond Hill Luxury Estate',
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sold over asking in 4 days.'
  },
  {
    id: 3,
    category: 'Short Stay',
    title: 'Downtown Executive Loft',
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-end furnishings for business travelers.'
  },
  {
    id: 4,
    category: 'Build',
    title: 'Custom Bathroom Design',
    imageUrl: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Spa-inspired master bath renovation.'
  },
  {
    id: 5,
    category: 'Realty',
    title: 'Waterfront Condo Staging',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Strategic staging to maximize view appeal.'
  },
  {
    id: 6,
    category: 'Build',
    title: 'Open Concept Living',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Structural modification to create open flow.'
  },
  {
    id: 7,
    category: 'Short Stay',
    title: 'Cozy Lakeside Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-40891a909d99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Designed for relaxation and comfort.'
  },
  {
    id: 8,
    category: 'Build',
    title: 'Exterior Facade Upgrade',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern stone and stucco finish.'
  },
  {
    id: 9,
    category: 'Realty',
    title: 'Investment Property Analysis',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Duplex conversion project.'
  }
];

const ProjectsGallery: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Build' | 'Realty' | 'Short Stay'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
        >
          <div className="absolute inset-0 bg-navy-900/70"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">Projects & Gallery</h1>
          <p className="text-xl text-gold-400 max-w-2xl mx-auto">
            A showcase of our finest work in construction, design, and real estate.
          </p>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Build', 'Realty', 'Short Stay'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-navy-900 text-gold-500 shadow-lg' 
                    : 'bg-white text-gray-500 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-xl bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/60 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                       <ZoomIn className="text-gold-500 w-10 h-10" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsGallery;