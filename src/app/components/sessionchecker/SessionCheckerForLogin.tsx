'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import LoginComp from '../logincomps/LoginComp';

const SessionCheckerForLogin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      // Retrieve email and session token from cookies
      const email = Cookies.get('user_email');
      const session_token = Cookies.get('session_token');

      if (!email || !session_token) {
        setLoading(false);
        return;
      }

      try {
        // Send a POST request to the session checker API
        const response = await axios.post('http://192.168.100.60:8000/api/user_session_checker/', { email, session_token });
        if (response.status === 200) {
          setIsAuthenticated(true);
          router.push('/'); // Redirect to home if session is authenticated
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Session check failed:', err);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div className="authenticated-content">
          Authenticated
        </div>
      ) : (
        <div className="unauthenticated-content">
          <LoginComp />
        </div>
      )}
    </div>
  );
};

export default SessionCheckerForLogin;
