import React from 'react';
import { Download } from 'lucide-react';

const Resume: React.FC = () => {
  // Dummy resume URL - in a real application, this would point to your actual resume
  const resumeUrl = '/resume.pdf';
  
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Resume</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A summary of my education, work experience, and qualifications.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800">John Doe</h3>
              <a 
                href={resumeUrl}
                download="john_doe_resume.pdf"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors duration-300"
              >
                <Download size={18} />
                Download PDF
              </a>
            </div>
            
            {/* Education Section */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">E</span>
                Education
              </h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-lg font-medium text-gray-800">B. Tech (CSE-AIML)</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">2022-Present</span>
                  </div>
                  <p className="text-gray-600 mb-1">Dr APJ Abdul Kalam Technical University, Lucknow</p>
                  <p className="text-gray-500 text-sm">
                    Specialized in Machine Learning and Artificial Intelligence.
                  </p>
                </div>
                
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-lg font-medium text-gray-800">Intermediate</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">2021-2022</span>
                  </div>
                  <p className="text-gray-600 mb-1">Jaypee Vidya Mandir, Anoopshahr</p>
                  {/* <p className="text-gray-500 text-sm">
                    Graduated with honors. Focus on algorithms, data structures, and software architecture.
                  </p> */}
                </div>
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-lg font-medium text-gray-800">Intermediate</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">2021-2022</span>
                  </div>
                  <p className="text-gray-600 mb-1">Jaypee Vidya Mandir, Anoopshahr</p>
                  {/* <p className="text-gray-500 text-sm">
                    Graduated with honors. Focus on algorithms, data structures, and software architecture.
                  </p> */}
                </div>
              </div>
            </div>
            
            {/* Experience Section */}
            <div className="mb-10">
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">W</span>
                Work Experience
              </h4>
              
              <div className="space-y-6">
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-lg font-medium text-gray-800">Senior AI Engineer</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">2020-Present</span>
                  </div>
                  <p className="text-gray-600 mb-1">TechCorp, San Francisco</p>
                  <ul className="text-gray-500 text-sm list-disc list-inside">
                    <li>Lead a team of 5 engineers developing ML models for image recognition</li>
                    <li>Improved model accuracy by 23% while reducing inference time by 40%</li>
                    <li>Designed and implemented the data pipeline infrastructure</li>
                    <li>Collaborated with product team to define AI features for the platform</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-blue-600 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <h5 className="text-lg font-medium text-gray-800">Full Stack Developer</h5>
                    <span className="text-sm bg-blue-100 text-blue-800 py-1 px-2 rounded">2018-2020</span>
                  </div>
                  <p className="text-gray-600 mb-1">InnovateTech, Boston</p>
                  <ul className="text-gray-500 text-sm list-disc list-inside">
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
                    <li>Implemented RESTful APIs for mobile and web clients</li>
                    <li>Reduced page load time by 60% through optimization techniques</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Skills Summary */}
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-2">S</span>
                Skills Overview
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="text-lg font-medium text-gray-800 mb-2">Technical Skills</h5>
                  <p className="text-gray-500 text-sm">
                    Python, JavaScript, TypeScript, React, Node.js, TensorFlow, PyTorch, SQL, MongoDB, Docker, AWS, Git
                  </p>
                </div>
                <div>
                  <h5 className="text-lg font-medium text-gray-800 mb-2">Soft Skills</h5>
                  <p className="text-gray-500 text-sm">
                    Team Leadership, Project Management, Problem Solving, Communication, Mentoring, Agile Methodology
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              For a more detailed version of my resume, please download the PDF version.
            </p>
            <a 
              href={resumeUrl}
              download="john_doe_resume.pdf"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg transition-colors duration-300"
            >
              <Download size={20} />
              Download Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;