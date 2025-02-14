import { Stack, Typography } from '@mui/material'
import React from 'react'
import './GainAction.css'
import './GainMedia.css'

const GainAction = () => {
  return (
    <>
       <Stack className='gainMain'>
         <Stack className='gainActionMain' direction={"row"}>
            <Stack className='gainActionLeft'>
               <Stack className='gainActionUpperContent' direction={"row"}>      
                 <Typography variant='h2' className='gainActionTitlee' sx={{fontSize:'32px',fontWeight:'600',}}>Gain Actionable Insights From Your Data</Typography>
                 <Stack className='dotGain'>
                    <Typography ></Typography>
                 </Stack>
               </Stack>
               <Stack className='gainActionUpperContent'>
                <Typography className='dataInsight' variant='body' sx={{fontSize:'20px',color:'#000000DE'}}>Data Insights will enabling you to make informed decisions and drive impactful results</Typography>
               </Stack>
            </Stack>
            <Stack className='gainActionRight'>
              <img id='roundbg' src="https://res.cloudinary.com/skyrev/image/upload/v1692612282/bungalion/ai/parallax_zqaizh.png" alt="" />
              <img id='roundImg' src="https://res.cloudinary.com/skyrev/image/upload/v1692612281/bungalion/ai/feature2_2x_ztsr7p.png" alt="" />
              
            </Stack>
        </Stack>
       </Stack>
    </>
  )
}

export default GainAction