import React from "react";
import './login.css';

function Register() {

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: add register logic
  };

  return (
    <div className="login-container">
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input type="text" placeholder="Full Name"/>
        </div>

        <div className="input-group">
          <input type="email" placeholder="University Email"/>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Phone Number"/>
        </div>

        <div className="input-group">
            <input type="password" placeholder="Password"/>
        </div>

  <button type="submit" className="btn">Register</button>
      </form>
      
      <p>Already have an account? <a href="/login" className="link">Login here</a>.</p>
      
    </div>
  );
}

export default Register;
