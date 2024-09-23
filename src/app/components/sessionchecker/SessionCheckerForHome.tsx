'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import UserInfo from '../ipcomp/UserInfo';
import TestTwoHeader from '../headercomp/Testtwoheader';
import TestHeader from '../headercomp/TestHeader';
import WebSocketComponent from '../websocket/WebSocketComponent';
import FreelancerList from '../websocket/FreelancerList';

const SessionCheckerForHome: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');
  const [connectedUser, setConnectedUser] = useState<string | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    const checkSession = async () => {
      // Retrieve email, session token, and connected user type from cookies
      const email = Cookies.get('user_email');
      const session_token = Cookies.get('session_token');
      const name = Cookies.get('name');
      const connecteduser = Cookies.get('connected_user');

      if (!email || !session_token) {
        setLoading(false);
        return;
      }

      try {
        // Send a POST request to the session checker API
        const response = await axios.post('http://192.168.100.60:8000/api/user_session_checker/', { email, session_token });
        if (response.status === 200) {
          setIsAuthenticated(true);
          setUserName(name || '');
          setConnectedUser(connecteduser || null);
          console.log(connecteduser)
        }
      } catch (err) {
        console.error('Session check failed:', err);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-100">Loading...</div>;
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          {connectedUser === 'Client' && (
            <div>
              <TestHeader />
              <h1>Welcome, {userName}! (Client Dashboard)</h1>
              <FreelancerList />
            </div>
          )}

          {connectedUser === 'Freelancer' && (
            <div>
              <TestHeader />
              <h1 className='mt-24'>Welcome, {userName}! (Freelancer Dashboard)</h1>
            </div>
          )}
        </div>
      ) : (
        <div>
          <TestTwoHeader />
        </div>
      )}
    </div>
  );
};

export default SessionCheckerForHome;
