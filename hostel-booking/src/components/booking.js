import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import '../App.css';
import Footer from './footer';

// In a real app, this data would likely come from a global state or an API call
const hostelsData = [
    { 
        id: 1, 
        name: "Dream World Hostel", 
        rooms: [
            { type: "Single room", price: "1,200,000" },
            { type: "Double room", price: "900,000" },
            { type: "Triple room", price: "600,000" }
        ]
    },
    // Add other hostel details here...
    { id: 2, name: "Olympia Hostel", rooms: [] },
    { id: 3, name: "Mwesigwa Residence", rooms: [] },
    { id: 4, name: "Helican Hostel", rooms: [] },
    { id: 5, name: "Aryan Hostel", rooms: [] },
    { id: 6, name: "Muhika Hostel", rooms: [] },
    { id: 7, name: "New Nana Hostel", rooms: [] },
    { id: 8, name: "Baskon Hostel", rooms: [] },
];

function Booking() {
    const { hostelId, roomType: roomTypeParam } = useParams();
    const navigate = useNavigate();

    const [bookingDetails, setBookingDetails] = useState({
        studentName: '',
        email: '',
        phoneNumber: '',
        hostelName: '',
        roomType: '',
        checkInDate: '',
        paymentMethod: 'mobile-money',
        mobileNumber: '',
        cardNumber: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        const hostel = hostelsData.find(h => h.id === parseInt(hostelId));
        if (hostel) {
            setBookingDetails(prev => ({
                ...prev,
                hostelName: hostel.name,
                roomType: roomTypeParam ? decodeURIComponent(roomTypeParam) : ''
            }));
        }
    }, [hostelId, roomTypeParam]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!bookingDetails.studentName || !bookingDetails.email || !bookingDetails.checkInDate) {
            setError('Please fill in all required fields.');
            return;
        }
        setError('');
        console.log('Booking submitted:', bookingDetails);
        alert('Booking successful!');
        navigate('/hostelList'); 
    };

    const hostel = hostelsData.find(h => h.id === parseInt(hostelId));

    return(
        <div>
            <div className="form-container">
                <h2>Book Your Hostel</h2>
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="studentName">Student Name</label>
                        <input type="text" id="studentName" name="studentName" value={bookingDetails.studentName} onChange={handleChange} placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={bookingDetails.email} onChange={handleChange} placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="tel" id="phoneNumber" name="phoneNumber" value={bookingDetails.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="hostelName">Hostel</label>
                        <input type="text" id="hostelName" name="hostelName" value={bookingDetails.hostelName} readOnly />
                    </div>
                    <div className="form-group">
                        <label htmlFor="roomType">Room Type</label>
                        <select id="roomType" name="roomType" value={bookingDetails.roomType} onChange={handleChange} required>
                            <option value="">Select Room Type</option>
                            {hostel?.rooms.map(room => (
                                <option key={room.type} value={room.type}>{room.type} - Shs.{room.price}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="checkInDate">Check-in Date</label>
                        <input type="date" id="checkInDate" name="checkInDate" value={bookingDetails.checkInDate} onChange={handleChange} required />
                    </div>

                    <fieldset className="form-group">
                        <legend>Payment Method</legend>
                        <div>
                            <input type="radio" id="mobile-money" name="paymentMethod" value="mobile-money" checked={bookingDetails.paymentMethod === 'mobile-money'} onChange={handleChange} />
                            <label htmlFor="mobile-money">Mobile Money</label>
                        </div>
                        <div>
                            <input type="radio" id="card" name="paymentMethod" value="card" checked={bookingDetails.paymentMethod === 'card'} onChange={handleChange} />
                            <label htmlFor="card">Visa Card</label>
                        </div>
                    </fieldset>

                    {bookingDetails.paymentMethod === 'mobile-money' && (
                        <div className="form-group">
                            <label htmlFor="mobileNumber">Mobile Number</label>
                            <input type="tel" id="mobileNumber" name="mobileNumber" value={bookingDetails.mobileNumber} onChange={handleChange} placeholder="e.g. 07..." />
                        </div>
                    )}

                    {bookingDetails.paymentMethod === 'card' && (
                        <div className="form-group">
                            <label htmlFor="cardNumber">Card Number</label>
                            <input type="text" id="cardNumber" name="cardNumber" value={bookingDetails.cardNumber} onChange={handleChange} placeholder="Enter card number" />
                        </div>
                    )}

                    <button type="submit">Book Now</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Booking;