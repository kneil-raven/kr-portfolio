import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { scrollToSection } from "../../utils/helpers";

const MobileMenu = () => {
  const { themeClasses, isDarkMode } = useTheme();

  const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    onItemClick();
  };

  if (!isOpen) return null;

  return (
    <div
      className={`md:hidden backdrop-blur-lg border-t transition-all duration-300 ${
        isDarkMode
          ? "bg-black/30 border-white/10"
          : "bg-white/30 border-black/10"
      }`}
    >
      <div className="px-4 py-2 space-y-1">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={`flex items-center space-x-3 w-full px-3 py-3 rounded-lg text-left transition-colors ${themeClasses.hover.bg}`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};


export default MobileMenu;