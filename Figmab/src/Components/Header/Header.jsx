import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Header.css";

import BasicMenu from "../../MUIComponents/BasicMenu";

const Header = () => {
  return (
    <>
      <div className="headerContainer">
        <div className="headRight">
          <div className="mainHeadNoti">
            <div id="noti">
              <NotificationsNoneIcon/>
            </div>

            <div id="noti">
              {" "}
              <PersonOutlineIcon />
            </div>
          </div>
          <BasicMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
