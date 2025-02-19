import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import DashBoard from "./DashBoard";
import AddCostomer from "./AddCostomer";
import SideBar from "./SideBar";
const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  return (
    <>
      {user ? (
        <p>You are not logged in. Please log in first.</p>
      ) : (
        <div className="container">
            <SideBar/>

          <div className="RightSideDashBoard">
            <DashBoard />
          </div>
        </div>
      )}

       
    </>
  );
};

export default Home;
