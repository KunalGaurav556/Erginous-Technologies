import React, { useEffect, useState } from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
// import SocialIcons from "../SocialIcons/SocialIcons";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // document.body.style.backgroundColor = "red";
    navigate("/LoginPage");
  };

  const getData = JSON.parse(localStorage.getItem("SignUpData"));
  // console.log(getData.username);

  const infoToast = () => {
    toast.info("Your are on Home Page Now", {
      position: "bottom-left",
    });
  };


 

  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding: "0.3rem",
        }}
      >
        <img
          src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
          alt=""
          style={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            textAlign: "center",
          }}
        />
        <h2 className="sidebar-title">Admin</h2>
      </div>

      <div className="sidebar-menu">
        <button
          className="menu-item"
          style={{backgroundColor:'green'}}
          onClick={() => {
            navigate("/homepage"), infoToast();
          }}
        >
          {<Home size={22} />} Home
        </button>

        <button
          className="menu-item"
          onClick={() => {
            navigate("/CostomerData");
          }}
        >
          {<User size={22} />} Students
        </button>

        <button className="menu-item">{<Settings size={22}/>}Schedule</button>

        <button className="menu-item" onClick={() => handleClick()}>
          {<LogOut size={22} />}Log Out
        </button>
      </div>

      <footer className="sidebar-footer">© 2025 Erginous</footer>
      {/* <SocialIcons/> */}
    </div>
  );
};

export default Sidebar;
