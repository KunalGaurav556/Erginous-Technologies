import { Stack, Typography } from '@mui/material'
import React from 'react'
import './QuestionSection.css'

const QuestionSection = () => {
  return (
    <>
       <Stack direction={'row'} className='mainQuestionStack'>
        <Stack>
            <Stack className='leftQuestionSide'>
                <Stack className='headingImageStack'>
                  <Typography variant='h2' className='questionHeading'>Have A Question? Check Out Our FAQ</Typography>
                  <Typography>
                    <img src="https://verselion.netlify.app/images/ai/robot.png" alt="" />
                  </Typography>
                </Stack>
            </Stack>
            <Stack></Stack>
        </Stack>


        <Stack className='rightQuestionSide'>ghjhkjhkhgjk</Stack>
       </Stack> 
    </>
  )
}

export default QuestionSection