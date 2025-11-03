import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import '../App.css';

function HostelList() {
    const [hostels, setHostels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchHostels();
    }, []);

    const fetchHostels = async () => {
        try {
            const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
            const res = await axios.get(`${API_URL}/hostels`, { withCredentials: true });
            const data = res.data;
            setHostels(data);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch hostels');
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div>
            <h1>Explore our Hostels</h1>
            <p>Welcome to our hostel listing page. Here you can find various hostels to stay during your travels.</p>

            <div className="hostel-list">
                {hostels.map((hostel) => (
                    <div key={hostel._id} className="hostel-item card">
                        <img src={hostel.image} alt={hostel.name}/>
                        <div className="card-content">
                            <h4>{hostel.name}</h4>
                            <p>Location: {hostel.location}</p>
                            <div className="rating">
                                {[...Array(Math.round(hostel.rating))].map((_, i) => (
                                    <i key={i}>⭐</i>
                                ))}
                            </div>
                            <p>{hostel.description}</p>
                            <Link to={`/hostels/${hostel._id}`}>View Details</Link>
                        </div>
                    </div>
                ))}
                {hostels.length === 0 && (
                    <p>No hostels available.</p>
                )}
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