'use client';

import { useState } from "react";
import Header from "./header";

export default function HandleDarkMode( {children} ) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const handleSetDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }
    
    return (
        <div className={(isDarkMode ? 'dark' : '') + " w-full overflow-x-hidden"}>
            <Header handleSetDarkMode={handleSetDarkMode} isDarkMode={isDarkMode} />
            { children } 
        </div>
     )
}