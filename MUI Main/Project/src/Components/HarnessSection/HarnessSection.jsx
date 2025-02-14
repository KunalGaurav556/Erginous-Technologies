import { Stack, Typography } from '@mui/material'
import React from 'react'
import './HarnessSection.css'
import './HarnessMedia.css'

const HarnessSection = () => {
  return (
    <>
        <Stack className="harnessMainSection" direction={"row"}>
            <Stack className='harnessLeftSection'>
                <img src="https://res.cloudinary.com/skyrev/image/upload/v1692612281/bungalion/ai/feature1_2x_tjihji.png" alt="HarnessLogo" />
            </Stack>
            <Stack className='harnessRightSection' direction={"row"} spacing={3}>
                <Stack className='harnessContent'>
                    <Stack className='HarnessDot' direction={"row"}>
                        <Typography className='DotBlue'></Typography>
                         <Typography variant='h4' className='harnessHeading' sx={{fontWeight:'600'}}>  Harness The Power of Predictive Modeling.</Typography>
                    </Stack>
                    <Stack className='harnessContent'>
                        <Typography variant='body' id='prediveHarness'>
                        Predictive analytics to anticipate trends, <br /> behaviors, and outcomes, giving you a <br /> competitive edge.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </>
  )
}

export default HarnessSection;