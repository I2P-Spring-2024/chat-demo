import React, { useState, useEffect, useRef } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const addMessage = (text: string, isUser: boolean = false) => {
    setMessages((prevMessages) => [...prevMessages, { text, isUser }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Simulate AI response (replace with actual API call)
    addMessage(`User: ${inputText}`, true);
    addMessage('AI: [AI Response]', false);

    setInputText('');
  };

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-scroll border-gray-300"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start ml-auto'} ${
              message.isUser ? 'mb-0 text-blue-500' : 'text-green-500'
            }`}
            
          >
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-300">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="w-3/4 p-2"
        />
        <button type="submit" className="ml-2">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatDemo;
