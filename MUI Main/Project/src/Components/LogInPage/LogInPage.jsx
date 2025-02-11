import React from "react";
// import "./LogInPage.css";

const LogInPage = () => {
  return (
    <div className="mainLog">
        <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input required type="email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input required type="password" />
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot your password?</a>
          </div>
          <button className="btn" type="submit">
            Login
          </button>
          <div className="signup-link">
            <a href="#">Sign Up</a>
          </div>
        </form>
      </div>

      {/* Animated Span Elements */}
      {[...Array(50)].map((_, i) => (
        <span key={i} style={{ "--i": i }}></span>
      ))}
    </div>
    </div>
  );
};

export default LogInPage;
