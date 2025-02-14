import React from 'react'
import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import './discoverSection.css'
import "@mdi/font/css/materialdesignicons.min.css";
import './DiscoverMedia.css'


const DiscoverSection = () => {
  return (
    <>
        <Stack className='discoverHeadingStay'>
            <Typography className='stay' variant='h3' sx={{fontWeight:'800', fontSize:'38px'}}>Stay AT The Forefront Of Technology</Typography>
            <Box className='dotBoxDiscover'>
                <Typography id='leftDotDiscover'></Typography>
                <Typography id='rightDotDiscover'></Typography>
            </Box>
        </Stack>

        {/* Card Section */}
        <Stack>
            <Stack className='discoverMainCardSection' direction={"row"}>

                <Stack className='discoverCardSectionStack1'>
                    <Card className='discoverCard1' elevation={0}>
                        <Typography className='cardShadow'></Typography>
                        <CardContent className="discoverIconContent">
                            <i id='leftChatIcon' className="mdi mdi-comment-text"></i>
                            <i id='midIconDiscoverCard' className="mdi mdi-ansible"></i>
                            <i id='rightIconTick' className="mdi mdi-shield-check-outline"></i>
                        </CardContent>
                        <CardContent  className='rCard'>
                            <Typography id='processSection' variant='h6' fontSize={"20px"} fontWeight={"800"} >Processing</Typography>
                            <Typography  id='processSection' variant='body' fontSize={"16px"}>Prepare and Collect data for analysis</Typography>
                        </CardContent>
                    
                    </Card>
                </Stack>


                <Stack direction={'row'} spacing={1} className='discoverCardSeperators'>
                    <Typography id='' className='cardLeftSideDot' ></Typography>
                    <Typography id='' className='cardLeftSideLine'></Typography>
                </Stack>



                <Stack className='discoverCardSectionStack1'>
                    <Card className='discoverCard1' elevation={0}>
                        <CardContent className="discoverIconContent">
                            <i id='leftChatIcon' className="mdi mdi-nut"></i>
                            <i id='midIconDiscoverCard' className="mdi mdi-collage"></i>
                            <i id='rightIconTick' className="mdi mdi-tooltip-image"></i>
                        </CardContent>
                        <CardContent className='rCard'>
                            <Typography id='processSection'  variant='h6' fontSize={"20px"} fontWeight={"800"} >Selection</Typography>
                            <Typography  id='processSection' variant='body' fontSize={"16px"}>Prepare and Collect data for analysis</Typography>
                        </CardContent>
                    </Card>
                </Stack>


                <Stack direction={"row"} spacing={1} className='discoverCardSeperators'>
                    <Typography id='' className='disCardLeftDot'></Typography>
                    <Typography id='' className='disCardRightLine'></Typography>
                </Stack>


                <Stack className='discoverCardSectionStack1' >
                    <Card className='discoverCard1' elevation={0}>
                        <CardContent className="discoverIconContent">
                            <i id='leftChatIcon' className="mdi mdi-hammer-screwdriver"></i>
                            <i id='midIconDiscoverCard' className="mdi mdi-cog"></i>
                            <i id='rightIconTick' className="mdi mdi-code-braces-box"></i>
                        </CardContent>
                        <CardContent className='rCard'>
                            <Typography  id='processSection' variant='h6' fontSize={"20px"} fontWeight={"800"} >Deployment</Typography>
                            <Typography  id='processSection' variant='body' fontSize={"16px"}>Prepare and Collect data for analysis</Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
        </Stack>

        
    <Stack className='communityHeading'>
        <Typography id='community' variant='h1' fontSize={"180px"} fontWeight={'800'}>COMMUNITY</Typography>
    </Stack>
    </>
  )
}

export default DiscoverSection