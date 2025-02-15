import React from 'react'
import {Card,CardContent, Stack, Typography,Button,Box} from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory';
import './GainCardPosition.css'
import Icon from "@mdi/react";
import { mdiClockTimeEightOutline } from "@mdi/js";
import BorderComp from '../ExtraComponents/Border';
import './GainCardMedia.css'

const GainCardPosotion = () => {
  return (
    <>
        <Stack className='mainStackGainPosition' direction={"row"}>
            <Stack className='leftStackGainPosition'>
                <Stack className='leftCardMainSection' >
                    <Stack className='leftCardMainSection-left' direction={'row'}>
                    <Card className='cardMemory' sx={{border:'none',boxShadow:'none'}}>
                        <CardContent className=''>
                            <CardContent className='cardPositionMemoriIcon'>
                                <MemoryIcon className="memoryIcon" sx={{fontSize:'6.6rem', color:'blueviolet'}}/>
                            </CardContent>
                            <CardContent className='cardMemoryPositionCardContent'>
                            <Typography variant='h4'>+600</Typography>
                            <Typography variant='body' id='cardbodyVirtual'>Virtual Machine</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>

                    <Card className='cardMemory' sx={{border:'none',boxShadow:'none'}}>
                        <CardContent className='main'>
                            <CardContent className='cardPositionMemoriIcon'>
                             <Icon id="clockCard" path={mdiClockTimeEightOutline} size={5} className="clock-icon cardMemoryIcon" />
                            </CardContent>
                            <CardContent className='cardMemoryPositionCardContent'>
                                <Typography variant='h4'>+600</Typography>
                                <Typography variant='body' id='cardbodyVirtual'>Virtual Machine</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                    </Stack> 
                    <Stack className='leftCardMainSection-Right' direction={'row'}>
                    <Card className='cardMemory' sx={{border:'none',boxShadow:'none'}}>
                        <CardContent className=''>
                            <CardContent className='cardPositionMemoriIcon'>
                                <MemoryIcon className="memoryIcon" sx={{fontSize:'6.6rem', color:'blueviolet'}}/>
                                {/* <Icon id="clockCard" path={mdiClockTimeEightOutline} size={5.5} className="clock-icon cardMemoryIcon" /> */}
                            </CardContent>
                            <CardContent className='cardMemoryPositionCardContent'>
                            <Typography variant='h4'>50x</Typography>
                            <Typography variant='body' id='cardbodyVirtual'>Smarter Solution</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>

                    <Card className='cardMemory' sx={{border:'none',boxShadow:'none'}}>
                    <CardContent className='main'>  
                            <CardContent className='cardPositionMemoriIcon'>
                             <Icon id="clockCard" path={mdiClockTimeEightOutline} size={5} className="clock-icon cardMemoryIcon" />
                            </CardContent>
                            <CardContent className='cardMemoryPositionCardContent'>
                            <Typography variant='h4'>+20M</Typography>
                            <Typography variant='body' id='cardbodyVirtual'>Dev Communites</Typography>
                            </CardContent>
                        </CardContent>
                    </Card>
                    </Stack>              
                </Stack>
               
            </Stack>
            <Stack className='RightGainPosition'>
                <Stack className='gainActionUpperStack'>
                   <Stack className='gainHeadingBorderStack'>
                        <Stack>
                            <Typography className='gainHeading' variant='h3' sx={{fontWeight:'bolder',fontSize:'44px',fontFamily:"Montserrat,sans-serif"}}>Gain Actionable Insights From Your Data</Typography>
                        </Stack>
                         
                         <BorderComp/>
                   </Stack>
                        <Typography className='gainBody' variant='body' sx={{fontSize:'20px'}}>Predictive analytics to anticipate trends behaviors,and outcomes, giving you a competitive edge</Typography>
                     </Stack>
                <Stack className='gainActionLowerStack'>
                <Box className="rightGainVideo">
                    <iframe
                    id='gainYoutube'
                    width="640"
                    height="360"
                    src="https://www.youtube.com/embed/ugGOo8_ufXM"
                    title="META METAVERSE FACEBOOK 1 MINUTE INSPIRASI MOTIVASI #SHORT"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </Box>
                </Stack>
            </Stack>
        </Stack>
        <Stack className='gainFeature'>
            <Typography  id='gainFeatueHeading' fontWeight={'900'} fontSize={'235px'}>FEATURE</Typography>
        </Stack>
    </>
  )
}

export default GainCardPosotion