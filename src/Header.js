import React from 'react';
import Logo from './assets/logo.jpeg';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="My Logo" className="w-12 h-12 object-cover rounded-full" />
          <span className="text-xl font-semibold text-gray-800">My App</span>
        </div>
        <nav>
          <ul className="flex space-x-6 text-gray-700 font-medium">
            <li className="hover:text-blue-500 cursor-pointer">Home</li>
            <li className="hover:text-blue-500 cursor-pointer">About</li>
            <li className="hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
