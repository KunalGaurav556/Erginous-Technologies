import React from "react";
import SideNav from "../SideNav";
import Box from '@mui/material/Box';

const About = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <h1>About</h1>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
      </Box>
    </>
  );
};

export default About;
