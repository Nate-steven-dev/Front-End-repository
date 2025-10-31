import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return(
        <div>
            <h1>Create an Account</h1>
            <div className="register-container">
                <form>
                <div className="form-group">
                    <label for="name">Full Name</label>
                    <input type="text" id="name" required/>
                </div>
                <div className="form-group">
                    <label for="email">University Email</label>
                    <input type="email" id="email" required/>
                </div>
                <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required/>
                </div>
                <div className="form-group">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" required/>
                </div>
                <div className="form-group">
                    <label for="phone">Phone Number</label>
                    <input type="tel" id="phone" required/>
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
        </div>
    );
};

export default Register;
