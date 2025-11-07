import React, { useState } from "react";
import "../App.css";
import Footer from "./footer";

// --- Mock Data (replace with API calls) ---
const hostelData = {
    name: "Dream World Hostel",
    email: "contact@dreamworld.com",
    phone: "+123-456-7890",
    location: "Kikoni, Kampala",
    logo: "https://via.placeholder.com/120",
};

const roomStatsData = {
    total: 50,
    available: 15,
    booked: 35,
};

const tenantsData = [
    { id: 1, room: 101, name: "John Doe", roomType: "Single", checkIn: "12th Aug 2024", email: "john.doe@email.com", phone: "+123456789", status: "Confirmed" },
    { id: 2, room: 102, name: "Jane Smith", roomType: "Double", checkIn: "15th Aug 2024", email: "jane.smith@email.com", phone: "+987654321", status: "Confirmed" },
    { id: 3, room: 205, name: "Peter Jones", roomType: "Single", checkIn: "18th Aug 2024", email: "peter.jones@email.com", phone: "+555555555", status: "Pending" },
    { id: 4, room: 206, name: "John Stones", roomType: "Double", checkIn: "12th Aug 2024", email: "john.stones@email.com", phnone: "+2119765675", status: "Pending" },
];

// --- Sub-components for better organization ---

function HostelProfile({ hostel }) {
    return (
        <div className="hostel-details card">
            <img src={hostel.logo} alt={`${hostel.name} Logo`} />
            <h4>{hostel.name}</h4>
            <h5>{hostel.email}</h5>
            <p>{hostel.phone}</p>
            <p>{hostel.location}</p>
        </div>
    );
}

function ManageAccount() {
    const handleLogout = () => alert('Logout clicked!');
    return (
        <div className="manage-account card">
            <h3>Manage Account</h3>
            <button>Edit Profile</button>
            <button>Change Password</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

function RoomStatistics({ stats }) {
    return (
        <div className="room-details card">
            <div className="room-stats">
                <p>Total Rooms</p>
                <span>{stats.total}</span>
            </div>
            <div className="room-stats">
                <p>Available Rooms</p>
                <span>{stats.available}</span>
            </div>
            <div className="room-stats">
                <p>Booked Rooms</p>
                <span>{stats.booked}</span>
            </div>
        </div>
    );
}

function TenantList({ tenants }) {
    return (
        <div className="tenants card">
            <h3>Tenants</h3>
            <table>
                <thead>
                    <tr>
                        <th>Room</th>
                        <th>Name</th>
                        <th>Room Type</th>
                        <th>Check-in</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tenants.length > 0 ? (
                        tenants.map((tenant) => (
                            <tr key={tenant.id}>
                                <td>{tenant.room}</td>
                                <td>{tenant.name}</td>
                                <td>{tenant.roomType}</td>
                                <td>{tenant.checkIn}</td>
                                <td>{tenant.email}</td>
                                <td>{tenant.phone}</td>
                                <td>
                                    <span className={`status-${tenant.status.toLowerCase()}`}>{tenant.status}</span>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No tenants match your search.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

function AdminDashboard() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTenants = tenantsData.filter(tenant =>
        tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tenant.roomType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(tenant.room).includes(searchQuery)
    );

    return (
        <div className="admin-dashboard-page">
            <h1>Admin Dashboard</h1>
            <div className="admin-dashboard-container">
                <div className="dashboard-sidebar">
                    <HostelProfile hostel={hostelData} />
                    <ManageAccount />
                </div>

                <div className="dashboard-main-content">
                    <RoomStatistics stats={roomStatsData} />
                    <div className="tenant-search-container card">
                        <div className="tenant-search">
                            <input
                                type="text"
                                placeholder="Search by name, room number, or type..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button>Search</button>
                        </div>
                    </div>
                    <TenantList tenants={filteredTenants} />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;