'use client';
import { useParams, useRouter} from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ActivationChecker = ({ children }: { children: React.ReactNode }) => {
    const { activation_token } = useParams();
    const [loading, setLoading] = useState<boolean>(true);
    const [isValid, setIsValid] = useState<boolean>(false);
    const Router = useRouter();

    useEffect(() => {
        if (!activation_token) {
            Router.push('/signup');
            return;
        }

        const checkActivationTokenValidity = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/check-activation-token-validity/${activation_token}/`);
                if (response.data.valid) {
                    setIsValid(true);
                } else {
                    Router.push('/login?account_activated=true');
                }
            } catch (error) {
                console.error('Error during token validation:', error);
                Router.push('/login?account_activated=true');
            } finally {
                setLoading(false);
            }
        };

        // Check the validity of the activation token
        checkActivationTokenValidity();
    }, [activation_token]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-xl">Validating token...</p>
            </div>
        );
    }

    return isValid ? <>{children}</> : null;
};

export default ActivationChecker;
