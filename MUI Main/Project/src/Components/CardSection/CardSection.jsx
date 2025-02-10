import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import './CardSection.css'

const CardSection = () => {
  return (
    <Stack className='latestHeading'>
        <Stack className='latestNewsSection'>
            <Typography className='HeadingNews' sx={{fontSize:'40px',fontWeight:'800'}}>Latest News</Typography>
            <Box className='latestNewsDotLiine'>
                <Typography className='latestNewsDot'></Typography>
                <Typography className='latestNewsLine'></Typography>
            </Box>
        </Stack>
        <Stack className='latestNewsCaption'>
            <Typography fontSize={'23px'}>Read more about latest news and our special events</Typography>
           
        </Stack>
    </Stack>
  )
}

export default CardSection