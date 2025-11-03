import React from "react";
import '../App.css'
import Footer from './footer'

function HostelDetails(){
    return(
        <div>
            <div className="gallery">
            <img src="https://via.placeholder.com/150" alt="Hostel Image 1"/>
            <img src="https://via.placeholder.com/150" alt="Hostel Image 2"/>
            <img src="https://via.placeholder.com/150" alt="Hostel Image 3"/>
            <img src="https://via.placeholder.com/150" alt="Hostel Image 4"/>
            <img src="https://via.placeholder.com/150" alt="Hostel Image 5"/>
        </div>

        <div className="card">
            <div class="hostel-header">
                 <h2>Dream World Hostel</h2>
                <p>Location: City</p>
                <div class="rating">
                    <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                </div>
            </div>
           
            <p>
                Dream World Hostel is a vibrant hostel located in the heart of the city, close to all major attractions. 
                We offer comfortable dormitory-style accommodations with free Wi-Fi, communal kitchens, and social areas 
                where you can meet fellow students. Our friendly staff are here to help you make the most of your stay.
            </p>
    
            <div className="amenities">
                <h3>Amenities</h3>
                <ul>
                    <li>Free high-speed Wifi</li>
                    <li>Communal Kitchen</li>
                    <li>Social Area</li>
                    <li>Laundry Facilities</li>
                    <li>TV room</li>
                </ul>
            </div>
        </div>
        
        <div className="Available-rooms">
            <div className="room-type card">
                <img src="https://via.placeholder.com/250x150" alt="Single Room"/>
                <div class="card-content">
                    <p>10 Single room</p>
                    <p>Shs.1,200,000</p>
                    <button><a href="booking.html">Book Now!</a></button>
                </div>
            </div>
            <div className="room-type card">
                <img src="https://via.placeholder.com/250x150" alt="Double Room"/>
                <div className="card-content">
                    <p>20 Double room</p>
                    <p>Shs.900,000</p>
                    <button><a href="booking.html">Book Now!</a></button>
                </div>
            </div>
            <div className="room-type card">
                <img src="https://via.placeholder.com/250x150" alt="Triple Room"/>
                <div class="card-content">
                    <p>10 Triple room</p>
                    <p>Shs.600,000</p>
                    <button><a href="booking.html">Book Now!</a></button>
                </div>
            </div>

        </div>
        </div>

    );
};

export default HostelDetails;