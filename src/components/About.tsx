import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="bg-blue-600 w-full h-full absolute top-4 left-4 rounded-lg"></div>
              <img 
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="About Me" 
                className="w-full h-auto rounded-lg relative z-10 shadow-xl"
              />
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              I'm Tarun Kumar, a passionate AI/ML Engineer and Full Stack Developer
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 1 years of experience in the tech industry, I've worked on various projects ranging from web applications to machine learning systems. My passion lies in creating intelligent solutions that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Education</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>B. Tech (CSE-AIML), Dr APJ Abdul Kalam Technical University, Lucknow</li>
                  <li>Intermediate, Jaypee Vidya Mandir, Anoopshahr</li>
                  <li>Matriculation, Jaypee Vidya Mandir, Anoopshahr</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Experience</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>GeeksForGeeks Students Community Chairperson (2024-Present)</li>
                  <li>GeeksForGeeks Campus Mantri (2024-Present)</li>
                  <li>IIT Campus Ambassador (2023-2024)</li>
                  <li>Internshala Student Partner at Internshala (2023)</li>
                </ul>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Outside of work, I enjoy listening music, teaching, mentoring, and contributing to open-source projects. I'm always looking for new challenges and opportunities to grow both personally and professionally.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Contact Me
              </a>
              <a 
                href="#resume" 
                className="bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300 py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;