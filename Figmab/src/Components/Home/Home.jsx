import React from "react";
import "./Home.css";
import LinearIndeterminate from "../../MUIComponents/LinearProgress";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Home = () => {
  return (
    <>
      <div className="HomeMainContainer">
        <div className="homeHeading">
          <div className="homeHeadUpper">
            <span>Hi, Adaline Horton</span>
          </div>
          <div className="homeHeadLower">
            <span>Empowering you to thrive on your path to wellness</span>
          </div>
        </div>

        <div className="homeMainDivCards">
          <div className="homeMainCardsUpper">
            <div className="homeStress">
              <div className="stressCards">
                <div className="leftStressCard">
                  <span className="stressHead">Stress and relaxation</span>{" "}
                  <br />
                  <br />
                  <span className="stressContent">
                    Here's a stress and relaxation exercise session specialally
                    design for you
                  </span>
                  <br />
                  <br />
                  <span className="stressTime">
                    <b>20</b> Minutes Exercise
                  </span>
                </div>
                <div className="rightStressCards">
                  <img
                    src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-lifestyle-and-yoga-concept-illustration-png-image_13379386.png"
                    alt=""
                    height="183px"
                    width={"120px"}
                  />
                </div>
              </div>
            </div>
            <div className="homeSitting">
              <div className="stressCards stCards">
                <div className="leftStressCard">
                  <span className="stressHead">Stress and relaxation</span>
                  <br />
                  <br />
                  <span className="stressContent">
                    Here's a stress and relaxation exercise session specialally
                    design for you
                  </span>
                  <br />
                  <br />
                  <span className="stressTime">
                    <b>20</b> Minutes Exercise
                  </span>
                </div>
                <div className="rightStressCards">
                  <img
                    src="https://png.pngtree.com/png-clipart/20231020/original/pngtree-lifestyle-and-yoga-concept-illustration-png-image_13379386.png"
                    alt=""
                    height="183px"
                    width={"120px"}
                  />
                </div>
              </div>
            </div>
            <div className="homePrograms">
              <span className="myPrograms">
                <span>My Programs</span>
                <br />
                <br />
                <div className="myProgramUpper">
                  <div className="hrsProgram">
                    <span className="hrsUpper">00</span>
                    <span className="hrsLower">All Sessions</span>
                  </div>
                  <div className="hrsProgram">
                    <span className="hrsUpper">00</span>
                    <span className="hrsLower">Completed</span>
                  </div>
                  <div className="hrsProgram">
                    <span className="hrsUpper">00</span>
                    <span className="hrsLower">Scheduled</span>
                  </div>
                </div>

                <div className="myProgramLower">
                  <span>
                    Comprehenssive Summary of your Current progress. Keep track
                    of your self care commitment and knowledge your sucesses
                  </span>
                </div>
              </span>
            </div>
          </div>

          <div className="homeMainCardsLower">
            <div className="homeLowerLeftSide">
              <div className="MainCardsUpperSection">
                <div className="upperLowerSection">
                  <div className="urgent">
                    <div className="urgentBoth">
                      <span className="urgentHeading">Urgent Support</span>
                      <span id="quick">
                        Quick acess to cisis nhotline when you need immediate
                        help
                      </span>
                      <br />
                    </div>
                    <button>Get Help Now</button>
                  </div>
                  <div className="sessions">
                    <span className="sessionCredits">SESSION CREDITS</span>
                    <div className="sessionParts">
                      <div className="sParts">
                        <span>09</span>
                        <span>Available</span>
                      </div>

                      <div className="sParts">
                        <span>06</span>
                        <span>Used</span>
                      </div>

                      <div className="sParts">
                        <span>08</span>
                        <span>Total</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lowerSectionCard">
                  <div className="trackProgress">
                    <span className="heading">Progress Tracking</span>
                    <br />
                    <br />
                    <div className="percentNumber">
                      <span className="forteen">14</span>
                      <span className="fifteen">+15%</span>
                      <br />
                      <br />
                    </div>

                    <span id="tharapy">
                      Therapy goals achieve over the last 3 months
                    </span>
                    <br />
                    <br></br>
                    <LinearIndeterminate />
                  </div>
                  <div className="trackProgress">
                    <span className="heading">Progress Tracking</span>
                    <br />
                 
                    <div className="percentNumber">
                      <span className="forteen">22</span>
                      <span className="fifteen">-30%</span>
                      <br />
                      <br />
                      <br />
                    </div>

                    <div className="therapySpan">
                      <span id="tharapy">
                       <div className="task">
                       <TaskAltIcon sx={{color:'orange',fontSize:'17px'}}/> Breathing and meditation Technique
                       </div>
                      </span>
                      
                      <span id="tharapy">
                        <div className="task">
                        <TaskAltIcon sx={{color:'orange',fontSize:'16px'}}/> Identifying sources of stress
                        </div>
                    </span>
                      
                    </div>
                  </div>
                  <div className="trackProgress">
                    <span className="heading">Therapautic Sessions</span>
                    <br />
                    <br />
                    <div className="percentNumber">
                      <span className="forteen">6</span>
                      <span className="fifteen">+5%</span>
                      <br />
                      <br />
                    </div>

                    <span id="tharapy">
                      Therapy goals achieve over the last 3 months
                    </span>
                    <br />
                    <br></br>
                    <LinearIndeterminate />
                  </div>
                </div>
              </div>
            </div>
            <div className="homeLowerRightSection">
              <div className="homeUpcomingCards">
                <div className="upcomingHeading">
                  <span>Upcoming Session</span>
                </div><br />

                <div className="calender">
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                  <div className="date">
                    <span>24</span>
                    <span>fri</span>
                  </div>
                </div>

                <div className="aditiProfileMain">
                  <div className="aditiProfile">
                    <div className="imgName">
                     <div>
                     <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg" alt="" />
                     </div>
                     <div className="name">
                      <span id="name">Aditi Mukharjee</span><br />
                      <span id="role">DMIT Counsellor</span>
                     </div>
                    </div>

                    <div className="aditiTime">
                      <span id="role">12:00 am</span><br />
                      <span id="name">Today</span>
                    </div>

                  </div>

                  <div className="aditiProfile">
                    <div className="imgName">
                     <div>
                     <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg" alt="" />
                     </div>
                     <div className="name">
                      <span id="name">Aditi Mukharjee</span><br />
                      <span id="role">DMIT Counsellor</span>
                     </div>
                    </div>

                    <div className="aditiTime">
                      <span id="role">12:00 am</span><br />
                      <span id="name">Today</span>
                    </div>

                  </div>

                  <div className="aditiProfile">
                    <div className="imgName">
                     <div>
                     <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg" alt="" />
                     </div>
                     <div className="name">
                      <span id="name">Aditi Mukharjee</span><br />
                      <span id="role">DMIT Counsellor</span>
                     </div>
                    </div>

                    <div className="aditiTime">
                      <span id="role">12:00 am</span><br />
                      <span id="name">Today</span>
                    </div>

                  </div>

                  <div className="aditiProfile">
                    <div className="imgName">
                     <div>
                     <img src="https://img.freepik.com/free-photo/portrait-expressive-young-woman_1258-48167.jpg" alt="" />
                     </div>
                     <div className="name">
                      <span id="name">Aditi Mukharjee</span><br />
                      <span id="role">DMIT Counsellor</span>
                     </div>
                    </div>

                    <div className="aditiTime">
                      <span id="role">12:00 am</span><br />
                      <span id="name">Today</span>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
