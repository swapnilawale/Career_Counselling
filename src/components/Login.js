import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login1.css";

const Login = () => {
  return (
    <div className="container">
      {/* Left Side - Login Form */}
      <div className="login-form">
        <h1>Welcome back</h1>
        <p>Please enter your details</p>

        <button className="google-signin">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="Google Logo"
            className="google-logo"
          />
          Sign in with Google
        </button>

        <p className="or-text">or</p>

        <input type="email" placeholder="Email address" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <div className="remember-forgot">
          <label><input type="checkbox" /> Remember for 30 days</label>
          <Link to="/forgot-password" className="forgot">Forgot password?</Link>
        </div>

        <button className="signin-button">Sign in</button>

        <p className="signup-text">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>

      {/* Right Side - Image Section */}
      <div className="image-section">
        <div className="overlay"></div>
        <div className="text">
          <h2>Bring your ideas to life.</h2>
          <p>Sign up for free and enjoy access to all features for 30 days. No credit card required.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;