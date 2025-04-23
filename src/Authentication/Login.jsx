import React from 'react';
import './Login.css'; // Make sure to create this CSS file
import medex from '../assets/MedEx.jpeg'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="Login-logo">
          <img src={medex} alt="" className='login-logo-img' />
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

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="enter email..." />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="enter password..." />
        </div>

        <button className="login-btn" onClick={()=> navigate("/")}>Login</button>

        <p className="signup-text">
          Don’t have an account? <a href="#" onClick={()=>navigate('/signup')}>Sign up for Free</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
