'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clienticon from '@/app/assets/icons/clienticon.png';
import freelancericon from '@/app/assets/icons/freelancericon.png';

const InitialSignUpPage = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col items-center mt-24 bg-white">
     <h1 className="text-2xl lg:text-2xl text-center font-semibold text-black mb-8">
        Please choose the option that best represents you:
      </h1>
      
      <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 mb-6">
      <motion.div
          onClick={() => handleRoleSelect('client')}
          whileTap={{
            scale: 0.95,
            transition: { duration: 0.1, ease: 'easeOut' },
          }}
          className={`relative text-md lg:text-lg cursor-pointer w-80 p-8 border-2 rounded-md text-center ${
            selectedRole === 'client'
              ? 'border-[#E60262] text-[#E60262] bg-[#F9F9F9]'
              : 'border-[#E8E8E8] text-black hover:border-[#E60262] hover:text-[#E60262] hover:bg-[#F9F9F9]'
          }`}
        >
          <img
            src={clienticon.src}
            alt="Client Icon"
            className="absolute top-2 left-2 h-6 w-6"
          />
          <input
            type="checkbox"
            checked={selectedRole === 'client'}
            readOnly
            className="absolute top-2 right-2 h-5 w-5 border-2 border-[#E8E8E8] accent-[#E60262] cursor-pointer"
          />
          A client looking to hire the perfect talent for your current team or your next project
        </motion.div>
        
        <motion.div
            onClick={() => handleRoleSelect('freelancer')}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1, ease: 'easeOut' },
            }}
            className={`relative text-md lg:text-lg cursor-pointer w-80 p-8 border-2 rounded-md text-center ${
              selectedRole === 'freelancer'
                ? 'border-[#E60262] text-[#E60262] bg-[#F9F9F9]'
                : 'border-[#E8E8E8] text-black hover:border-[#E60262] hover:text-[#E60262] hover:bg-[#F9F9F9]'
            }`}
          >
             <img
            src={freelancericon.src}
            alt="Freelancer Icon"
            className="absolute top-2 left-2 h-6 w-6"
          />
          <input
            type="checkbox"
            checked={selectedRole === 'freelancer'}
            readOnly
            className="absolute top-2 right-2 h-5 w-5 border-[#E8E8E8] accent-[#E60262] cursor-pointer"
          />
          A freelancer looking for your next exciting project or to connect with other developers or designers
        </motion.div>
      </div>
      <motion.button
      className={`p-2 w-52 text-md rounded-lg ${!selectedRole ? 'bg-gray-400 text-black-800 opacity-50 cursor-not-allowed' : 'bg-[#051A49] text-white hover:bg-[#072462]'}`}
      whileTap={!selectedRole ? {} : { scale: 0.95, backgroundColor: '#051A49' , }}
      transition={{
        type: 'tween',
        delay: 0.01,
        duration: 0.15, 
      }}
      disabled={!selectedRole}
    >
      {selectedRole ? `Join as a ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : 'Create Account'}
    </motion.button>
    <p className='mt-4'>Already have an account? <Link href="/login" className='text-[#E60262]'>Log in</Link></p>
    </div>
  );
};

export default InitialSignUpPage;
