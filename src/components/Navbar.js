import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { FcCurrencyExchange } from 'react-icons/fc';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <FcCurrencyExchange className="h-10 text-4xl mr-2" />
          <span className="text-2xl font-bold text-blue-500">Currency App</span>
        </div>
        <div className="hidden md:flex items-center">
          <Link to="/" className="text-gray-700 hover:text-blue-500 flex items-center px-4">
            <CurrencyDollarIcon className="h-5 w-5 mr-1" />
            Currency Exchange
          </Link>
          <Link to="/exchange-rate" className="text-gray-700 hover:text-blue-500 flex items-center px-4">
            <ChartBarIcon className="h-5 w-5 mr-1" />
            Exchange Rates
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white`}>
        <Link to="/" className="block text-gray-700 hover:text-blue-500 flex items-center px-4 py-2">
          <CurrencyDollarIcon className="h-5 w-5 mr-1" />
          Currency Exchange
        </Link>
        <Link to="/exchange-rate" className="block text-gray-700 hover:text-blue-500 flex items-center px-4 py-2">
          <ChartBarIcon className="h-5 w-5 mr-1" />
          Exchange Rates
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
