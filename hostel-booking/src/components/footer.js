import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Footer() {
    const { user } = useAuth();
    const dashboardLink = user?.role === 'admin' ? '/adminDashboard' : '/studentDashboard';

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h2 className="logo-text">HostelExplorer</h2>
                    <p>
                        Your one-stop solution for finding the best student hostels. We provide safe, affordable, and social stays.
                    </p>
                </div>
                <div className="footer-section links">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><Link to="/hostelList">Hostels</Link></li>
                        <li><Link to="/about">AboutUs</Link></li>
                        {user && <li><Link to={dashboardLink}>Dashboard</Link></li>}
                    </ul>
                </div>
                <div className="footer-section social">
                    <h2>Follow Us</h2>
                    <div className="social-media">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} HostelExplorer | All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;