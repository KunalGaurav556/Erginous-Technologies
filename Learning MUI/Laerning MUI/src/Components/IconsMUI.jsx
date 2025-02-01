import React from "react";
// import ButtonComp from './Buttom'
import { Button, Stack, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import BtnGroup from "./BtnGroup";
import ToggleBtnComp from "./ToggleBtnComp";
import TextFieldComp from "./TextFieldComp";
import SelectMUI from "./SelectMUI";



const IconsMUI = () => {
  return (
    <>
      <Stack spacing={4}>
        <Stack spacing={4} direction="row">
          <Button variant="contained" size="small" startIcon={<SendIcon />}>
            Send
          </Button>
          <Button variant="contained" size="small" endIcon={<SendIcon />}>
            Send
          </Button>

          <IconButton color="success">
            <SendIcon />
          </IconButton>
        </Stack>

        <BtnGroup/>

        <TextFieldComp/>
    

        <ToggleBtnComp/>

        <SelectMUI/>

      </Stack>
    </>
  );
};

export default IconsMUI;
