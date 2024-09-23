'use client';
import React, { useState, useEffect } from 'react';

const WebSocketComponent = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [message, setMessage] = useState('');
  const [receivedMessage, setReceivedMessage] = useState('');

  useEffect(() => {
    // Connect to WebSocket
    const ws = new WebSocket('ws://localhost:8000/ws/check-consumer/');
    
    // When connection is established
    ws.onopen = () => {
      console.log('Connected to WebSocket');
    };

    // Listen for messages
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log('Message from server:', data);
      setReceivedMessage(data.message);
    };

    // Handle errors
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    // Handle connection close
    ws.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Set WebSocket to state
    setSocket(ws);

    // Cleanup on component unmount
    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (socket && socket.readyState === WebSocket.OPEN) {
      const messagePayload = { message };
      socket.send(JSON.stringify(messagePayload));
      console.log('Message sent:', message);
      setMessage(''); // Clear the input field after sending
    } else {
      console.error('WebSocket is not open');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">WebSocket Communication</h1>

      {/* Form for sending a message */}
      <form onSubmit={sendMessage} className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          className="border rounded px-4 py-2"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 ml-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>

      {/* Display the received message */}
      {receivedMessage && (
        <div className="mt-4">
          <p className="text-lg font-semibold">Received from server:</p>
          <p className="text-gray-700">{receivedMessage}</p>
        </div>
      )}
    </div>
  );
};

export default WebSocketComponent;