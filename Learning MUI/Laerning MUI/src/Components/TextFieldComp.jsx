import React from 'react'
import {Stack,TextField} from '@mui/material'

const TextFieldComp = () => {
  return (
    <Stack spacing={4} >
        <Stack direction ='row' spacing={2}>
            <TextField label='Name' variant='outlined'></TextField>
            <TextField label='Name' variant='filled'></TextField>
            <TextField label='Name' variant='standard'></TextField>
        </Stack>

        <Stack direction ='row' spacing={2}>
            <TextField label='Secondary' size='small' color='secondary' variant='outlined'></TextField>
            <TextField label='Name'  variant='filled'></TextField>
            <TextField label='Name' variant='standard'></TextField>
        </Stack>

        
        <Stack direction ='row' spacing={2}>
           <TextField label='Form Input' required></TextField>
           <TextField label='Form Input' helperText="Don't Share Your Password"></TextField>
        </Stack>
    </Stack>
  )
}

export default TextFieldComp