import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signup.css'; // Import CSS for styling
import logo from '../assets/image.png'; // Import the logo image

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/signup', { 
        username, 
        password
      })
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
      <img src={logo} alt="Logo" className="logo" />
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      
      
      {error && <p className="error">{error}</p>}
      <br></br><br></br>
      <button type="submit" className="button">Signup</button>
      <p className="login-link">
        Already have an account? <Link to="/">Login here</Link>
      </p>
    </form>
  );
};

export default SignupForm;
