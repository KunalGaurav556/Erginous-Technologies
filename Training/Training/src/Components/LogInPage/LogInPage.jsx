import React, { useState, useEffect } from "react";
import "./LoginPage.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserLoginBtn from "../../ExtraComponents/UserLoginBtn";

const LoginPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const invalidPassword = () =>
    toast.warn("Invalid email or Password", {
      style: { backgroundColor: "red", color: "white" },
    });

  const userNotFound = () => {
    toast.error("User not Found");
  };

  const succesFullLogin = () => toast.success("Login Succesfull");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const getData = JSON.parse(localStorage.getItem("SignUpData"));

    if (getData && Array.isArray(getData)) {
      const user = getData.find(
        (data) =>
          data.email === loginData.email && data.password === loginData.password
      );

      if (user) {
        succesFullLogin();
        navigate("/homePage");
        setLoginData({
          email: "",
          password: "",
        });
      } else {
        invalidPassword();
      }
    } else {
      userNotFound();
    }
  };

  return (
    <div className="mainLogin bgimageLogin">
      <div className="login-container">
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          <button
            className="cta"
            style={{
              position: "relative",
              top: "10px",
              right: "10px",
            }}
          >
            <span>User Login</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
        <div className="login-box">
          {/* <img src="https://png.pngtree.com/png-clipart/20231004/ourmid/pngtree-flying-parrot-bird-transparent-background-png-image_10192904.png" alt=""
            style={{
              width:'200px',
              height:'200px',
              position:'absolute',
              left:'20rem',
              top:'-10px',
              // zIndex:'0'
            }}
          /> */}

          <h2
            className="login-title"
            style={{ color: "green", fontFamily: "cursive" }}
          >
            Login Here !
          </h2>
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
            <button
              type="submit"
              className="btn login-btn"
              style={{ backgroundColor: "green" }}
            >
              Login
            </button>
          </form>
          <p className="signup-text">
            Don't have an account?{" "}
            <a
              style={{ cursor: "pointer" }}
              className="signup-link"
              onClick={() => {
                navigate("/SignUpPage");
              }}
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
