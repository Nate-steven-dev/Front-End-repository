import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import '../App.css';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "admin" && password === "admin@1234") {
            login({ role: 'admin' });
            setError('');
            navigate('/adminDashboard');
        } else {
            setError('Invalid username or password');
        }
    };
    return (    
        <div className="admin-login-page">
            <h1>Admin Login</h1>
            <div className="admin-login-container">
                {error && <div className="error-message">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"   
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
                </div>
    );
}

export default AdminLogin;