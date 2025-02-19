import React, { useState } from "react";
import "./SignUp.css";
import {useNavigate} from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    CnfPassword: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      data.FirstName === "" ||
      data.LastName === "" ||
      data.Email === "" ||
      data.Password === "" ||
      data.CnfPassword === ""
    ) {
      alert("Fill all the textfield first then you will be able to signUp ");
    } 
    else if (data.Password == data.CnfPassword) {
    
        const getData = JSON.parse(localStorage.getItem("user") || "[]");
        let arr = [];
        arr = [...getData];
        arr.push(data);
        localStorage.setItem("user", JSON.stringify(arr));
        console.log(arr);     
        navigate('/')
        alert("Accout Created Succesfully")
    }
    else {
      alert("password not matched");
    }
    setData({
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      CnfPassword: ""
    })
  };

  return (
    <div className="Scontainer">
      <div className="signup-container">
        <form className="signup-form">
          <h2 className="signup-title" style={{color:'white', fontSize:'17px'}}>Create an Account</h2>
          <p className="signup-message">
            Join us today and enjoy exclusive benefits!
          </p>

          <div className="signup-flex">


            
            <label className="signup-label">
              <input
                type="text"
                required
                name="FirstName"
                placeholder="First Name"
                onChange={handleChange}
                className="signup-input"
                value={data.FirstName}
              />
            </label>
            <label className="signup-label">
              <input
                type="text"
                required
                name="LastName"
                placeholder="Last Name"
                onChange={handleChange}
                className="signup-input"
                value={data.LastName}
              />
            </label>
          </div>

          <div className="mainInput">
            <label className="signup-label">
              <input
                type="email"
                required
                name="Email"
                placeholder="Email"
                onChange={handleChange}
                className="signup-input"
                value={data.Email}
              />
            </label>

            <label className="signup-label">
              <input
                type="password"
                required
                name="Password"
                placeholder="Password"
                onChange={handleChange}
                className="signup-input"
                value={data.Password}
              />
            </label>

            <label className="signup-label">
              <input
                type="password"
                required
                name="CnfPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                className="signup-input"
                value={data.CnfPassword}
              />
            </label>
          </div>

          <button  type="submit"
            onClick={handleSubmit}
            className="signup-button" class="signUpBtn"> Button </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
