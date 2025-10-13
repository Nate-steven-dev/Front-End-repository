import React from "react";
import './login.css';

function Login() {

  return (
    <div className="login-container">
      <h2 className="title">Login</h2>
      <form>
        <div className="input-group">
          <input type="email" placeholder="University Email" />
        </div>

        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>

        <button type="submit" className="btn">Login</button>
      </form>
      <p>Forgot Password?</p>
      <p>Don't have an account? <a href="/register" className="link">Register here</a>.</p>

    </div>
  );
}
export default Login;