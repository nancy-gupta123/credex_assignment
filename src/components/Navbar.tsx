'use client';

import React, { useState } from 'react';

export default function NavbarWithChat() {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!message.trim()) return;
    setLoading(true);
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setResponse(data.reply);
    } catch (error) {
      console.error('Error:', error);
      setResponse("Something went wrong. Please try again later.");
    }
    setLoading(false);
  };

  const exampleQuestions = [
    'How do I sell my license?',
    'What is the process to transfer ownership?',
    'Do I need documents to verify the license?',
  ];

  return (
    <div className="relative">
      <nav className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center px-4 py-4 text-white">
        <div className="text-xl font-bold"></div>
        <button
          onClick={() => setShowChat(!showChat)}
          className="mt-3 sm:mt-0 bg-white text-blue-900 font-medium py-2 px-6 rounded-md hover:bg-gray-200 transition"
        >
          {showChat ? 'Close Chat' : '💬 Chat'}
        </button>
      </nav>

      {showChat && (
        <div className="fixed bottom-5 right-5 w-full max-w-sm bg-white text-black border border-gray-200 shadow-lg rounded-lg p-4 z-50">
          <div className="font-semibold text-gray-800 mb-2">AI Assistant</div>
          <div className="text-sm text-gray-500 mb-3">Try: {exampleQuestions.join(' | ')}</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={2}
            placeholder="Ask something..."
            className="w-full p-2 rounded-md border border-gray-300 mb-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className={`w-full py-2 rounded-md text-white font-medium transition ${
              loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-600'
            }`}
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
          {response && (
            <div className="mt-3 p-2 bg-gray-100 rounded text-sm text-gray-800">
              <strong>AI:</strong> {response}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
