import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { navItems, personalInfo } from "../../data/navigation";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle.jsx";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { themeClasses } = useTheme();
  const activeSection = useScrollSpy(navItems.map((item) => item.id));

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-lg border-b transition-all duration-300 ${themeClasses.card}  ${themeClasses.border}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Navigation
              items={navItems}
              activeSection={activeSection}
              onItemClick={closeMenu}
            />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors ${themeClasses.hover.bg}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={isMenuOpen}
        items={navItems}
        onItemClick={closeMenu}
      />
    </nav>
  );
};

export default Header;
