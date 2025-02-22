import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // Load data from localStorage when the component mounts
  const [allData, setAllData] = useState(() => {
    const storedData = localStorage.getItem("SignUpData");
    return storedData ? JSON.parse(storedData) : [];
  });

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const warnToastPassword = () => toast.warn("Fill all fields first!");
  const warnConfirmation = () => toast.warn("Passwords do not match!");
  const successToast = () => toast.success("SignUp Successful!");

  const handleSignUp = (e) => {
    e.preventDefault();

    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      warnToastPassword();
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      warnConfirmation();
      return;
    }

    const updatedData = [...allData, formData];
    setAllData(updatedData);
    localStorage.setItem("SignUpData", JSON.stringify(updatedData)); // Store immediately

    successToast();
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    navigate("/LoginPage");
  };

  // Save allData to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("SignUpData", JSON.stringify(allData));
  }, [allData]);

  return (
    <>
      <div class="container" style={{
        width:'99%'
      }}>
        <div className="mainSignUp">
          <div className="signup-container">
            <div className="signup-box">
            <img src="https://png.pngtree.com/png-clipart/20231004/ourmid/pngtree-flying-parrot-bird-transparent-background-png-image_10192904.png" alt=""
            style={{
              width:'200px',
              height:'200px',
              position:'absolute',
              right:'20rem',
              bottom:'21.9rem',

            }}
          />
              <h2 style={{color:'green', fontFamily:"cursive",fontWeight:'600'}}>Create Your Account</h2>

              <form onSubmit={handleSignUp}>
                <div className="input-group">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder="Username"
                    onChange={handleChange}
                    required
                    id="signInput"
                  />
                </div>

                <div className="input-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    placeholder="Email"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn signup-btn">
                  Sign Up
                </button>
                <button
                  type="button"
                  className="btn login-btn"
                  onClick={() => navigate("/LoginPage")}
                  style={{
                    backgroundColor:'black',
                    color:'white'
                  }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default SignUp;
