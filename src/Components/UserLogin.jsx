// File: UserLogin.jsx
import React, { useState } from 'react';
import { FaReact } from 'react-icons/fa';
import '../Style/Login.css';
import _ from 'lodash';

function UserLogin({ setUser }) {
  const [userName, setUserName] = useState(''); // Changed to camelCase for consistency

  const handleLogin = () => { // Renamed for clarity
    if (!userName) return; // Use userName directly
    localStorage.setItem('user', userName);
    setUser(userName);
    localStorage.setItem('avatar', `https://picsum.photos/id/${_.random(1, 1000)}/200/300`);
  };

  return (
    <div className="login-container"> {/* Renamed for consistency */}
      <div className="login-header"> {/* Renamed for clarity */}
        <FaReact size={30} className='login-icon' /> {/* Renamed for consistency */}
        <h1>Chat App</h1>
      </div>
      <div className="login-form"> {/* Renamed for singular and consistency */}
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
          value={userName} // Use userName directly
        />
        <button onClick={handleLogin}>Login</button> {/* Use handleLogin */}
      </div>
    </div>
  );
}

export default UserLogin;