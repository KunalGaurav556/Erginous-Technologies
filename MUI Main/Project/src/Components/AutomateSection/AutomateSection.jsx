import React from "react";
import { Stack, Typography } from "@mui/material";
import "./AutomateSection.css";

const AutomateSection = () => {
  return (
    <>
      <Stack className="harnessMainSection" direction={"row"}>
        <Stack className="harnessLeftSection">
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
        <Stack className="harnessRightSection" direction={"row"}>
          <Stack className="harnessContent">
            <Stack className="HarnessDot" direction={"row"}>
              <Typography className="DotBlue"></Typography>
              <Typography
                variant="h4"
                className="harnessHeading"
                sx={{ fontWeight: "600" }}
              >
                {" "}
                Harness The Power of Predictive Modeling.
              </Typography>
            </Stack>
            <Stack className="harnessContent">
              <Typography variant="body">
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
