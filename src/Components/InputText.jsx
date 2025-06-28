// File: InputText.jsx
import React, { useState } from 'react';
import '../Style/Input.css';

function InputText({ addMessage }) {
  const [message, setMessage] = useState('');

  const sendMessage = () => {
    if (message.trim() === '') return;
    addMessage({ message });
    setMessage('');
  };

  return (
    <div className='inputTexte_contenaire'>
      <textarea
        name="message"
        id="message"
        rows='6'
        placeholder='input message'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default InputText;