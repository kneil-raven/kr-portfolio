## Folder Structure for the Portfolio
portfolio/
├── public/
│   ├── vite.svg
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button/
│   │   │   │   ├── Button.jsx
│   │   │   │   └── index.js
│   │   │   ├── ThemeToggle/
│   │   │   │   ├── ThemeToggle.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── layout/
│   │   │   ├── Header/
│   │   │   │   ├── Header.jsx
│   │   │   │   ├── Navigation.jsx
│   │   │   │   ├── MobileMenu.jsx
│   │   │   │   └── index.js
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   ├── sections/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── index.js
│   │   │   ├── About/
│   │   │   │   ├── About.jsx
│   │   │   │   └── index.js
│   │   │   ├── Projects/
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── ProjectCard.jsx
│   │   │   │   └── index.js
│   │   │   ├── Skills/
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── SkillCard.jsx
│   │   │   │   └── index.js
│   │   │   ├── Contact/
│   │   │   │   ├── Contact.jsx
│   │   │   │   ├── ContactCard.jsx
│   │   │   │   └── index.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── styles/
│   │   ├── globals.css
│   │   ├── components/
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   └── navigation.css
│   │   └── index.js
│   ├── hooks/
│   │   ├── useTheme.js
│   │   ├── useScrollSpy.js
│   │   └── index.js
│   ├── contexts/
│   │   ├── ThemeContext.jsx
│   │   └── index.js
│   ├── utils/
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── index.js
│   ├── data/
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── navigation.js
│   │   └── index.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md


## Portfolio using R
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Briefcase, User, MessageSquare, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const projects = [
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
      tech: ["React", "TypeScript", "Python", "TensorFlow", "AWS"],
      github: "#",
      live: "#"
    },
    {
      title: "Blockchain Marketplace",
      description: "Decentralized NFT marketplace with smart contracts and Web3 integration.",
      tech: ["Next.js", "Solidity", "Web3.js", "IPFS", "Ethereum"],
      github: "#",
      live: "#"
    },
    {
      title: "Cloud-Native Microservices",
      description: "Scalable microservices architecture with containerization and orchestration.",
      tech: ["Node.js", "Docker", "Kubernetes", "MongoDB", "Redis"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Next.js", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Go", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest"] }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${
        isDarkMode 
          ? 'bg-black/20 border-white/10' 
          : 'bg-white/20 border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex Chen
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'hover:bg-white/10' 
                      : 'hover:bg-black/10'
                  } ${
                    activeSection === item.id 
                      ? `${isDarkMode ? 'bg-white/20 text-blue-400' : 'bg-black/20 text-blue-600'}` 
                      : `${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-black'}`
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'hover:bg-white/10 text-yellow-400' 
                    : 'hover:bg-black/10 text-purple-600'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isDarkMode 
                    ? 'hover:bg-white/10 text-yellow-400' 
                    : 'hover:bg-black/10 text-purple-600'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden backdrop-blur-lg border-t transition-all duration-300 ${
            isDarkMode 
              ? 'bg-black/30 border-white/10' 
              : 'bg-white/30 border-black/10'
          }`}>
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left transition-colors ${
                    isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 transition-all duration-300">
                <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDarkMode ? 'bg-slate-800' : 'bg-white'
                }`}>
                  <span className="text-4xl font-bold">AC</span>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Software Engineer
              </span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Building innovative solutions with modern technologies. 
              Passionate about creating scalable, user-centric applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-3 border-2 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-white/30 hover:border-white/50 hover:bg-white/10' 
                    : 'border-black/30 hover:border-black/50 hover:bg-black/10'
                }`}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDarkMode ? 'bg-black/20' : 'bg-white/20'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </h2>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                I'm a passionate software engineer with over 5 years of experience building 
                scalable web applications and distributed systems. I love solving complex problems 
                and turning ideas into reality through clean, efficient code.
              </p>
              <p className={`text-lg mb-6 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                My journey spans from frontend development with React and Vue.js to backend 
                architecture with Node.js and Python. I'm also experienced in cloud technologies, 
                DevOps practices, and modern development workflows.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`p-3 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                }`}>
                  <Github size={24} />
                </a>
                <a href="#" className={`p-3 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                }`}>
                  <Linkedin size={24} />
                </a>
                <a href="#" className={`p-3 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'
                }`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 bg-gradient-to-r rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isDarkMode 
                  ? 'from-blue-500/20 to-purple-600/20' 
                  : 'from-blue-500/30 to-purple-600/30'
              }`}>
                <div className="text-center">
                  <Code size={80} className="mx-auto mb-4 text-blue-400" />
                  <p className={`text-lg transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>Passionate about clean code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-black/5 border-black/10'
              }`}>
                <div className={`h-48 bg-gradient-to-r flex items-center justify-center transition-all duration-300 ${
                  isDarkMode 
                    ? 'from-blue-500/20 to-purple-600/20' 
                    : 'from-blue-500/30 to-purple-600/30'
                }`}>
                  <Code size={48} className="text-blue-400" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className={`mb-4 text-sm transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={project.github} className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}>
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a href={project.live} className={`flex items-center space-x-2 transition-colors ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white' 
                        : 'text-gray-600 hover:text-black'
                    }`}>
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

      {/* Skills Section */}
      <section id="skills" className={`py-16 px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isDarkMode ? 'bg-black/20' : 'bg-white/20'
      }`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-white/5 border-white/10' 
                  : 'bg-black/5 border-black/10'
              }`}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className={`flex items-center space-x-2 transition-colors duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className={`text-xl mb-12 transition-colors duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can bring your ideas to life.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-black/5 border-black/10'
            }`}>
              <Mail className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>alex.chen@example.com</p>
            </div>
            <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-black/5 border-black/10'
            }`}>
              <Github className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>github.com/alexchen</p>
            </div>
            <div className={`backdrop-blur-sm rounded-xl p-6 border transition-all duration-300 ${
              isDarkMode 
                ? 'bg-white/5 border-white/10' 
                : 'bg-black/5 border-black/10'
            }`}>
              <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className={`transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>linkedin.com/in/alexchen</p>
            </div>
          </div>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 text-lg">
            Start a Conversation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 sm:px-6 lg:px-8 border-t transition-all duration-300 ${
        isDarkMode 
          ? 'bg-black/40 border-white/10' 
          : 'bg-white/40 border-black/10'
      }`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={`transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            © 2024 Alex Chen. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;