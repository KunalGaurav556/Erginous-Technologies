import React, { useState } from "react";
import { Home, User, Settings, LogOut } from "lucide-react";
import "./Sidebar.css"; // Import CSS file
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // setActive(item.name)
    navigate("/LoginPage");
  };

  return (
    <div className="sidebar">
      <div
        style={{
          display: "flex",
          gap: "1rem",
          padding:'1rem'
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
        <h2 className="sidebar-title">Kunal</h2>
      </div>

      <div
        className="sidebar-menu"
        style={{
          marginTop: "1rem",
        }}
      >
        <button className="menu-item" onClick={()=>{navigate('/homepage')}}>{<Home size={22} />} home</button>

        <button className="menu-item"  onClick={() => {
                navigate("/CostomerData");
              }}>
          {
            <User
              size={22}
            />
          }{" "}
          Costomers
        </button>

        <button className="menu-item">{<Settings size={22} />}Settings</button>

        <button className="menu-item" onClick={() => handleClick()}>
          {<LogOut size={22} />}Log Out
        </button>
      </div>

      <footer className="sidebar-footer">© 2025 MyApp</footer>
    </div>
  );
};

export default Sidebar;
