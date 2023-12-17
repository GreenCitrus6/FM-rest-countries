'use client';

import { useState, useEffect } from "react";
import Header from "./header";

export default function HandleDarkMode( {children} ) {
    let isDarkModeInstant = false;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleSetDarkMode = () => {
        isDarkModeInstant = !isDarkModeInstant
        setIsDarkMode(isDarkModeInstant);
        localStorage.setItem('darkModePrefs', JSON.stringify(isDarkModeInstant));
    }
    
    useEffect(() => {
        const retrievedDarkModePrefs = JSON.parse(localStorage.getItem('darkModePrefs'));
        setIsDarkMode(retrievedDarkModePrefs);
    }, [])

    //persist selection of dark or light mode across page refresh. store isDarkMode in local storage
    

    

    return (
        <div className={(isDarkMode ? 'dark' : '') + " w-full overflow-x-hidden"}>
            <Header handleSetDarkMode={handleSetDarkMode} isDarkMode={isDarkMode} />
            { children } 
        </div>
     )
}