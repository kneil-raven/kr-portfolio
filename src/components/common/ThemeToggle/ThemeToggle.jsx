import React from "react";
import { Sun, Moon} from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme, themeClasses } = useTheme();

    return (
        <button
            onClick = {toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
                themeClasses.hover.bg
            } ${ 
                isDarkMode ? 'text-yellow-400' : 'text-purple-600'
             }`}
             aria-label="Toggle dark mode"
        >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

    );
};

export default ThemeToggle;
