import React, { useState, useEffect } from "react";
import "./LoginPage.css"; 
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const invalidPassword = ()=>toast.warn('Invalid email or Password',{
    style:{backgroundColor:'red',color:'white'}
  });
  const succesFullLogin = ()=>toast.success("Login Succesfull")
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getData = JSON.parse(localStorage.getItem("SignUpData"));

    if (getData && Array.isArray(getData)) {
      const user = getData.find(
        (data) => data.email === loginData.email && data.password === loginData.password
      );

      if (user) {
        succesFullLogin();
        navigate('/homepage')
        setLoginData({
          email: "",
          password: "",
        })
      } else {
        invalidPassword();
      }
    } else {
      alert("No registered users found!");
    }

   
  };

  return (
    <div className="mainLogin">
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Welcome Back!</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p className="signup-text">
            Don't have an account? <a style={{cursor:'pointer'}} className="signup-link" onClick={()=>{navigate('/SignUpPage')}}>Sign up</a>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default LoginPage;
