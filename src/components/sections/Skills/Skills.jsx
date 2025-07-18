// File: src/components/sections/Skills/Skills.jsx
import React from 'react';

const Skills = ({ skills = [], isDarkMode }) => {
  return (
    <section
      id="skills"
      className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDarkMode ? 'bg-black/20' : 'bg-white/20'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-black/5 border-black/10'
              }`}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {group.category}
              </h3>

              <ul className="space-y-2">
                {group.items.map((skill, idx) => (
                  <li
                    key={idx}
                    className={`flex items-center gap-2 text-sm transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
