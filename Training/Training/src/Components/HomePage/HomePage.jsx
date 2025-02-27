import React from "react";
import Sidebar from "../SideBar/SideBar";
import "./HomePage.css";
// import { Paper,Stack,Typography,} from "@mui/material";
import Open from "../../ExtraComponents/OpenBtn/Open";
import Submit from "../../ExtraComponents/SubmitBtn/Submit";

const HomePage = () => {
  return (
    <>
      <div className="mainHome">
        <div className="leftHome">
          <Sidebar />
        </div>
        <div className="rightHome">
          <div className="homeHeading">
            <div className="btnImgLogout">
              <button type="button" class="submitBtn">
                Log out
                <svg
                  fill="white"
                  viewBox="0 0 448 512"
                  height="1em"
                  class="arrow"
                >
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                </svg>
              </button>

              <img src="https://tinypng.com/images/social/website.jpg" alt="" />
            </div>
          </div>

          <div className="mainTotalHome">
            <div className="totalInterviewsTodayHome">
              <h4>Today's Scheduled Interview</h4>
              <Open />
            </div>

            <div className="totalInterviewsTodayHome">
              <h4>Today' Total Responses</h4>
              <Open />
            </div>

            <div className="totalInterviewsTodayHome">
              <h4>Today's Total Calls</h4>
              <Open />
            </div>

            <div
              style={{
                backgroundColor: "rgba(33,33,33,1)",
                width: "100%",
                color: "white",
                padding: "10px",
                fontSize: "13px",
                opacity: "0.85",
              }}
            >
              <h3>Today's Student Interview Schedule :</h3>
            </div>

            <div className="todayComingStudentList"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
