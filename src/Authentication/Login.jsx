import React from 'react';
import './Login.css';
import medex from '../assets/MedEx.jpeg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to check credentials if needed
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="Login-logo">
          <img src={medex} alt="MedEx Logo" className="login-logo-img" />
        </div>
        <h2 className="login-title">Welcome back</h2>
        <p className="login-subtitle">
          Glad to see you again 👋 <br />
          Login to your account below
        </p>

        <button className="google-btn">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVL7CjodNvJza5RqtFOKePaXGh0np5ErAKw&s"
            alt="Google"
            className="google-icon"
          />
          Continue with Google
        </button>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="enter email..." required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password" placeholder="enter password..." required />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="signup-text">
          Don’t have an account?{' '}
          <a href="#" onClick={() => navigate('/signup')}>
            Sign up for Free
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
