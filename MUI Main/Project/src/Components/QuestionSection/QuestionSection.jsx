import { Stack, Typography } from '@mui/material'
import React from 'react'

const QuestionSection = () => {
  return (
    <>
       <Stack direction={'row'}>
        <Stack>
            <Stack>
                <Typography variant='h2'>Have A Question? Check Out Our FAQ</Typography>
                <Typography>
                    <img src="https://verselion.netlify.app/images/ai/robot.png" alt="" />
                </Typography>
            </Stack>
            <Stack></Stack>
        </Stack>


        <Stack></Stack>
       </Stack> 
    </>
  )
}

export default QuestionSection