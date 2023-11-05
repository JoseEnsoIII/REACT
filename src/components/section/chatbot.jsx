import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ChatApp() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    // Send user message to the Node.js server
    const response = await axios.post('/api/chat', { message: input });
    const botResponse = response.data;

    // Update the chat history
    setMessages([...messages, { text: input, type: 'user' }, { text: botResponse, type: 'bot' }]);
    setInput('');
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSubmit}>Send</button>
    </div>
  );
}

export default ChatApp;
