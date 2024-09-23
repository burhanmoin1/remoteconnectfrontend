'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

interface Freelancer {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
}

const FreelancerList = () => {
  const [freelancers, setFreelancers] = useState<Freelancer[]>([]);
  const user_id = Cookies.get('user_id'); 
  const router = useRouter();

  useEffect(() => {
    // Fetch freelancers from the API
    const fetchFreelancers = async () => {
      try {
        const response = await axios.get('http://192.168.100.60:8000/api/getfreelancers/');
        setFreelancers(response.data);
      } catch (error) {
        console.error('Error fetching freelancers:', error);
      }
    };

    fetchFreelancers();
  }, []);

  const openChat = async (freelancer: Freelancer) => {
    if (!user_id) {
      console.error('Client ID not found!');
      return;
    }

    try {
      // Check or create the chat room
      const response = await axios.post('http://192.168.100.60:8000/api/chatrooms/', {
        client_id: user_id,       // Client ID from cookies
        freelancer_id: freelancer.id,  // Freelancer ID from the freelancer data
      });

      const chatRoomId = response.data.chat_room_id;
      router.push(`/chat/${chatRoomId}`);


    } catch (error) {
      console.error('Error initiating chat:', error);
    }
  };

  const showDetails = (freelancer: Freelancer) => {
    // Log freelancer details to the console
    console.log({
      'user_id': freelancer.id,
      'first_name': freelancer.first_name,
      'last_name': freelancer.last_name,
      'email': freelancer.email,
      'country': freelancer.country,
    });
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-2xl font-bold mb-4">Freelancers</h1>
      <ul className="space-y-4">
        {freelancers.map((freelancer) => (
          <li key={freelancer.id} className="p-4 bg-white shadow rounded-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{freelancer.first_name} {freelancer.last_name}</h2>
              <p>{freelancer.country}</p>
              <p>{freelancer.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => openChat(freelancer)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Chat
              </button>
              <button
                onClick={() => showDetails(freelancer)}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Details
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerList;
