import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ProjectData, SkillData, MessageData } from './types';

function App() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [loading, setLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real application, these would be API calls to your backend
        // For demo purposes, we're importing sample data
        const projectsResponse = await import('./data/projects');
        const skillsResponse = await import('./data/skills');
        
        setProjects(projectsResponse.default);
        setSkills(skillsResponse.default);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (messageData: MessageData) => {
    try {
      // In a real application, this would be an API call to your backend
      console.log('Sending message data:', messageData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return { success: true, message: 'Message sent successfully!' };
    } catch (error) {
      console.error('Error submitting form:', error);
      return { success: false, message: 'Failed to send message. Please try again.' };
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Resume />
        <Projects projects={projects} loading={loading} />
        <Skills skills={skills} loading={loading} />
        <Gallery />
        <Contact onSubmit={handleContactSubmit} />
      </main>
      
      <Footer />
      
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-2 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;