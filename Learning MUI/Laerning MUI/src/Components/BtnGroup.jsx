import React from "react";
import { Button, ButtonGroup, Stack } from "@mui/material";

const BtnGroup = () => {
  return (
    <Stack spacing={4} direction="column" alignItems="flex-start">
      <ButtonGroup
        color="secondary"
        orientation="vertical"
        
      >
        <Button variant="contained" size="small">Left</Button>
        <Button variant="outlined" size="small">Centre</Button>
        <Button variant="contained" size="small">Right</Button>
      </ButtonGroup>
    </Stack>
  );
};

export default BtnGroup;
