import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link
import "../styles/Signup.css";

const Signup = () => {
  return (
    <div className="container">
      {/* Left Side - Signup Form */}
      <div className="login-form">
        <h1>Create your account</h1>
        <p>Start your 30-day free trial</p>

        <button className="google-signin">
          <FaGoogle className="icon" /> Sign up with Google
        </button>

        <p className="or-text">or</p>

        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" className="input-field" />
          </div>

          <div className="form-group">
            <label>Email address</label>
            <input type="email" placeholder="john@example.com" className="input-field" />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" placeholder="+1 234 567 890" className="input-field" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" className="input-field" />
          </div>

          <div className="form-group">
            <label>Repeat Password</label>
            <input type="password" placeholder="••••••••" className="input-field" />
          </div>

          <div className="terms">
            <label>
              <input type="checkbox" /> I agree to the <a href="#">Terms & Conditions</a>
            </label>
          </div>

          <button className="signin-button">Create Account</button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Sign in</Link>
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

export default Signup;