import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { scrollToSection } from "../../utils/helpers";

const Navigation = ({ items, activeSection, onItemClick }) => {
  const { themeClasses, isDarkMode } = useTheme();

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onItemClick();
  };

  return (
    <>
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
            themeClasses.hover.bg
          } ${
            activeSection === item.id
              ? `${
                  isDarkMode
                    ? "bg-white/20 text-blue-400"
                    : "bg-black/20 text-blue-600"
                }`
              : `${themeClasses.text.secondary} ${themeClasses.hover.text}`
          }`}
        >
          <item.icon size={18} />
          <span>{item.label}</span>
        </button>
      ))}
    </>
  );
};

export default Navigation;
