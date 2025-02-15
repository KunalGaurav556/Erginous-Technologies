import { Accordion, AccordionDetails, AccordionSummary, Autocomplete, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import "./FooterSection.css";
import { StayCurrentLandscape } from "@mui/icons-material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageSelector from "../ExtraComponents/OptionLanguage/OptionLanguage";
import './FooterMedia.css';
import { ExpandMore } from "@mui/icons-material";

const FooterSection = () => {
  return (
    <>
      <Stack className="mainFooter" direction={"row"} spacing={3}>
        <Stack className="footerAwrora" spacing={2}>
          <Stack className="imgSectionFooter" direction={"row"} spacing={1}>
            <img
              src="https://verselion.netlify.app/_next/static/images/logo-verselion-53c3f39c69e67bfb482ee97245f61e7f.png"
              alt=""
            />
            <Typography sx={{ fontSize: "1.25rem", fontWeight: "800" }}>
              Awrora
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
              Dive into the world and transform your ideas into intelligent
              solutions.
            </Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
              @Aworora 2024
            </Typography>
          </Stack>
        </Stack>

        <Stack className="companySectionFooter" spacing={2.2}>
          <Stack>
            <Typography
              className="footerHeading"
              fontWeight={"800"}
              fontSize={"18px"}
              color="rgb(49,27,146)"
            >
              Company
            </Typography>
          </Stack>
          <Stack className="companyFooterItems" spacing={1.2} sx={{opacity:'0.7'}}>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
              id='hoverEffect'
            >
              Team
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              History
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Contact us
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Locations
            </Typography>
          </Stack>
        </Stack>

        <Stack className="ResourcesFooterSection" spacing={2.2}>
          <Stack>
            <Typography
              className="footerHeading"
              fontWeight={"800"}
              fontSize={"18px"}
              color="rgb(49,27,146)"
            >
              Resources
            </Typography>
          </Stack>
          <Stack spacing={1.2} sx={{opacity:'0.7'}}>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Reources
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Rosources name
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Another resources
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Final resources
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={4} className="legalSectionFooter">
          <Stack>
            <Typography
              className="footerHeading"
              fontWeight={"800"}
              fontSize={"18px"}
              color="rgb(49,27,146)"

            >
              Legal
            </Typography>
          </Stack>
          <Stack spacing={1.2} sx={{opacity:'0.7'}}>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
                id='hoverEffect'
              color="rgba(0,0,0,0.87"
            >
              Privacy Policy
            </Typography>
            <Typography
              fontSize={"1rem"}
              fontWeight={"400"}
              color="rgba(0,0,0,0.87"
                id='hoverEffect'
            >
              Terms of use
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} className="iconSectionFooter">
          <Stack className="iconSection" direction={"row"} spacing={3}>
            <TwitterIcon id='iconFooter' />
            <FacebookIcon id='iconFooter' />
            <InstagramIcon id='iconFooter'/>
            <LinkedInIcon id='iconFooter'/>
          </Stack>
          <Stack className="languageSelector">
            <LanguageSelector />
          </Stack>
        </Stack>
      </Stack>


      {/* Media Query  */}
      <Stack className="mMediaMainFooter">
        <Stack className="upperStack">
            <img src="https://verselion.netlify.app/_next/static/images/logo-verselion-53c3f39c69e67bfb482ee97245f61e7f.png" alt="" />
            <Typography className="mFooterAwora">Awrora</Typography>
        </Stack>

        <Stack className="diveMediaStack">
          <Typography className="diveMediaFooterSection">Dive into the world and transform your ideas into intelligent solutions.</Typography>
        </Stack>

        <Stack className="mAccordinFooter">
          
        <Accordion className="mAccordionFooter">
            <AccordionSummary className="mAccordionSummary" expandIcon={<ExpandMore/>}>Company</AccordionSummary>
            <AccordionDetails className="mAccordionDetails">
              <li>Team</li>
              <li>Contact us</li>
              <li>History</li>
              <li>Locations</li>
            </AccordionDetails>
          </Accordion>


          <Accordion className="mAccordionFooter">
            <AccordionSummary className="mAccordionSummary"  expandIcon={<ExpandMore/>}>Resources</AccordionSummary>
            <AccordionDetails className="mAccordionDetails">
              <li>Resources</li>
              <li>Resources Name</li>
              <li>Another Resources</li>
              <li>Finaal Resource</li>
            </AccordionDetails>
          </Accordion>


          <Accordion className="mAccordionFooter">
            <AccordionSummary className="mAccordionSummary"  expandIcon={<ExpandMore/>}>Legal</AccordionSummary>
            <AccordionDetails className="mAccordionDetails">
              <li>Privacy Policy</li>
              <li>Terms and Conditions</li>
            </AccordionDetails>
          </Accordion>

        </Stack>

      </Stack>
    </>
  );
};

export default FooterSection;
