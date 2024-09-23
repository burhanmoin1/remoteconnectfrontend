'use client';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CheckPasswordComp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordChecked, setIsPasswordChecked] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePasswordCheck = async () => {
        try {
            const response = await axios.post('http://192.168.100.60:8000/api/check-password/', { email, password });
            if (response.status === 200) {
                setIsPasswordChecked(true);
                setErrorMessage('');
            }
        } catch (error) {
            setIsPasswordChecked(false);
            setErrorMessage('Invalid email or password.');
        }
    };

    return (
        <div className="flex flex-col items-center max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">{isPasswordChecked ? 'Password Verified' : 'Check Password'}</h1>
            <div className="w-[90vmin] md:w-[60vmin] lg:w-[60vmin] flex flex-col space-y-4">
                <motion.input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border p-2 mb-4 w-full outline-none border-gray-300"
                />
                <motion.input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="border p-2 mb-4 w-full outline-none border-gray-300"
                />
                <motion.button
                    onClick={handlePasswordCheck}
                    className="bg-[#051A49] text-white p-2 rounded hover:bg-[#0d3281]"
                    whileTap={{ scale: 0.95, backgroundColor: '#051A49' }}
                    transition={{ type: 'tween', delay: 0.01, duration: 0.15 }}
                >
                    Check Password
                </motion.button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default CheckPasswordComp;
