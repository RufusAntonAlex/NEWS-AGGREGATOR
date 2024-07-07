import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './login.css'; // Import CSS for styling

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      // Redirect or show dashboard here
      window.location.href = '/dashboard'; // Example redirect
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.'); // Example error handling
    }
  };

  return (
    <form onSubmit={handleLogin} className="form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {error && <p className="error">{error}</p>}
      <button type="submit">Login</button>
      <p>
        Don't have an account? <Link to="/signup">Signup here</Link>
      </p>
    </form>
  );
};

export default LoginForm;
