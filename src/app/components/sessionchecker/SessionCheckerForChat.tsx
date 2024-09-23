'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import ChatRoom from '../websocket/ChatRoom';
import TestHeader from "@/app/components/headercomp/TestHeader";

const SessionCheckerForChat: React.FC = () => {
  const { chatRoomId } = useParams(); // Get chat_room_id from the URL
  const user_id = Cookies.get('user_id'); // Get user_id from cookies
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null); // Handle null state for loading
  const router = useRouter();

  useEffect(() => {
    const checkAccess = async () => {
      if (!chatRoomId || !user_id) {
        setLoading(false);
        return;
      }

      try {
        // Check if the user is part of the chat room
        const response = await axios.get(`http://192.168.100.60:8000/api/chatrooms/${chatRoomId}/check-access/`, {
          params: { user_id }
        });

        if (response.status === 200) {
          setHasAccess(true);
        } else {
          router.push('/'); // Redirect if user does not have access
        }
      } catch (error) {
        console.error('Error checking chat room access:', error);
        router.push('/'); // Redirect on error
      } finally {
        setLoading(false);
      }
    };

    checkAccess();
  }, [chatRoomId, user_id, router]);

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>; // Show loading state
  }

  if (hasAccess) {
    return (
      <div>
        <TestHeader />
        <ChatRoom />
      </div>
    );
  }

  return null; // Return null if no access
};

export default SessionCheckerForChat;
