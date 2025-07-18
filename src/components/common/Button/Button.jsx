import React from "react";
import { useTheme } from '../../contexts/ThemeContext';

const Button = ({
    children,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    ...props
}) => {
    const {themeClasses, isDarkMode } = useTheme();

    const baseClasses = 'font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled-cursor-not-allowed disabled:hover:scale-100';

    const variants = {
        primary: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105',
        outline: `border-2 ${isDarkMode
            ? 'border-white/30 hover:border-white/50 hover:bg-white/10'
            : 'border-black/30 hover:border-black/50 hover:bg-white/10'
        } ${themeClasses.text.primary}`,
        ghost: `${themeClasses.hover.bg} ${themeClasses.text.primary}`,
    };

    const sizes = {
        small: 'px-4 py-2 text-sm rounded-md',
        medium: 'px-6 py-3 text-base rounded-lg',
        large: 'px-8 py-3 text-lg rounded-lg',
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={buttonClasses}
            {...props}
        >
            {children}
        </button>
    )
};

export default Button;