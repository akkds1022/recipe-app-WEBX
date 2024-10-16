import React, { useState } from 'react';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Get existing users from local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username already exists
    if (existingUsers.some(user => user.username === username)) {
      alert('Username already exists. Please choose another one.');
      return;
    }

    // Add new user to the array
    const newUser = { username, password };
    existingUsers.push(newUser);

    // Store updated users array in local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
    alert('Sign up successful!');
  };

  return (
    <div>
      <h1>Sign Up</h1>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
