import React from 'react'
import {Button, ButtonGroup, Stack, Typography} from '@mui/material'
import './MainPage.css'

const MainPage = () => {
  return (
    <>
        <Stack direction={'row'} className='mainPageMainStack'>
            <Stack className='mainLeft'>
                <Typography variant='h1'>Next level of innovation with <Typography component="span">AI-POWERED</Typography></Typography>
                <Typography className='mainPageDive' variant='h5'>Dive into the world and transform your ideas into intelligent solutions.</Typography>
               
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