import React from 'react';


const Footer = () => {
  return (
    <footer className="border-t text-white py-8 px-4 mt-28 mb-32 lg:mb-2">
      <div className="container mx-auto text-center">
        {/* Logo and Company Name */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold">Dev<span className='text-blue-300'>Easy</span> </h1>
          <p className="text-gray-400">simplify your dev journey with us</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col sm:flex-row  justify-center space-x-0 sm:space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-blue-300  transition duration-300 ease-in-out mb-2 sm:mb-0">Home</a>
          <a href="#services" className="text-gray-400  transition hover:text-blue-300 duration-300 ease-in-out mb-2 sm:mb-0">Pricing</a>
          <a href="#about" className="text-gray-400  transition duration-300 ease-in-out hover:text-blue-300 mb-2 sm:mb-0">About</a>
          <a href="#contact" className="text-gray-400  transition duration-300 ease-in-out mb-2 sm:mb-0 hover:text-blue-300">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          <p>&copy; 2025 DevEasy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
