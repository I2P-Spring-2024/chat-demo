import React, { useState } from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>('');

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

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          flex: 1,
          overflowY: 'scroll',
          padding: '10px',
          border: '1px solid #ccc',
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', color: message.isUser ? 'blue' : 'green' }}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ padding: '10px', borderTop: '1px solid #ccc' }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '80%', padding: '5px' }}
        />
        <button type="submit" style={{ marginLeft: '5px' }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatDemo;
