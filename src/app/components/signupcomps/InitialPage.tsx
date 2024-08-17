'use client';
import { useState } from 'react';

const AddUser = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-2xl lg:text-3xl font-semibold text-black mb-8">Join as a freelancer or client</h1>
      
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
        <div 
          onClick={() => handleRoleSelect('client')} 
          className={`cursor-pointer w-80 p-8 border-2 rounded-md text-center ${selectedRole === 'client' ? 'border-[#E60262] text-[#E60262] bg-[#F9F9F9]' : 'border-black text-black'}`}
        >
          Join as a Client
        </div>
        <div 
          onClick={() => handleRoleSelect('freelancer')} 
          className={`cursor-pointer w-80 p-8 border-2 rounded-md text-center ${selectedRole === 'freelancer' ? 'border-[#E60262] text-[#E60262] bg-[#F9F9F9]' : 'border-black text-black'}`}
        >
          Join as a Freelancer
        </div>
      </div>

      <button
        className={`p-3 w-60 rounded-lg bg-[#051A49] text-white ${!selectedRole ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#072462] bg-[#051A49]'}`}
        disabled={!selectedRole}
      >
        {selectedRole ? `Join as a ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}` : 'Create Account'}
      </button>
    </div>
  );
};

export default AddUser;
