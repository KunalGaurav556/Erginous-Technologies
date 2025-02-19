import React from "react";
import {useNavigate} from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="leftSidebar">
          <div className="profile">
            <img
              id="img"
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt=""
            />
            <h4>Kunal</h4>
          </div>
          <div className="Sidelist">
            <ul>
              <li onClick={() => navigate("/SignUp")}>Create new Account</li>
              <li onClick={()=> alert('You are on home page now')}>Home</li>
              <li onClick={() => navigate("/ohistory")}>Order history</li>
              <li onClick={() => navigate("/cdata")}>Costomer Data</li>
              <li onClick={() => navigate("/")}>Log Out</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
