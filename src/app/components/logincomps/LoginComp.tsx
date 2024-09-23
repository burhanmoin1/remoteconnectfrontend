'use client';
import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import Cookies from 'js-cookie';
import backarrow from '@/app/assets/icons/backarrow.png';
import { useRouter } from 'next/navigation';

const LoginComp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailChecked, setIsEmailChecked] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailCollection, setEmailCollection] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [showBackButton, setShowBackButton] = useState(false);
    const router = useRouter();

    const handleEmailSubmit = async () => {
        try {
            const response = await axios.post('http://192.168.100.60:8000/api/check-login-email/', { email });
            if (response.status === 200) {
                setIsEmailChecked(true);
                setIsEmailValid(true);
                setEmailCollection(response.data.collection);
                setErrorMessage('');
                setShowBackButton(true); // Show back button on password page
            }
        } catch (error) {
            setIsEmailChecked(false);
            setIsEmailValid(false);
            setEmailCollection(null);
            setErrorMessage('Email does not exist or an error occurred.');
            setShowBackButton(false); // Ensure back button is hidden if error occurs
        }
    };

    const handlePasswordSubmit = async () => {
        try {
            let loginEndpoint = '';
            if (emailCollection === 'Client') {
                loginEndpoint = 'http://192.168.100.60:8000/api/client-login/';
            } else if (emailCollection === 'Freelancer') {
                loginEndpoint = 'http://192.168.100.60:8000/api/freelancer-login/';
            }

            if (!loginEndpoint) {
                setErrorMessage('Invalid collection.');
                return;
            }

            const response = await axios.post(loginEndpoint, { email, password });
            
            if (response.status === 200) {
                const { name, user_email, session_token, user_id, connected_user } = response.data;

                // Set cookies
                Cookies.set('name', name);
                Cookies.set('user_email', user_email);
                Cookies.set('session_token', session_token);
                Cookies.set('user_id', user_id);
                Cookies.set('connected_user', connected_user);
                console.log(name, user_id, session_token, connected_user, user_email );

                console.log('Login successful'); 
                router.push('/');
            } else {
                setErrorMessage('Login error occurred.');
            }
        } catch (error) {
            setErrorMessage('Invalid password or login error.');
        }
    };

    const handleBackToEmail = () => {
        setIsEmailChecked(false); // Reset to email input phase
        setPassword(''); // Clear the password field
        setErrorMessage(''); // Clear any error messages
        setShowBackButton(false); // Hide back button when returning to email page
    };

    return (
        <div className="flex flex-col mt-24 items-center max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 mt-12">{isEmailChecked ? 'Enter Password' : 'Login to Remoteconnect'}</h1>
            <button
                onClick={handleBackToEmail}
                className={`${showBackButton ? 'flex' : 'hidden'} absolute items-center left-2 bg-transparent border-none cursor-pointer xl:left-80 xl:-top-4`}
            >
                <img
                    src={backarrow.src}
                    className="h-4 w-4"
                    alt="Back Arrow"
                />
                <span className="ml-2 text-sm">Previous</span>
            </button>
            <div className="w-[90vmin] md:w-[60vmin] xl:w-[40vmin] flex flex-col space-y-4">
                <motion.input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                    animate={{
                        scale: isEmailChecked ? 1 : 1.02, // Animate scale only if not checking the email
                        borderColor: isEmailValid ? 'green' : '#D1D5DB',
                        boxShadow: isEmailValid ? '0 0 4px rgba(79, 70, 229, 0.5)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    className={`border p-2 w-full outline-none ${isEmailValid ? 'border-green-500' : 'border-gray-300'} ${
                        isEmailChecked ? 'bg-gray-100' : ''
                    }`}
                    readOnly={isEmailChecked}
                />
                {isEmailChecked && (
                    <>
                        <motion.input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                            animate={{
                                scale: password ? 1.02 : 1,
                                borderColor: '#D1D5DB',
                                boxShadow: 'none',
                            }}
                            transition={{ duration: 0.3 }}
                            className="border p-2 mb-4 w-full outline-none border-gray-300"
                        />
                    </>
                )}
                {/* Submit Button */}
                <motion.button
                    onClick={isEmailChecked ? handlePasswordSubmit : handleEmailSubmit}
                    className="bg-[#051A49] text-white p-2 rounded hover:bg-[#0d3281]"
                    whileTap={{ scale: 0.95, backgroundColor: '#051A49' }}
                    transition={{ type: 'tween', delay: 0.01, duration: 0.15 }}
                >
                    {isEmailChecked ? 'Submit' : 'Continue'}
                </motion.button>

                {/* Information or Error Messages */}
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
            </div>
        </div>
    );
};

export default LoginComp;
