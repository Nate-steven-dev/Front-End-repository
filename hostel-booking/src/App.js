import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import HostelList from './components/hostelList';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/adminDashboard';
import HostelDetails from './components/hostelDetails';
import StudentDashboard from './components/studentDashboard';
import Booking from './components/booking';

const slideshowImages = [
  'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'https://images.pexels.com/photos/2631746/pexels-photo-2631746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
];
 
const ImageSlideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Start a timer to change the image.
    const timer = setTimeout(() => {
      // Update the current image index.
      setCurrentImageIndex((prevIndex) =>
        // If it's the last image, go back to the first (0).
        // Otherwise, show the next image.
        prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // When the component is removed, or before this effect runs again,
    // clear the timer to stop it from running.
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  return (
    <div className="home-slideshow">
      {slideshowImages.map((image, index) => (
        <div key={index} className={`slide ${index === currentImageIndex ? 'active' : ''}`} style={{ backgroundImage: `url(${image})` }} />
      ))}
    </div>
  );
};

function Home() {
  return (
    <div className="home-page">
      <ImageSlideshow />
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
          <Link to ="/AdminLogin" className="btn">AdminLogin</Link>
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
      <Route path="/AdminLogin" element={<AdminLogin />} />
      <Route path="/hostel/:id" element={<HostelDetails />} />
      <Route path="/adminDashboard" element={<AdminDashboard />} />
      <Route path="/studentDashboard" element={<StudentDashboard />} />
      <Route path="/booking/:hostelId/:roomType" element={<Booking />} />
    </Routes>
  );
}

export default App;