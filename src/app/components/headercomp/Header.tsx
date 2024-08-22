'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/icons/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close state
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white p-4 border-b-2 border-gray-200 shadow-sm">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/">
          <img 
            src={Logo.src}
            alt="Remote Connect Logo" 
            className="h-8 lg:h-12 mx-auto lg:mx-0" 
          />
        </Link>

        {/* Hamburger Menu */}
        <div className=" md:hidden lg:hidden flex items-center">
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
          className="lg:hidden fixed top-0 right-0 w-full h-full bg-white text-black flex flex-col items-center pt-16 overflow-auto z-40"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="text-xl py-2" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-xl py-2" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-xl py-2" onClick={() => setIsOpen(false)}>Contact</Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
