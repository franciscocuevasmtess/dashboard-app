import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  /* return (
    <header className="bg-gray-800 text-white p-5 text-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
    </header>
  ); */

  return (
    <header className="bg-gray-800 dark:bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Dashboard Pro</h1>
      <button 
        onClick={toggleTheme}
        className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500 transition-colors"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-5 w-5 text-yellow-300" />
        ) : (
          <MoonIcon className="h-5 w-5 text-blue-200" />
        )}
      </button>
    </header>
  );

}

export default Header;