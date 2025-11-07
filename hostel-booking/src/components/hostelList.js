import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import dreamworldImage from '../Assets/dreamworld.jpeg';
import muhikaImage from '../Assets/muhika.jpeg';
import olympiaImage from '../Assets/olympia.jpeg';
import aryanImage from '../Assets/aryan.jpeg';
import baskonImage from '../Assets/baskon.jpeg';
import hellicanImage from '../Assets/hellican.jpeg';
import mwesigwaImage from '../Assets/mwesigwa.jpg';
import newnanaImage from '../Assets/newnana.jpg';
import '../App.css';
import Footer from './footer';


const hostelsData = [
    { id: 1, name: "Dream world Hostel", location: "Kikoni", description: "A vibrant hostel in the heart of the city.", image: dreamworldImage },
    { id: 2, name: "Olympia Hostel", location: "Kikoni", description: "Close to all major attractions.", image: olympiaImage },
    { id: 3, name: "Mwesigwa Residence", location: "Kikoni", description: "Safe, affordable, and social stays.", image:mwesigwaImage },
    { id: 4, name: "Helican Hostel", location: "Kikumi kikumi", description: "Modern, fully furnished rooms.", image: hellicanImage},
    { id: 5, name: "Aryan Hostel", location: "Wandegeya", description: "A friendly and supportive environment.", image: aryanImage },
    { id: 6, name: "Muhika Hostel", location: "Kikoni", description: "Your home away from home.", image: muhikaImage },
    { id: 7, name: "New Nana Hostel", location: "Old Kampala", description: "Experience the best of student life.", image: newnanaImage},
    { id: 8, name: "Baskon Hostel", location: "Kikoni", description: "Comfort and convenience in one package.", image: baskonImage },
];

const Hostel = ({ id, name, location, description, image }) => {
    return (
        <div className="hostel-item card">
            <img src={image} alt={`${name} hostel`} />
            <div className="card-content">
                <h4>{name}</h4>
                <p>Location: {location}</p>
                <div className="rating">
                    <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                </div>
                <p>{description}</p>
                {/* Use Link for internal navigation */}
                <Link to={`/hostel/${id}`}>View Details</Link>
            </div>
        </div>
    );
}

function HostelList() {
    // State for search and sort functionality (to be implemented)
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('price-asc');

    // Filtered and sorted hostels would be derived here
    const displayedHostels = hostelsData.filter(hostel =>
        hostel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hostel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <h1>Explore our Hostels</h1>
            <p>Welcome to our hostel listing page. Here you can find various hostels to stay during your studies.</p>
            <div className="hostel-search">
                <input
                    type="text"
                    placeholder="Search by name or location"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>Search</button>
            </div>
            <select id="sort-options" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-asc">Rating: Low to High</option>
                <option value="rating-desc">Rating: High to Low</option>
            </select>
            <div id="hostel-list">
                {displayedHostels.length > 0 ? (
                    displayedHostels.map(hostel => <Hostel key={hostel.id} {...hostel} />)
                ) : (
                    <p>No hostels match your search.</p>
                )}
            </div>

            <div className="About-us">
                <h4>About Us</h4>
                <p>Your global community for adventure and connection. We provide safe, affordable, and social stays for students</p>
            </div>
            <Footer />
        </div>
    );
}
export default HostelList;