import React from "react";
import '../App.css';

function HostelList(){
    return(
        <div>
            <h1>Explore our Hostels</h1>
        <p>Welcome to our hostel listing page. Here you can find various hostels to stay during your travels.</p>
        <div class="hostel-search">
            <input placeholder="search by name or location" />
            <button>Search</button>
        </div>
        <select id="sort-options">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-asc">Rating: Low to High</option>
            <option value="rating-desc">Rating: High to Low</option>
        </select>
        <div id="hostel-list">
             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Dream World Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>
             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Olympia Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>

             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Kare Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>

             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Juliana Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>

             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Muhika Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>

             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Aryan Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>

             <div class="hostel-item card">
                <img alt="hostel"/>
                <div class="card-content">
                    <h4>Aryan Hostel</h4>
                    <p>Location: City</p>
                    <div class="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                    <p>A vibrant hostel in the heart of the city, close to all major attractions.</p>
                    <a href="hostel-details.html">View Details</a>
                </div>
             </div>
            
        </div>

        <div class="About-us">
            <h4>About Us</h4>
            <p>Your global community for adventure and connection. We provide safe, affordable, and social stays for students</p>
        </div>
        </div>
    );

}
    
export default HostelList;