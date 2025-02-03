import React from 'react'
import {Box} from '@mui/material'

const BoxMUI = () => {
  return (
    <>
        <Box sx={{
            bgcolor : 'secondary.main',
            m:'0',
            p:'0',
            padding:'10px',
            color:'Yellow',
            '&:hover':{
                bgcolor:'black'
            }

        }}>
            Hello There,
        </Box>
    </>
  )
}

export default BoxMUI