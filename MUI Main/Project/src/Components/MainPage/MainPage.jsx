import React from 'react'
import {Button, ButtonGroup, Stack, Typography} from '@mui/material'
import './MainPage.css'
import './MainMedia.css';

const MainPage = () => {
  return (
    <>
        <Stack direction={'row'} className='mainPageMainStack'>
            <Stack className='mainLeft' spacing={3}>
                <Typography variant='h1' className='nextLevelMain'>Next level of innovation with <Typography component={'span'} fontWeight={'900'}className='aiPowered'>AI-POWERED</Typography></Typography>
                <Typography className='mainPageDive' fontSize={'28px'} fontWeight={'600'} letterSpacing={'0.4px'}>Dive into the world and transform your ideas into intelligent solutions.</Typography>
               
                <Stack direction={'row'} spacing={5} className='mainpageBtns'>
                  <Button id='mainPageGetBtn'>GET STARTED</Button>
                  <Button id='mainPageSeeMoreBtn'>SEE DETAIL</Button>
                </Stack>
                 
            </Stack>
           
        </Stack>
    </>
  )
}

export default MainPage