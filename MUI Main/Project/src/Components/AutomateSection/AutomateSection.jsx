import React from "react";
import { Stack, Typography } from "@mui/material";
import "./AutomateSection.css";
import './AutomateMedia.css'

const AutomateSection = () => {
  return (
    <>
      <Stack className="harnessMainSection autoMain" direction={"row"}>
        <Stack className="harnessLeftSection automateImg">
          <img
            src="https://res.cloudinary.com/skyrev/image/upload/v1692612282/bungalion/ai/feature3_2x_idh2mq.png"
            alt="HarnessLogo"
            id="automateImg"
          />
          <img
            id="bookBackground"
            src="https://res.cloudinary.com/skyrev/image/upload/v1692612282/bungalion/ai/parallax_zqaizh.png"
            alt=""
          />
        </Stack>
        <Stack className="harnessRightSection autoRight" direction={"row"}>
          <Stack className="harnessContent autoContent">
            <Stack className="HarnessDot autoHead" direction={"row"}>
              <Typography className="DotBlue autoDot"></Typography>
              <Typography
                variant="h4"
                className="harnessHeading"
                sx={{ fontWeight: "600" }}>
                {" "}
                Automate repetitive tasks
              </Typography>
            </Stack>
            <Stack className="harnessContent">
              <Typography id='predictive' variant="body">
                Predictive analytics to anticipate trends, <br /> behaviors, and
                outcomes, giving you a <br /> competitive edge.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="discoverSection">
        <Typography
          className="discoverContent"
          fontSize={"200px"}
          fontWeight={"700"}
        >
          DISCOVER
        </Typography>
      </Stack>
    </>
  );
};

export default AutomateSection;
