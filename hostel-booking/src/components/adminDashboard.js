import React from "react";
import "../App.css";
import Footer from "./footer";

function AdminDashboard() {
    return (
        <div className="admin-dashboard-page">
            <div className="admin-dashboard-container">
                <h1>Admin Dashboard</h1>
                <div className="dashboard-sidebar">
                    <div className="hostel-details card">
                        <img src="https://via.placeholder.com/120" alt="Hostel Logo"/>
                        <h4>Hostel Name</h4>
                        <h5>Email</h5>
                        <p>Phone Number</p>
                        <p>Location</p>
                    </div>
                    <div className="manage-account card">
                        <h3>Manage Account</h3>
                        <button>Edit Profile</button>
                        <button>Change Password</button>
                        <button>Logout</button>
                    </div>
                </div>

                <div className="dashboard-main-content">
                    <div className="room-details card">
                        <div className="room-stats">
                            <p>Total rooms</p>
                            <span>20</span>
                        </div>
                        <div className="room-stats">
                            <p>Available rooms</p>
                            <span>10</span>
                        </div>
                        <div className="room-stats">
                            <p>Booked rooms</p>
                            <span>10</span>
                        </div>
                    </div>

                    <div className="tenants card">
                        <h3>Tenants</h3>
                        <div className="tenant-search">
                            <input placeholder="search by name or room type" />
                            <button>Search</button>
                        </div>
                        
                        <table>
                            <thead>
                                <tr>
                                    <th>Room</th>
                                    <th>Name</th>
                                    <th>Room type</th>
                                    <th>Check-in</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>101</td>
                                    <td>Student Name</td>
                                    <td>Single room</td>
                                    <td>12th Aug 2024</td>
                                    <td>student@email.com</td>
                                    <td>+123456789</td>
                                    <td><span className="status-confirmed">Confirmed</span></td>
                                </tr>
                                <tr>
                                    <td>102</td>
                                    <td>Another Student</td>
                                    <td>Double room</td>
                                    <td>15th Aug 2024</td>
                                    <td>another@email.com</td>
                                    <td>+987654321</td>
                                    <td><span className="status-confirmed">Confirmed</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;