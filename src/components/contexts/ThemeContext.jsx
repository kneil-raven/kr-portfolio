import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export cosnt useTheme = () => {
    const context = useContext('ThemeContext');
    if (!context) {
        throw new Error ('useTheme must be used within ')
    }
}