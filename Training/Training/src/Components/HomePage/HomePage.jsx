import React from "react";
import Sidebar from "../SideBar/SideBar";
import "./HomePage.css";
import { Paper,Stack,Typography,} from "@mui/material";

const HomePage = () => {
  return (
    <>
      <div className="mainHome">
        <div className="leftHome">
          <Sidebar />
        </div>
        <div className="rightHome">
           <div className="homeHeading">
            <h3 style={{textAlign:'center'}}>Today's Plan</h3>
           </div>

          <div className="mainTotalHome">
          <div className="totalInterviewsTodayHome">
                <h4>Today's Interview Schedule</h4>
           </div>

           <div className="totalCallTodayHome">
                <h4>Today's Total Call </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
