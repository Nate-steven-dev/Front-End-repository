import React from "react";
import './home.css';
import muhikaImg from '../Assets/muhika.jpeg';
import dreamworldImg from '../Assets/dreamworld.jpeg';
import akwataImg from '../Assets/akwata.jpeg';
import nakiyingiImg from '../Assets/nakiyingi.jpeg';           
import olympiaImg from '../Assets/olympia.jpeg';


function Home() {
  return (
    <div className="body">
      <div className="welcome-section"> 
        <h2>Welcome to the Hostel Booking System</h2>   
        <p>
          Discover and book the best hostels for your stay. Our platform makes it easy to find comfortable, affordable, and secure accommodation tailored to your needs.
        </p>
        <div className="search-bar">
          <input type="text" placeholder="Search for hostels..." />
          <button className="search-btn">Search</button>
        </div>
      </div>

      <div className="hostel-features">
        <h3>Available hostels</h3>
        <div className="hostel-list">
          <div className="hostel-card">
            <h4>Olympia Hostel</h4> 
            <img src={olympiaImg} alt="Olympia Hostel"/>
            <p>Comfortable rooms with free Wi-Fi and breakfast included.</p>
            <p>Luxurious Swimming Pool</p>                    
          </div>
        
          <div className="hostel-card">
            <h4>Muhika Hostel</h4>
            <img src={muhikaImg} alt="Muhika Hostel"/>
            <p>Modern amenities with a vibrant atmosphere.</p>  
          </div>

          <div className="hostel-card">
            <h4>DreamWorld Hostel</h4>
            <img src={dreamworldImg} alt="DreamWorld Hostel"/>
            <p>Cozy dorms and private rooms with city views.</p>
          </div>

          <div className="hostel-card">
            <h4>Akwata Mpola Hostel</h4>
            <img src={akwataImg} alt="Akwata Mpola Hostel"/>
            <p>Affordable rates with a friendly atmosphere.</p>
          </div>

          <div className="hostel-card">
            <h4>Nakiyingi Hostel</h4>
            <img src={nakiyingiImg} alt="Nakiyingi Hostel"/>
            <p>Luxurious stay with top-notch facilities.</p>
          </div>   
        </div>
        <button className="view-more-btn">View More Hostels</button>
      </div>
      <a href="/login" className="login">Login</a>
    </div>
  );
}

export default Home;