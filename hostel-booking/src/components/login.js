import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Login() {
  const [studentWebmail, setStudentWebmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000/api';
      await axios.post(`${API_URL}/auth/login`, { studentWebmail, password }, { withCredentials: true });
      navigate('/hostelList'); 
    } catch (err) {
      setError(err.response?.data?.msg || err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-page">
      <h1>Student Login</h1>
      <div className="login-container">
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;