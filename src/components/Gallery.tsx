import React, { useState } from 'react';
import { X } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Sample gallery items - in a real application, these would come from your backend
  const galleryItems = [
    {
      id: 1,
      title: 'Machine Learning Certification',
      image: 'https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'certificate',
      date: 'May 2022'
    },
    {
      id: 2,
      title: 'Tech Conference 2023',
      image: 'https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'event',
      date: 'June 2023'
    },
    {
      id: 3,
      title: 'Best Innovation Award',
      image: 'https://images.pexels.com/photos/5926397/pexels-photo-5926397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'award',
      date: 'January 2023'
    },
    {
      id: 4,
      title: 'Web Development Certificate',
      image: 'https://images.pexels.com/photos/4065133/pexels-photo-4065133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'certificate',
      date: 'August 2021'
    },
    {
      id: 5,
      title: 'Hackathon Winner',
      image: 'https://images.pexels.com/photos/6237714/pexels-photo-6237714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'award',
      date: 'November 2022'
    },
    {
      id: 6,
      title: 'Team Building Event',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'event',
      date: 'April 2023'
    },
  ];
  
  // Categories for filtering
  const categories = ['all', 'certificate', 'award', 'event'];
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);
  
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Gallery</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A collection of my achievements, certifications, and memorable moments.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-gray-100 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                className={`py-2 px-4 rounded-md text-sm font-medium capitalize transition-colors duration-300 ${
                  activeCategory === category 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-transparent text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mb-2 capitalize">
                  {item.category}
                </span>
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl mx-4">
              <button 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors duration-300"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <img 
                src={selectedImage} 
                alt="Gallery" 
                className="max-h-[80vh] max-w-full rounded shadow-2xl"
                onClick={e => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;