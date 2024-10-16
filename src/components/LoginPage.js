import React, { useState } from 'react';

const LoginPage = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Retrieve users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username and password match
    const user = existingUsers.find(user => user.username === username && user.password === password);
    
    if (user) {
      handleLogin(user.username); // or you can store user.id if needed
      alert('Login successful!');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LoginPage;
