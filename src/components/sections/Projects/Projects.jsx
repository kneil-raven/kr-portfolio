// File: src/components/sections/Projects/Projects.jsx
import React from 'react';
import { GithubIcon, ExternalLink, Code } from 'lucide-react';

const Projects = ({ projects = [], isDarkMode }) => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden transition-all duration-300 border backdrop-blur-sm hover:scale-105 ${
                isDarkMode
                  ? 'bg-white/5 border-white/10'
                  : 'bg-black/5 border-black/10'
              }`}
            >
              <div
                className={`h-48 flex items-center justify-center transition-all duration-300 bg-gradient-to-r ${
                  isDarkMode
                    ? 'from-blue-500/20 to-purple-600/20'
                    : 'from-blue-500/30 to-purple-600/30'
                }`}
              >
                <Code size={48} className="text-blue-400" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

                <p
                  className={`mb-4 text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <GithubIcon size={16} />
                    <span className="text-sm">Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
