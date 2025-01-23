import React from 'react';
import Logo from './assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Column 1 */}
        <div className="flex flex-col items-center">
          <img src={Logo} alt="Logo" className="w-12 h-12 rounded-full mb-2" />
          <span className="text-sm">My App</span>
        </div>
        {/* Column 2 */}
        <ul className="space-y-2 text-center">
          <li className="hover:text-white cursor-pointer">Home</li>
          <li className="hover:text-white cursor-pointer">About</li>
          <li className="hover:text-white cursor-pointer">Contact</li>
        </ul>
        {/* Column 3 */}
        <div className="text-center">
          <p className="text-sm">Contact Info</p>
          <p>Name: Tonita Gjeluci</p>
          <p>Address: Pfeilgasse 1A</p>
          <p>Phone: 067764344760</p>
          <p>Email: gjelucitonita@gmail.com</p>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-xs">© 2025 My App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
