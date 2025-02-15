import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import "./QuestionSection.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; 
import './QuestionMedia.css'

const QuestionSection = () => {

  const [expand,setExpand] = useState(null);

  const obj = [
    {
      Summary : "Pellentesque ac bibendum tortor?",
      Details : "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    {
      Summary : "In mi nulla,fringilla vestubulum?",
      Details : "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    {
      Summary : "Quisque lacinia purus ut linero?",
      Details : "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    {
      Summary : "Quisque ut metus sit amet augue?",
      Details : "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    },
    {
      Summary : "Pellentesque ac bibendum tortor?",
      Details : "Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor."
    }
  ]
  

  const handleAccordionExpand=(idx)=>{
    setExpand(expand === idx ? null : idx)
    setBgColor('#651FFF')
  }



  return (
    <>
      <Stack direction={"row"} className="mainQuestionStack">
        <Stack className="leftMainQuestion">
          <Stack className="leftQuestionSide">
            <Stack className="headingImageStack">
              <Typography
                variant="h2"
                className="questionHeading"
                fontSize={"46px"}
                fontWeight={"800"}
              >
                Have A Question? Check Out Our <br /> FAQ
              </Typography>
              <Box className='questionBorderbox'>
                <Typography className="QuestionBorderDot"></Typography>
                <Typography className="QuestionBorderLine"></Typography>
              </Box>
              <Typography>
                <img
                  id="leftSideRobot"
                  src="https://verselion.netlify.app/images/ai/robot.png"
                  alt=""
                />
              </Typography>
            </Stack>
          </Stack>
          <Stack></Stack>
        </Stack>

        <Stack className="rightQuestionSide">
            {
              obj.map((data,index)=>{
                return(
                  <Accordion onChange={()=>handleAccordionExpand(index)} expanded={expand===index} className="AccordionQuestion" sx={{bgcolor:expand===index? '#651FFF' : '',color:expand===index? 'white' : ''}}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon/>} sx={{fontSize:'24px',fontWeight:'600',opacity:'0.9'}} className="mAccordionSummary">{data.Summary}</AccordionSummary>
                    <AccordionDetails className="mAccordionDetails">{data.Details}</AccordionDetails>
                  </Accordion>
                )
              })
            }
        </Stack>
      </Stack>
    </>
  );
};

export default QuestionSection;
