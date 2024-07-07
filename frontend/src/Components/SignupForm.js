import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'; // Import CSS for styling

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/signup', { username, password })
      .then(result => {
        console.log(result);
        navigate('/'); // Navigate to the login page
      });
    } catch (error) {
      console.error('Signup error:', error);
      setError('Signup failed. Please try again.'); // Example error handling
    }
  };

  return (
    <form onSubmit={handleSignup} className="form">
      <h2>Signup</h2>
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
      <button type="submit">Signup</button>
      <p>
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </form>
  );
};

export default SignupForm;
