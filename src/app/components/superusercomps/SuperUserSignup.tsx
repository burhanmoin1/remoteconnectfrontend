'use client';
import { useState } from 'react';
import axios from 'axios';

const SuperUserSignup = () => {
  // State for each form field
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string>('');

  // Password validation function
  const validatePassword = (password: string, confirmPassword: string): boolean => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      return false;
    }
    if (!/[!@#$%^&*()_+.]/.test(password)) {
      setPasswordError("Password must contain at least one special character.");
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate password
    if (!validatePassword(password, confirmPassword)) {
      return;
    }

    // Data to be sent in the request
    const data = { email, username, first_name: firstName, last_name: lastName, password };

    try {
      const response = await axios.post('http://192.168.100.60:8000/api/superusersignup/', data);
      setResponseMessage('SuperUser created successfully!');
    } catch (error) {
      setResponseMessage('Error creating SuperUser.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-4">SuperUser Signup</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        
            <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
         
         
            <label htmlFor="username" className="mb-1 text-sm font-medium text-gray-700">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
    
        
            <label htmlFor="firstName" className="mb-1 text-sm font-medium text-gray-700">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
        
        
            <label htmlFor="lastName" className="mb-1 text-sm font-medium text-gray-700">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
         
          
            <label htmlFor="password" className="mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
        
          
            <label htmlFor="confirmPassword" className="mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              required
            />
          
          {passwordError && (
            <p className="text-red-600 text-sm">{passwordError}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center text-sm text-gray-700">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default SuperUserSignup;
