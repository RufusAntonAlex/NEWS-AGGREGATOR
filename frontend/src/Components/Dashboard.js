import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Import CSS for styling

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const handleChangeCategory = (category) => {
    // Handle changing news category
    console.log(`Category changed to: ${category}`);
  };

  const handleChangePreference = () => {
    // Handle changing news preference
    console.log('Change news preference');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">NewsFeed</div>
        <div className="navbar-right">
          <div className="nav-option">
            <select
              onChange={(e) => handleChangeCategory(e.target.value)}
              className="nav-select"
            >
              <option value="General">General</option>
              <option value="Business">Business</option>
              <option value="Politics">Politics</option>
              <option value="Sports">Sports</option>
              <option value="Science">Science</option>
            </select>
          </div>
          <div className="nav-option" onClick={handleChangePreference}>
            Change Preference
          </div>
          <div className="nav-option" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </nav>
      <div className="content">
        <h1>Welcome to the Dashboard</h1>
        <p>This is a protected route</p>
      </div>
    </div>
  );
};

export default Dashboard;
