import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { skills, experiences } from "../../data/aboutData";

const About = () => {
  const { isVisible, isDarkMode } = useTheme();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio */}
            <div
              className={`space-y-8 ${
                isDarkMode ? "text-slate-300" : "text-gray-600"
              }`}
            >
              <div
                className={`p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-white/80 border border-gray-200"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  My Story
                </h3>
                <p className="text-lg leading-relaxed mb-4">
                  I’m a licensed Electronics Engineer with a background in
                  telecommunications and Public Key Infrastructure (PKI). My
                  experience in these fields gave me a strong foundation in
                  infrastructure and large-scale problem-solving, while
                  reinforcing the importance of precision, structured thinking,
                  and reliability in everything I build.
                </p>
                <p className="text-lg leading-relaxed">
                  I'm a certified AWS Cloud Practitioner, with a solid grasp of cloud 
                  infrastructure and scalable systems.
                  I'm seeking for opportunities to grow with a collaborative
                  team, keep learning, and build a long-term career in tech.
                </p>
              </div>

              {/* Skills */}
              <div
                className={`p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-slate-800/50 border border-slate-700"
                    : "bg-white/80 border border-gray-200"
                }`}
              >
                <h3
                  className={`text-2xl font-semibold mb-4 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Core Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        isDarkMode
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30"
                          : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-200"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Experience */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-semibold mb-6 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Experience
              </h3>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm ${
                    isDarkMode
                      ? "bg-slate-800/50 border border-slate-700 hover:border-slate-600"
                      : "bg-white/80 border border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4
                      className={`text-lg font-semibold ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {exp.title}
                    </h4>
                    <span
                      className={`text-sm px-3 py-1 rounded-full ${
                        isDarkMode
                          ? "bg-blue-500/20 text-blue-400"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-purple-400 font-medium mb-3">
                    {exp.company}
                  </p>
                  <p
                    className={`leading-relaxed ${
                      isDarkMode ? "text-slate-300" : "text-gray-600"
                    }`}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
