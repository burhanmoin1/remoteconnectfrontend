'use client';
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { SignupForm } from '@/app/types/common'; 
import { Countrylist } from '@/app/assets/lists/common';
import { motion} from 'framer-motion';

interface SignupFormProps {
    heading: string;
    submitUrl: string;
}

const SignupFormM: React.FC<SignupFormProps> = ({ heading, submitUrl }) => {
    const [formData, setFormData] = useState<SignupForm>({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        country: '',
        agreed_to_terms: false,
    });

    const [passwordErrors, setPasswordErrors] = useState<string[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [passwordValidationStatus, setPasswordValidationStatus] = useState('');
    

    const handleFocus = (input: any) => {
        setFocusStates(prevState => ({ ...prevState, [input]: true }));
    };

    const handleBlur = (input: string) => {
        setFocusStates(prevState => ({ ...prevState, [input]: false }));
        if (input === 'password') {
            setPasswordValidationStatus(passwordErrors.length === 0 ? 'valid' : 'invalid');
        }
    };

    const [emailStatus, setEmailStatus] = useState({ exists: false, valid: false });

    const handleEmailBlur = async (field: string) => {
        setFocusStates({ ...focusStates, [field]: false });
        if (formData.email) {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/email_validator/', {
                    params: { email: formData.email }
                });

                if (response.status === 204) {
                    setEmailStatus({ exists: true, valid: false });
                } else if (response.status === 200) {
                    setEmailStatus({ exists: false, valid: true });
                }
            } catch (error) {
                console.error('Error checking email:', error);
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;
        const newFormData = { ...formData, [name]: type === 'checkbox' ? checked : value };

        if (name === 'password') {
            const errors = validatePassword(value);
            setPasswordErrors(errors);
            setPasswordValidationStatus(errors.length === 0 ? 'valid' : 'invalid');
        }

        setFormData(newFormData);
    };

    const validatePassword = (password: string): string[] => {
        const errors: string[] = [];
        if (password.length === 0) {
            errors.push('Password is required.');
        } else {
            if (password.length < 8) {
                errors.push('Password must be at least 8 characters long.');
            }
            if (!/[A-Za-z]/.test(password)) {
                errors.push('Password must contain at least one letter.');
            }
            if (!/[a-z]/.test(password)) {
                errors.push('Password must contain at least one lowercase letter.');
            }
            if (!/[A-Z]/.test(password)) {
                errors.push('Password must contain at least one uppercase letter.');
            }
            if (!/[0-9]/.test(password)) {
                errors.push('Password must contain at least one number.');
            }
            if (!/[!@#$%^&*()_+.]/.test(password)) {
                errors.push('Password must contain at least one special character.');
            }
        }

        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (passwordErrors.length === 0) {
            setError(null);
            setSuccess(false);

            try {
                console.log('Form Data:', formData);
                const response = await axios.post(submitUrl, formData);

                if (response.status === 201) {
                    setSuccess(true);
                }
            } catch (err) {
                console.error('Signup error:', err);
                setError('An error occurred. Please try again.');
            }

            
        } else {
            console.log('Password validation failed.');
        }
    };

    const handleSelectChange = (selectedOption: any) => {
        setFormData({
            ...formData,
            country: selectedOption ? selectedOption.value : '',
        });
    };

    const countryOptions = Countrylist.map((country) => ({
        value: country.Country,
        label: country.Country,
    }));

    const [focusStates, setFocusStates] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
    });

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center max-w-md mx-auto ">
            <h2 className="text-2xl font-bold mb-6">{heading}</h2>
            <form onSubmit={handleSubmit} className="w-[90vmin] md:w-[60vmin] lg:w-[60vmin] flex flex-col space-y-4">
                
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label htmlFor="first_name" className="text-sm text-black">
                            First Name
                        </label>
                        <motion.input
                            type="text"
                            id="first_name"
                            name="first_name"
                            initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                            animate={{
                            scale: focusStates.firstName ? 1.02 : 1,
                            borderColor: focusStates.firstName ? '#0d3281' : '#D1D5DB',
                            boxShadow: focusStates.firstName ? '0 0 4px rgba(79, 70, 229, 0.5)' : 'none',
                            }}
                            transition={{ duration: 0.3 }}
                            onFocus={() => handleFocus('firstName')}
                            onBlur={() => handleBlur('firstName')}
                            value={formData.first_name}
                            onChange={handleChange}
                            className="mt-1 p-2 border w-full outline-none"
                            required
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="last_name" className="text-sm font-medium text-black">
                            Last Name
                        </label>
                        <motion.input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                            animate={{
                            scale: focusStates.lastName ? 1.02 : 1,
                            borderColor: focusStates.lastName ? '#0d3281' : '#D1D5DB',
                            boxShadow: focusStates.lastName ? '0 0 4px rgba(79, 70, 229, 0.5)' : 'none',
                            }}
                            transition={{ duration: 0.3 }}
                            onFocus={() => handleFocus('lastName')}
                            onBlur={() => handleBlur('lastName')}
                            className="mt-1 p-2 border border-gray-300 w-full outline-none"
                            required
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email" className="text-sm font-medium text-black">
                        Email
                    </label>
                    <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                        animate={{
                            scale: focusStates.email ? 1.02 : 1,
                            borderColor: emailStatus.exists ? 'red' : (emailStatus.valid ? 'green' : '#D1D5DB'),
                            boxShadow: focusStates.email ? '0 0 4px rgba(79, 70, 229, 0.5)' : 'none',
                        }}
                        transition={{ duration: 0.3 }}
                        onFocus={() => handleFocus('email')}
                        onBlur={() => handleEmailBlur('email')}
                        className={`mt-1 p-2 border w-full outline-none ${emailStatus.exists ? 'border-red-500' : (emailStatus.valid ? 'border-green-500' : 'border-gray-300')}`}
                        required
                    />
                    {emailStatus.exists && (
                        <p className="text-red-500 text-sm mt-1">
                            Email already registered, <a href="/login" className="text-blue-500 underline">Log in?</a>
                        </p>
                    )}
                </div>


                <div className="flex flex-col">
                <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
                <motion.input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    initial={{ scale: 1, borderColor: '#D1D5DB', boxShadow: 'none' }}
                    animate={{
                        scale: focusStates.password ? 1.02 : 1,
                        borderColor: focusStates.password
                            ? passwordValidationStatus === 'valid' 
                                ? '#22C55E' 
                                : '#EF4444'
                            : '#D1D5DB',
                        boxShadow: focusStates.password ? '0 0 4px rgba(79, 70, 229, 0.5)' : 'none',
                    }}
                    transition={{ duration: 0.3 }}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => handleBlur('password')}
                    className="mt-1 p-2 border border-gray-300 w-full outline-none"
                    required
                />
                <div className="mt-1 text-sm">
                    {passwordErrors.map((error, index) => (
                        <div key={index} className="text-red-500">
                            {error}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col">
                <label htmlFor="country" className="text-sm font-medium text-black">
                    Country
                </label>
                <Select
                    id="country"
                    name="country"
                    value={countryOptions.find(option => option.value === formData.country)}
                    onChange={handleSelectChange}
                    options={countryOptions}
                    placeholder="Select your country"
                    className="mt-1 custom-select outline-none"
                    onMenuOpen={() => setIsOpen(true)}
                    onMenuClose={() => setIsOpen(false)}
                    styles={{
                        control: (provided) => ({
                            ...provided,
                            height: '3rem', // Adjust height as needed
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            lineHeight: '3rem', // Align text vertically
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            lineHeight: '3rem', // Align placeholder text vertically
                        }),
                        indicatorSeparator: () => ({}), // Hide the separator
                        indicatorsContainer: (provided) => ({
                            ...provided,
                            position: 'relative',
                        }),
                        dropdownIndicator: (provided) => ({
                            ...provided,
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                        }),
                    }}
                />
            </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="agreed_to_terms"
                        name="agreed_to_terms"
                        checked={formData.agreed_to_terms}
                        onChange={handleChange}
                        className="mr-2 w-6 h-6"
                        required
                    />
                    <label htmlFor="agreed_to_terms" className="lg:mt-0 text-sm text-black lg:max-w-full"><span className='text-md'>
                        Yes, I understand and agree to the <a href='/tos' className="text-blue-600 hover:underline">Remoteconnect Terms of Service</a> and <a href='/legal#privacy' className="text-blue-600 hover:underline">Privacy Policy</a>.</span>
                    </label>
                </div>
                <div className="flex justify-center">
                    <motion.button
                        type="submit"
                        className={`p-2 w-52 text-md rounded-lg bg-[#051A49] text-white hover:bg-[#0d3281]`}
                        whileTap={{ scale: 0.95, backgroundColor: '#051A49' }}
                        transition={{
                            type: 'tween',
                            delay: 0.01,
                            duration: 0.15,
                        }}
                    >
                        Create Account
                    </motion.button>
                </div>
                {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                {success && <div className="text-green-500 text-sm mt-2">Signup successful!</div>}
            </form>
        </div>
    );
};

export default SignupFormM;
