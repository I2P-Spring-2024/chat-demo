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
    <div className="flex flex-col h-screen bg-gray-900">
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-scroll bg-gray-900 p-10"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isUser ? 'justify-end' : 'justify-start'
            } mb-2`}
          >
            <div
              className={`${
                message.isUser
                  ? '  bg-purple-950 text-white rounded-bl-lg rounded-tr-lg rounded-tl-lg'
                  : ' bg-fuchsia-950 text-white rounded-br-lg rounded-tr-lg rounded-tl-lg'
              } p-2 max-w-xs`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="p-10 border-t bg-gray-800">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          className="w-3/4 p-3 rounded-lg  border-gray-300  bg-gray-900 text-white"
        />
        <button type="submit" className="ml-2 text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatDemo;
