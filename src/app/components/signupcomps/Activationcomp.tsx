'use client'
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Activation() {
    const { activation_token } = useParams();
    const [message, setMessage] = useState<string>('Activating your account...');
    const [loading, setLoading] = useState<boolean>(true);
    const Router = useRouter();

    useEffect(() => {
        if (!activation_token) {
            setMessage('Invalid activation link.');
            setLoading(false);
            return;
        }

        const verifyActivation = async () => {
            try {
                const response = await axios.post(`http://192.168.100.60:8000/api/verify-activation/${activation_token}/`);
                if (response.data.success) {
                    setMessage('Your account has been activated successfully!');
                    Router.push('/login?account_activated=true');
                } else {
                    setMessage(response.data.message || 'Activation failed. Please contact support to gain access.');
                }
            } catch (error) {
                console.error('Error during activation:', error);
                setMessage('Something went wrong. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        verifyActivation();

    }, [activation_token]);

    return (
        <div className="flex items-center justify-center h-screen">
            {loading ? (
                <p className="text-xl">Processing...</p>
            ) : (
                <p className="text-xl">{message}</p>
            )}
        </div>
    );
}
