'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Logo from '@/app/assets/icons/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openTimer, setOpenTimer] = useState<NodeJS.Timeout | null>(null);
const [closeTimer, setCloseTimer] = useState<NodeJS.Timeout | null>(null);  
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    // Clear any close timer if it exists
    if (closeTimer) {
      clearTimeout(closeTimer);
    }
    
    // Set a timer to open the dropdown after a delay
    setOpenTimer(
      setTimeout(() => {
        setIsDropdownOpen(true);
      }, 10) // Delay before opening (in milliseconds)
    );
  };
  
  const handleMouseLeave = () => {
    // Clear any open timer if it exists
    if (openTimer) {
      clearTimeout(openTimer);
    }
  
    // Set a timer to close the dropdown after a delay
    setCloseTimer(
      setTimeout(() => {
        setIsDropdownOpen(false);
      }, 100) // Delay before closing (in milliseconds)
    );
  };

  return (
    <header className="fixed top-0 left-0 m-[-1px] w-full bg-white p-4 border-b-2 border-gray-200 shadow-sm z-50">
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

            <div className="hidden md:flex mt-4 lg:flex text-lg space-x-8">
            <Link href="/" className="text-center text-[#1F2B5F] hover:opacity-100">
              <p>Home</p>
            </Link>
            <Link href="/tos" className="text-center text-[#1F2B5F] hover:opacity-100">
              <p>Tos</p>
            </Link>
            <div
        className="relative items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
         <a
          className="flex items-center cursor-pointer text-center text-[#1F2B5F]"
        >
          <p>Services</p>
          <span className="ml-2 flex items-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FontAwesomeIcon
                icon={faChevronDown}
                className="w-3 h-3 text-[#1F2B5F] mb-[2px]"
              />
            </motion.div>
          </span>
        </a>
        {isDropdownOpen && (
          <motion.div
            ref={dropdownRef}
            className="absolute left-[-20px] w-[20vmin] p-2 bg-white border border-gray-200 shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <Link href="/service1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 1</Link>
            <Link href="/service2" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 2</Link>
            <Link href="/service3" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Service 3</Link>
          </motion.div>
        )}
      </div>
          </div>
          </div>

          {/* Right side: Sign up and Log in Buttons */}
          <div className="hidden md:flex lg:flex items-center space-x-4">
            <Link href="/signup" className="md:px-4 md:py-2 xl:px-6 xl:py-2 bg-[#E61464] text-white rounded-md hover:bg-[#f04a8a]">
              Sign up
            </Link>
            <Link href="/login" className='text-[#1F2B5F] hover:text-[#E61464] border-b-2 border-transparent hover:border-[#E61464]'>
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
            <Link href="/tos" className="text-xl py-2" onClick={() => setIsOpen(false)}>tos</Link>
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
