import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { FaYoutube } from 'react-icons/fa';
import ChatListe from './ChatListe';
import InputText from './InputText';
import UserLogin from './UserLogin';
import '../Style/Contenaire.css';

function ChatContenaire() {
  const [user, setUser] = useState(localStorage.getItem('user'));
  const [chats, setChats] = useState([]);
  const socketio = socketIOClient('http://localhost:3001');

  useEffect(() => {
    socketio.on('chat', (chatsReceived) => {
      setChats(chatsReceived);
    });

    return () => {
      socketio.off('chat');
    };
  }, []);

  const sendToSocket = (chat) => {
    socketio.emit('chat', chat);
  };

  const addMessage = (chat) => {
    const newChat = {
      ...chat,
      user: localStorage.getItem('user'),
      avatar: localStorage.getItem('avatar'),
    };
    setChats((prevChats) => [...prevChats, newChat]);
    sendToSocket(newChat);
  };

  const Logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
    setUser('');
  };

  return (
    <div>
      {user ? (
        <div>
          <div className='chat_header'>
            <h4>UserName: {user}</h4>
            <p>
              <FaYoutube className='chat_icons' /> code with {user}
            </p>
            <p className='cht_logout' onClick={Logout}>
              <strong>LogOut</strong>
            </p>
          </div>
          <ChatListe chats={chats} />
          <InputText addMessage={addMessage} />
        </div>
      ) : (
        <UserLogin setUser={setUser} />
      )}
    </div>
  );
}

export default ChatContenaire;