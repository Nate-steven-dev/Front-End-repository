import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import HostelList from './components/hostelList';

function Home() {
  return (
    <div className="home-background">
      <div className="home-container">
        <div className="intro-text">
          <h1>Welcome to Hostel Explorer</h1>
          <h3>Finding the perfect place to stay while studying has never been easier.</h3>
          <p>
            At Hostel Explorer, we understand what students need — comfort, safety, affordability, and a friendly community.
          </p>
          <ul className="features-list">
            <li>🏠 Modern, fully furnished rooms</li>
            <li>📶 Free high-speed Wi-Fi</li>
            <li>🧺 Laundry and study areas</li>
            <li>👫 Safe and supportive student environment</li>
            <li>💰 Flexible and affordable payment options</li>
          </ul>
          <p>Whether you’re starting a new semester or moving closer to campus,
            we’re here to make your hostel booking simple and stress-free.</p>

          <p><strong>Book your room today and focus on what truly matters — your studies and your success!</strong></p>
        </div>

        <div className="auth-buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to ="/register" className="btn">Register</Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hostelList" element={<HostelList />} />
    </Routes>
  );
}

export default App;