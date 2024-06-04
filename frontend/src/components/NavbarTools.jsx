import React, { useState } from 'react';
import sihLogo from '../assets/sih-logo.png';

function NavbarTools() {
  const [fontSize, setFontSize] = useState(16);

  const increaseFontSize = () => {
    setFontSize((prevSize) => Math.min(prevSize + 2, 24));
  };

  const defaultFontSize = () => {
    setFontSize(16);
  };

  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(prevSize - 2, 12));
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
        <a href="/" className="flex items-center rtl:space-x-reverse">
          <img src={sihLogo} className="h-12" alt="SIH Logo" />
          <span className="self-center text-l font-semibold whitespace-nowrap dark:text-white">
            Smart India Hackathon
          </span>
        </a>

        <div className="font-medium flex flex-row gap-2 md:p-0 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700 mx-3">
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={decreaseFontSize}
          >
            A-
          </button>

          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1.5 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            onClick={defaultFontSize}
          >
            A
          </button>

          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 "
            onClick={increaseFontSize}
          >
            A+
          </button>
        </div>

        {/* FontSizeControl */}
        <style>{`body { font-size: ${fontSize}px; }`}</style>
      </div>
    </nav>
  );
}

export default NavbarTools;
