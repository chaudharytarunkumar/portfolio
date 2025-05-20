import React from 'react';
import { SkillData } from '../types';

interface SkillsProps {
  skills: SkillData[];
  loading: boolean;
}

const Skills: React.FC<SkillsProps> = ({ skills, loading }) => {
  // Filter skills by category
  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical and soft skills.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {technicalSkills.map(skill => (
                  <div key={skill.id} className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                      <span className="text-blue-600 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {softSkills.map(skill => (
                  <div 
                    key={skill.id}
                    className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-blue-600"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{skill.name}</h4>
                    <div className="text-yellow-500 flex justify-center">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-5 h-5 ${i < Math.round(skill.level / 20) ? 'text-yellow-500' : 'text-gray-300'}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;