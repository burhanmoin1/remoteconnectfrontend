'use client';
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import Logo from '@/app/assets/icons/logo.png';
import downarrow from '@/app/assets/icons/downarrow.png';
import uparrow from '@/app/assets/icons/uparrow.png';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Cookies from 'js-cookie';


const TestTwoHeader = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isLoggedIn = Cookies.get('user_email') && Cookies.get('session_token') && Cookies.get('name');
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null); // Store the timeout reference

  const handleMouseEnter = (item: string) => {
    // Clear any pending timeout when mouse enters
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay (e.g., 300ms)
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // Delay in ms
  };

  const handleArrowToggle = (section: string) => {
    // If the section clicked is already open, close it. Otherwise, open the clicked section and close the others.
    setActiveSection(prev => (prev === section ? null : section));
  };

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

  const toggleMenu = () => setIsOpen(!isOpen);

  const signOut = () => {
    // Remove cookies
    Cookies.remove('user_email');
    Cookies.remove('session_token');
    Cookies.remove('name');
    // Refresh the page
    window.location.reload();
  };

  return (
    <header className="fixed w-full bg-white border-gray-200 border-b-2 flex items-center top-0 z-50" >
      <div className="hidden xl:flex lg:flex md:hidden sm:hidden ml-8 relative z-10">
         {/* Nav logo */}
        <div className='2xl:ml-8'>
          <Link href="/">
            <Image
              src={Logo.src}
              alt="Remote Connect Logo"
              className="2xl:h-12 xl:h-12 lg:h-12 md:h-12 mt-3 ml-2"
              width={260}
              height={250}
            />
          </Link>
        </div>
        {/* Nav items */}
        <div className='hidden ml-8 2xl:flex xl:flex lg:flex md:flex sm:flex md:text-md '>
        {['Home', 'tos'].map((item, index) => (
          <div
            key={index}
            className="relative group"
            onMouseEnter={() => handleMouseEnter(item)}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={`/${item.toLowerCase()}`}>
            <p className={`p-8 text-black cursor-pointer transition-opacity duration-300 ${hoveredItem === item ? 'opacity-50' : 'opacity-100'}`}>
                  {item}
                </p>
            </Link>
             {/* Underline */}
             <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-black transition-transform duration-300 ${hoveredItem === item ? 'scale-100' : 'scale-0'}`}
              ></div>
          </div>
        ))}
      </div>
      </div>
      {/* Dropdown container */}
      <div className="absolute top-full mt-[0.04rem] left-0 w-full z-100">
        {/* Services dropdown */}
        {hoveredItem === 'Services' && (
          <div 
            className="bg-white shadow-lg rounded-lg h-40 overflow-hidden z-100"
            onMouseEnter={() => handleMouseEnter('Services')}
            onMouseLeave={handleMouseLeave}
          >
            
            <div className="flex p-4">
              <Link href="/services/1">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 1</p>
              </Link>
              <Link href="/services/2">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 2</p>
              </Link>
              <Link href="/services/3">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Service 3</p>
              </Link>
            </div>
          </div>
        )}
        {/* Products dropdown */}
        {hoveredItem === 'Products' && (
          <div
            className="bg-white shadow-lg rounded-lg overflow-hidden z-20"
            onMouseEnter={() => handleMouseEnter('Products')}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex justify-around p-4">
              <Link href="/products/1">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Product 1</p>
              </Link>
              <Link href="/products/2">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Product 2</p>
              </Link>
              <Link href="/products/3">
                <p className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Product 3</p>
              </Link>
            </div>
          </div>
          
        )}
      </div>
       {/* Right side: Sign up and Log in Buttons */}
       <div className="hidden 2xl:flex xl:flex lg:flex items-center space-x-4 ml-auto mr-16">
          <Link href="/signup" className="md:px-4 md:py-2 lg:px-6 lg:py-1.5 bg-[#E61464] text-white rounded-md hover:bg-[#f04a8a]">
            Sign up
          </Link>
          <Link href="/login" className='text-[#1F2B5F] hover:text-[#E61464] border-b-2 border-transparent hover:border-[#E61464]'>
            Log in
          </Link>
        </div>
        
        {/* Mobile Header */}
        <div className="flex justify-between w-full p-5 2xl:hidden xl:hidden lg:hidden md:flex sm:flex">
          {/* Left side: Logo and Navigation Links */}
          <div className="flex-shrink-0 items-center">
            {/* Logo */}
            <Link href="/">
              <Image 
                src={Logo.src}
                alt="Remote Connect Logo" 
                className="h-8" 
                width={170}
                height={140}
              />
            </Link>
            </div>

             {/* Hamburger Menu */}
          <div className="flex items-center">
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
       
          <motion.div
          className="fixed inset-0 bg-black z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }} // Prevents interaction with the background when closed
        />
          {/* Menu Drawer for Mobile */}
          <div className={`fixed top-0 left-0 w-full h-full z-30 ${isOpen ? 'block' : 'hidden'}`} onClick={() => setIsOpen(false)}>
            {/* This div will close the sidebar when clicked */}
            <motion.div
              className="fixed top-0 right-0 w-[80%] h-full md:w-[40%] shadow-md bg-white text-black flex flex-col pt-16 overflow-auto z-40"
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Prevents the click from propagating to the outer div
            >
            {/* Items */}
            <div className="flex flex-col items-start pl-6 w-full space-y-8 ">
              <Link href="/" className="text-xl py-2" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/tos" className="text-xl py-2" onClick={() => setIsOpen(false)} >tos</Link>     
              
                {/* Services Accordion */}
              
              </div>

            
            <div className="flex-grow"></div>
            
            <div className="flex justify-center w-full">
              <Link href="/signup" onClick={() => setIsOpen(false)} className="py-2 px-20 bg-[#E61464] text-white rounded-md mb-4">
                Sign up
              </Link>
              
            </div>
            <div className="flex justify-center w-full">
            <Link href='/login' className='mb-4'>Login</Link>
            </div>
          </motion.div>
          </div>
          </div>
        </div>
    </header>
  );
};

export default TestTwoHeader;
