import React from "react";
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <p className="email">Send us an email: <a href="mailto:support@hostelbooking.com">support@hostelbooking.com</a> </p>
            <p className="follow">Follow us on: <br />
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a><br />
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a><br />
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </p>
            <p className="copyright">&copy; {new Date().getFullYear()} Hostel Booking System. All rights reserved.</p>
        </div>
    );
}

export default Footer;