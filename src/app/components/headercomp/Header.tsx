'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/icons/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling on the main page when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling on the main page when the menu is closed
      document.body.style.overflow = '';
    }

    // Cleanup on component unmount or when the drawer is closed
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Toggle menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white p-4 border-b-2 border-gray-200 shadow-sm">
       <div className="container flex items-center justify-between relative">
          {/* Left side: Logo and Navigation Links */}
          <div className="flex lg:ml-14 items-center space-x-8">
            {/* Logo */}
            <Link href="/">
              <img 
                src={Logo.src}
                alt="Remote Connect Logo" 
                className="h-8 md:h-10 lg:h-12" 
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex  transform mt-4 lg:flex text-lg space-x-8">
              <Link href="/" className="text-center hover:text-[#E61464]">
                <p>Home</p>
              </Link>
              <Link href="/tos" className="text-center hover:text-[#E61464]">
                <p>Tos</p>
              </Link>
            </div>
          </div>

          {/* Right side: Sign up and Log in Buttons */}
          <div className="hidden md:flex lg:flex items-center space-x-4">
            <Link href="/signup" className="md:px-4 md:py-2 xl:px-6 xl:py-2 bg-[#E61464] text-white rounded-md hover:bg-[#f04a8a]">
              Sign up
            </Link>
            <Link href="/login" >
            Log in
          </Link>
          </div>

        {/* Hamburger Menu */}
        <div className="md:hidden lg:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="relative w-6 h-4 flex flex-col justify-between items-center"
          >
            <motion.div
              className="w-6 h-0.5 bg-black"
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }} // Adjust y values as needed
              transition={{ duration: 0.3 }}
              style={{ zIndex: 50 }} // Ensure the line appears on top
            />
            <motion.div
              className="w-6 h-0.5 bg-black"
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ zIndex: 50 }} // Ensure the line appears on top
            />
            <motion.div
              className="w-6 h-0.5 bg-black"
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -10 : 0 }} // Adjust y values as needed
              transition={{ duration: 0.3 }}
              style={{ zIndex: 50 }} // Ensure the line appears on top
            />
          </button>
        </div>

        {/* Menu Drawer for Mobile */}
        <motion.div
          className="lg:hidden fixed top-0 right-0 w-full h-full bg-white text-black flex flex-col pt-16 overflow-auto z-40"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start pl-6 w-full space-y-8">
            <Link href="/" className="text-xl py-2" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" className="text-xl py-2" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/contact" className="text-xl py-2" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
          
          <div className="flex-grow"></div>
          
          <div className="flex justify-center w-full">
            <Link href="/signup" onClick={() => setIsOpen(false)} className="py-2 px-20 bg-[#E61464] text-white rounded-md mb-4">
              Sign up
            </Link>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
