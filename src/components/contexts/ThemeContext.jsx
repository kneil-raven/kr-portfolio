import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext('ThemeContext');
    if (!context) {
        throw new Error ('useTheme must be used within ')
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const themeClasses = {
        background: isDarkMode 
            ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white'
            : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-gray-900',
        section: isDarkMode ? 'bg-black/20' : 'bg-white-20',
        card: isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10',
        text: {
            primary: isDarkMode ? 'text-white' : 'text-gray-900',
            secondary: isDarkMode ? 'text-gray-300' : 'text-gray-600',
            muted: isDarkMode ? 'tex-gray-400' : 'text-gray-500',
        },
        hover: {
            bg: isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10',
            text: isDarkMode ? 'hover:text-white' : 'hover:text-black',
        },
        border: isDarkMode ? 'border-white/10' : 'border-black/10',
    };

    const value = {
        isDarkMode,
        isVisible,
        toggleTheme,
        themeClasses
    };

    return (
        <ThemeContext.Provider value={value}>
            <div className={themeClasses.background}>
                {children}
            </div>

        </ThemeContext.Provider>
    );

};