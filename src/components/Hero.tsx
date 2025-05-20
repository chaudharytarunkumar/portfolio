import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      const yOffset = -80;
      const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-indigo-900 text-white"
    >
      <div 
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/7135121/pexels-photo-7135121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-blue-300 text-xl mb-2 animate-fade-in-up">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up animation-delay-200">John Doe</h1>
          <h2 className="text-2xl md:text-3xl text-blue-200 mb-6 animate-fade-in-up animation-delay-400">AI/ML Enthusiast & Full Stack Developer</h2>
          <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-600">
            Passionate about creating intelligent solutions that make a difference
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-800">
            <button 
              onClick={scrollToAbout}
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get to know me
            </button>
            <a 
              href="#contact" 
              className="bg-transparent hover:bg-white/10 text-white border border-white py-3 px-8 rounded-lg transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;