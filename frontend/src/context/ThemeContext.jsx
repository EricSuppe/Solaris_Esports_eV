import React, { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useStorage';

export const ThemeContext = createContext([])

/**
 * Switches themes between darkmode / lightmode.
 * @param {*} children array of elements or single elements
 * @returns true for darkmode or false for whitemode and the toggleTheme function for switching the theme.
 */
export const ThemeProvider = ({ children }) => {
    const  [darkMode, setDarkMode] = useState(useLocalStorage("darkMode"));
    
    useLocalStorage("darkMode", darkMode)
    
    const toggleTheme = () => {
        setDarkMode(current => !current)
        document.querySelector(".CRA__config--root").classList.remove(`theme--${!darkMode ? "Dark" : "Light"}`)
        document.querySelector(".CRA__config--root").classList.add(`theme--${darkMode ? "Dark" : "Light"}`)
    }
    
    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};
