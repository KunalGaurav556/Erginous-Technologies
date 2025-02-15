import React from "react";
import "./Join.css";
import { Button, Stack, Typography } from "@mui/material";
import './JoinMedia.css'

const Join = () => {
  return (
    <>
      <Stack className="joinMainSection">
      <Stack className="joinUpperCap"></Stack>
        <Stack className="mainJoinContentSection">
          <Stack className="contentSectionJoin">
            <Typography variant="h3" className="joinBody" fontSize={'48px'} fontWeight={'800'}>
              Join us on this exciting journey!
            </Typography>
            <Typography fontWeight={400} className="unlockJoin" fontSize={'22px'}>
              Unlock the potential of AI and drive innovation for your business.
            </Typography>
          </Stack>
          <Stack direction={'row'} className="BtnSection">
            <Button sx={{width:'150px',bgcolor:'black',color:'white',borderRadius:'26px',fontWeight:'600',paddingTop:'9px',paddingBottom:'9px'}} >GET STARTED</Button>

            <Button className="btnDetail" sx={{width:'150px',bgcolor:'transparent',color:'black',borderRadius:'26px',fontWeight:'600',paddingTop:'9px',paddingBottom:'9px',border:'1px solid '}} >SEE DETAIL</Button>
          </Stack>
          <Stack className="imgStack">
            <img width={'90%'} src="https://verselion.netlify.app/images/ai/community-full.png" alt="" />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Join;
