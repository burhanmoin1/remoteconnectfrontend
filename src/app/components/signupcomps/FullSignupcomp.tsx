'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import clienticon from '@/app/assets/icons/clienticon.png';
import freelancericon from '@/app/assets/icons/freelancericon.png';
import SignUpRoleSelection from '../modules/SignUpRoleSelection';
import SignupFormM from '../modules/SignupFormM';

const FullSignupcomp = () => {
  const [selectedRole, setSelectedRole] = useState<'client' | 'freelancer' | ''>('');
  const [clientRole, setClientRole] = useState<boolean>(false);
  const [freelancerRole, setFreelancerRole] = useState<boolean>(false);

  const handleRoleSelect = (role: 'client' | 'freelancer') => {
    setSelectedRole(role);
  };

  const handleFormToggle = () => {
    setSelectedRole(selectedRole === 'client' ? 'freelancer' : 'client');
  };

  const handleBackToRoleSelection = () => {
    setSelectedRole('');
    setClientRole(false);
    setFreelancerRole(false);
  };

  const handleRoleSubmit = () => {
    if (selectedRole === 'client') {
      setClientRole(true);
    } else if (selectedRole === 'freelancer') {
      setFreelancerRole(true);
    }
  };

  const formProps = {
    client: {
      heading: 'Applying as a client',
      submitUrl: 'http://localhost:8000/api/clientsignup/',
    },
    freelancer: {
      heading: 'Applying as a freelancer',
      submitUrl: 'http://localhost:8000/api/freelancersignup/',
    },
  };

  const getRoleDisplayName = (role: 'client' | 'freelancer') => {
    return role.charAt(0).toUpperCase() + role.slice(1);
  };

  return (
    <div className="flex flex-col items-center mt-24 bg-white">
      {(clientRole || freelancerRole) && selectedRole ? (
        <div className="w-full max-w-md lg:space-y-12 space-y-8">
          <SignupFormM
            heading={formProps[selectedRole]?.heading}
            submitUrl={formProps[selectedRole]?.submitUrl}
          />
          <div className='flex flex-row lg:w-[120vmin] space-x-12 lg:space-x-28'>
          <button
            onClick={handleBackToRoleSelection}
            className="lg:ml-[-24px] ml-1 text-[.78rem] lg:text-sm text-red-600 "
          >
           &#x2190; Back to role selection
          </button>
          <div className='flex flex-row space-x-1 lg:space-x-3'>
          <h3 className="text-[.78rem] lg:text-sm"
          >{selectedRole === 'client' ? 'Need work?' : 'Require talent?'}</h3>
            <button
              onClick={handleFormToggle}
              className="text-[.76rem] lg:text-sm text-[#E61464]"
            >
            {selectedRole === 'client' ? 'Apply as a freelancer' : 'Apply as a client'}
            </button>
            </div>
         
          </div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl lg:text-2xl text-center font-semibold text-black mb-8">
            Please choose the option that best represents you:
          </h1>
          <div className="flex flex-col md:flex-row md:space-y-0 md:space-x-8 lg:flex-row space-y-6 lg:space-y-0 lg:space-x-8 mb-6">
            <SignUpRoleSelection
              role="client"
              iconSrc={clienticon.src}
              selectedRole={selectedRole}
              onRoleSelect={handleRoleSelect}
              description="Looking to hire the perfect talent for your current team or your next project."
              boldText="Client"
            />
            <SignUpRoleSelection
              role="freelancer"
              iconSrc={freelancericon.src}
              selectedRole={selectedRole}
              onRoleSelect={handleRoleSelect}
              description="Looking for your next exciting project or to connect with other developers or designers."
              boldText="Freelancer"
            />
          </div>
          <motion.button
            className={`p-2 w-52 text-md rounded-lg ${
              !selectedRole
                ? 'bg-gray-400 text-black-800 opacity-50 cursor-not-allowed'
                : 'bg-[#051A49] text-white hover:bg-[#0d3281]'
            }`}
            whileTap={
              !selectedRole
                ? {}
                : { scale: 0.95, backgroundColor: '#051A49' }
            }
            transition={{
              type: 'tween',
              delay: 0.01,
              duration: 0.15,
            }}
            disabled={!selectedRole}
            onClick={handleRoleSubmit} // Call handleRoleSubmit to set the correct role
          >
            {selectedRole
              ? `Join as a ${getRoleDisplayName(selectedRole)}`
              : 'Create Account'}
          </motion.button>
          <p className="mt-4">
            Already have an account?{' '}
            <Link href="/login" className="text-[#E61464]">
              Log in
            </Link>
          </p>
        </>
      )}
    </div>
  );
};

export default FullSignupcomp;
