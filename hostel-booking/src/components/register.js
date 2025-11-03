import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Register() {
    const [name, setName] = useState('');
    const [studentWebmail, setStudentWebmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // client-side validation to match backend requirements
            const emailPattern = /^[a-zA-Z0-9._%+-]+\.[a-zA-Z0-9]+@students\.mak\.ac\.ug$/;
            if (!emailPattern.test(studentWebmail)) {
                setError('Email must be a valid student webmail (e.g. name.surname@students.mak.ac.ug)');
                return;
            }
            if (password.length < 8) {
                setError('Password must be at least 8 characters');
                return;
            }

            setLoading(true);
            const API_URL = 'http://localhost:5000/api';
            // backend expects `studentWebmail` field
            await axios.post(`${API_URL}/auth/register`, { name, studentWebmail, password}, { withCredentials: true });
            setLoading(false);
            // Redirect to login after successful registration
            navigate('/login');
        } catch (err) {
            setLoading(false);
            // Prefer structured server messages when available
            const serverMsg = err.response?.data?.msg || err.response?.data?.error || err.response?.data?.message;
            setError(serverMsg || 'Registration failed');
            console.error('Registration error:', err);
        }
    };

    return (
        <div className="register-page">
            <h1>Create an Account</h1>
            <div className="register-container">
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">studentWebmail</label>
                        <input
                            type="email"
                            id="email"
                            value={studentWebmail}
                            onChange={(e) => setStudentWebmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
                </form>
                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    );
}

export default Register;
