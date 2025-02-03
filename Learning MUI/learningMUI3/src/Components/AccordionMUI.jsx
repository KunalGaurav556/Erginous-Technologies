import React from 'react'
import {Accordion,AccordionDetails,AccordionSummary, Box, Typography} from '@mui/material'
import {ExpandMore} from '@mui/icons-material'
// import './Accordion.css'
import './Global.css'

const AccordionMUI = () => {
  return (
    <>
        <Box className="accordionBox">
            <Accordion className='Accordion'>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Typography>Accordian 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit aspernatur quidem, nobis similique voluptate nisi laudantium recusandae! Mollitia atque dolorem, eos delectus neque error enim quam minus nihil illum quos?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography>Lorem 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda modi in sapiente obcaecati. Atque assumenda sit harum vitae esse sed facere temporibus accusamus officiis facilis. Laudantium natus nobis qui illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography>Lorem 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda modi in sapiente obcaecati. Atque assumenda sit harum vitae esse sed facere temporibus accusamus officiis facilis. Laudantium natus nobis qui illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography>Lorem 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda modi in sapiente obcaecati. Atque assumenda sit harum vitae esse sed facere temporibus accusamus officiis facilis. Laudantium natus nobis qui illo?
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </Box>
    </>
  )
}

export default AccordionMUI