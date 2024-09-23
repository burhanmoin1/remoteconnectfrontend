'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';  // Next.js 13 uses `useParams` from 'next/navigation'
import Cookies from 'js-cookie';

interface Message {
  sender: string;
  message: string;
  timestamp: string;
}

const ChatRoom = () => {
  const { chatRoomId } = useParams();
  const user_id = Cookies.get('user_id') || '';
  const connected_user = Cookies.get('connected_user'); // 'Client' or 'Freelancer'
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`http://192.168.100.60:8000/api/chatrooms/${chatRoomId}/messages/`);
        const data = await response.json();
        setMessages(data.messages);  // Assuming your API returns { messages: [...] }
      } catch (error) {
        console.error("Error fetching chat messages:", error);
      }
    };
  
    fetchMessages();
  
    const socket = new WebSocket(`ws://192.168.100.60:8000/ws/chat/${chatRoomId}/`);
    setWs(socket);
  
    // WebSocket event listeners
    socket.addEventListener('open', () => {
      console.log('WebSocket connection established');
    });
  
    socket.addEventListener('message', (event) => {
      const data = JSON.parse(event.data);
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: data.sender,
          message: data.message,
          timestamp: new Date().toISOString(),  // Adjust timestamp logic if needed
        }
      ]);
    });
  
    return () => {
      socket.close();
    };
  }, [chatRoomId]);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    if (!ws) return;

    // Determine the sender based on `connected_user`
    const sender = connected_user === 'Client' ? 'Client' : 'Freelancer';

    // Send the message via WebSocket
    ws.send(JSON.stringify({
      sender,  // Use the role ('Client' or 'Freelancer') as the sender
      message: newMessage
    }));

    setNewMessage('');  // Clear input field
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();  // Prevent the default behavior (e.g., form submission)
      handleSendMessage();  // Trigger message send on "Enter" press
    }
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-2xl font-bold mb-4">Chat Room</h1>

      <div className="mb-4 h-80 overflow-y-auto bg-gray-100 p-4 rounded-md">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className="mb-2">
              {/* Fixed colors: blue for Client, green for Freelancer */}
              <p className={`font-semibold ${message.sender === 'Client' ? 'text-blue-500' : 'text-green-500'}`}>
                {message.sender === 'Client' ? 'Client' : 'Freelancer'}:
              </p>
              <p className="text-gray-700">{message.message}</p>
              <p className="text-xs text-gray-400">{new Date(message.timestamp).toLocaleTimeString()}</p>
            </div>
          ))
        ) : (
          <p>No messages yet. Start the conversation!</p>
        )}
      </div>

      <div className="flex space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}  // Listen for "Enter" key press
          className="flex-grow p-2 border border-gray-300 rounded-md"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
