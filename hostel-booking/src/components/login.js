import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
    <div className="login-page">
      <h1>Student Login</h1>
      <div className="login-container">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
}

export default Login;