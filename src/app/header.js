'use client';

import { useState } from "react";

export default function Header( {handleSetDarkMode} ) {

    return (
        <header className="flex justify-between items-center 
        fixed overflow-hidden
        h-24 w-full z-30
        p-4 
        bg-light-white
        shadow-md shadow-gray-100
        md:px-8
        xl:px-24
        dark:text-light-white">
            <h1 className="text-[1.2rem] font-bold
            sm:text-2xl">Where in the world?</h1>
            <div className="flex "
            onClick={() => handleSetDarkMode() }>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
                <span className="font-semibold ml-2 font-sm">Dark Mode</span>
            </div>
        </header>
    )
}