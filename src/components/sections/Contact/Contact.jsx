import React from "react";
import contactItems from "../../data/contactItems";
import { useTheme } from "../../contexts/ThemeContext";

const Contact = () => {
  const { isDarkMode } = useTheme();

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Let's Work Together
        </h2>

        <p
          className={`text-xl mb-12 transition-colors duration-300 ${
            isDarkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactItems.map(({ icon, title, text }, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 border backdrop-blur-sm transition-all duration-300 ${
                isDarkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-black/5 border-black/10"
              }`}
            >
              {icon}
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p
                className={`transition-colors duration-300 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* working functionality for the mailto link */}
        <a href="mailto:example@example.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg transform transition-all duration-300 
            hover:from-blue-600 hover:to-purple-700 hover:scale-105"
        >
          Start a Conversation
        </a>

      </div>
    </section>
  );
};

export default Contact;
