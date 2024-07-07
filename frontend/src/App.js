import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import SignupForm from './Components/SignupForm';
import Dashboard from './Components/Dashboard'; // Import the Dashboard component

import './App.css'; // Import CSS for global styling

const App = () => {
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route 
            path="/dashboard" 
            element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
          /> {/* Add the Dashboard route */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
