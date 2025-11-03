import React from 'react';
import '../App.css';
import Footer from './footer';

// Mock data - in a real app, this would come from props or an API call
const studentData = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    phone: '+123-456-7890',
    profilePicture: 'https://via.placeholder.com/120',
};

const bookingsData = [
    { id: 1, hostel: 'Dream World Hostel', status: 'Confirmed', checkIn: '12th Aug 2024' },
    { id: 2, hostel: 'Kare Hostel', status: 'Confirmed', checkIn: '12th Aug 2024' },
];

function ProfileDetails({ user }) {
    return (
        <div className="profile-details card">
            <img src={user.profilePicture} alt={`${user.name}'s profile`} />
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
}

function MyBookings({ bookings }) {
    return (
        <div className="Mybookings card">
            <h3>My Bookings</h3>
            <table>
                <thead>
                    <tr>
                        <th>Hostel</th>
                        <th>Status</th>
                        <th>Check-in</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.hostel}</td>
                                <td>{booking.status}</td>
                                <td>{booking.checkIn}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No bookings found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

function ManageAccount() {
    // Placeholder functions for button actions
    const handleEditProfile = () => alert('Edit Profile clicked!');
    const handleChangePassword = () => alert('Change Password clicked!');
    const handleLogout = () => alert('Logout clicked!');

    return (
        <div className="manage-account card">
            <h3>Manage Account</h3>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleChangePassword}>Change Password</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

function StudentDashboard() {
    return (
        <div className="admin-dashboard-page">
            <h1>Student Dashboard</h1>
            <div className="admin-dashboard-container">
                <div className="dashboard-sidebar">
                    <ProfileDetails user={studentData} />
                    <ManageAccount />
                </div>
                <div className="dashboard-main-content">
                    <MyBookings bookings={bookingsData} /> {/* This will now be the main content */}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default StudentDashboard;