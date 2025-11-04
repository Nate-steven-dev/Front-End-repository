import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../App.css'
import Footer from './footer'

// In a real app, this data would likely come from a global state or an API call
const hostelsData = [
    { 
        id: 1, 
        name: "Dream World Hostel", 
        location: "Kikoni", 
        description: "A vibrant hostel in the heart of the city, close to all major attractions. We offer comfortable dormitory-style accommodations with free Wi-Fi, communal kitchens, and social areas where you can meet fellow students. Our friendly staff are here to help you make the most of your stay.", 
        images: [
            "https://via.placeholder.com/300x200?text=Gallery+1",
            "https://via.placeholder.com/300x200?text=Gallery+2",
            "https://via.placeholder.com/300x200?text=Gallery+3",
            "https://via.placeholder.com/300x200?text=Gallery+4",
            "https://via.placeholder.com/300x200?text=Gallery+5"
        ],
        amenities: ["Free high-speed Wifi", "Social Area", "Laundry Facilities", "TV room","Shuttle"],
        rooms: [
            { type: "Single room", price: "1,200,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "900,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "600,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }
        ]
    },
    // Add other hostel details here...
    { id: 2, name: "Olympia Hostel", location: "Kikoni", description: "Close to all major attractions. Strategically located in the heart of kikoni, next to Makerere's western gate, fenced all around", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Basketball court", "Laundry Facilities", "TV room","Shuttle"], 
        rooms: [
            { type: "Single room", price: "1,800,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "1,000,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "800,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
    { id: 3, name: "Mwesigwa Residence", location: "Kikoni", description: "Safe, affordable, and social stays. Complete with a restaurant, supermarket, a wide enough parking lot. It's just a home away from home", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Mini-supermarket", "Social Area", "Laundry Facilities", "TV room","Shuttle"], 
        rooms: [ 
            { type: "Single room", price: "2,000,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "1,200,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "700,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }]
        },
    { id: 4, name: "Helican Hostel", location: "Kikumi kikumi", description: "Modern, fully furnished rooms, like no ohter within and around makerere. Tight security available 24/7, no need to worry about the safety of your lives and property", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Backup generator", "Social Area", "Laundry Facilities", "TV room"], 
        rooms: [ 
            { type: "Single room", price: "900,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "600,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "400,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
    { id: 5, name: "Aryan Hostel", location: "Wandegeya", description: "A friendly and supportive environment. We have a gym equiped with all the latest mordern tools, which shows that we care as much about your physical fitness", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Gym", "Shuttle", "Laundry Facilities", "TV room"], 
        rooms: [ 
            { type: "Single room", price: "1,200,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "800,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "500,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
    { id: 6, name: "Muhika Hostel", location: "Kikoni", description: "Your home away from home. Best place to stay for all kinds of people as you will witness from our diverse tenants from diffent backgrounds and lifestyles", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Stocked Canteens", "Social Area", "Laundry Facilities", "TV room","Shuttle"], 
        rooms: [ 
            { type: "Single room", price: "1,000,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "750,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "500,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
    { id: 7, name: "New Nana Hostel", location: "Old Kampala", description: "Experience the best of student life that you will not find anywhere else within and around makerere university", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Mini-football pitch", "Social Area", "Laundry Facilities", "TV room","Shuttle"], 
        rooms: [ 
            { type: "Single room", price: "1,000,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "900,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "600,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
    { id: 8, name: "Baskon Hostel", location: "Kikoni", description: "Comfort and convenience in one package.We promise you will not have a reason to complain, with our round the clock care and attention to details.", 
        images: ["https://via.placeholder.com/300x200"], 
        amenities: ["Free high-speed Wifi", "Printery", "Social Area", "Laundry Facilities", "TV room","Mosque"], 
        rooms: [ 
            { type: "Single room", price: "800,000", image: "https://via.placeholder.com/250x150?text=Single+Room" },
            { type: "Double room", price: "500,000", image: "https://via.placeholder.com/250x150?text=Double+Room" },
            { type: "Triple room", price: "400,000", image: "https://via.placeholder.com/250x150?text=Triple+Room" }] 
        },
];

function HostelDetails() {
    const { id } = useParams();
    const hostel = hostelsData.find(h => h.id === parseInt(id));

    if (!hostel) {
        return <div>Hostel not found</div>;
    }

    return (
        <div className="hostel-details-page">
            <h1>{hostel.name}</h1>
            <div className="gallery">
                {hostel.images.map((img, index) => (
                    <img key={index} src={img} alt='' />
                ))}
            </div>

            <div className="card">
                <div className="hostel-header">
                    <h2>{hostel.name}</h2>
                    <p>Location: {hostel.location}</p>
                    <div className="rating">
                        <i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i><i>⭐</i>
                    </div>
                </div>

                <p>{hostel.description}</p>

                <div className="amenities">
                    <h3>Amenities</h3>
                    <ul>
                        {hostel.amenities.map((amenity, index) => (
                            <li key={index}>{amenity}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="Available-rooms">
                <h2>Available Rooms</h2>
                {hostel.rooms.length > 0 ? (
                    hostel.rooms.map((room, index) => (
                        <div key={index} className="room-type card">
                            <img src={room.image} alt={room.type} />
                            <div className="card-content">
                                <p>{room.type}</p>
                                <p>Shs.{room.price}</p>
                                {/* Assuming you will have a booking route like /booking/:hostelId/:roomType */}
                                <Link to={`/booking/${hostel.id}/${encodeURIComponent(room.type)}`} className="btn">Book Now!</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No specific room types listed for this hostel.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default HostelDetails;