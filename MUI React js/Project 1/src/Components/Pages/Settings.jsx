import React from "react";
import SideNav from "../SideNav";
import Box from '@mui/material/Box';

const Settings = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <h1>Settings</h1>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      </Box>
      </Box>
    </>
  );
};

export default Settings;
