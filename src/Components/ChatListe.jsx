import React from 'react';
import '../Style/ChatList.css';

function ChatListe({ chats }) {
  const user = localStorage.getItem('user');

  function SenderChat({ message, username, avatar }) {
    return (
      <div className="Chat_sender">
        <img src={avatar} alt="avatar" />
        <p><strong>{username}</strong></p>
        <p>{message}</p>
      </div>
    );
  }

  function ReceiverChat({ message, username, avatar }) {
    return (
      <div className="chat_receiver">
        <img src={avatar} alt="avatar" />
        <p><strong>{username}</strong></p>
        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className='chats_list'>
      {chats.map((chat, index) => (
        chat.user === user ? (
          <SenderChat
            key={index}
            message={chat.message}
            username={chat.user}
            avatar={chat.avatar}
          />
        ) : (
          <ReceiverChat
            key={index}
            message={chat.message}
            username={chat.user}
            avatar={chat.avatar}
          />
        )
      ))}
    </div>
  );
}

export default ChatListe;
