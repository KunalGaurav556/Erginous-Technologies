import React from 'react'
import {Button,Stack} from '@mui/material'
import { blue } from '@mui/material/colors'

const ButtonComp = () => {
  return (
    <>
       <Stack spacing={4}>
       <Stack spacing={4} direction='column'>
        <Stack spacing={3} direction='row' > 
            <Button variant='text'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outline</Button>
        </Stack>
        </Stack>

        <Stack spacing={2} direction={'row'}>
            <Button variant='contained' color='primary' sx={{width :'auto'}}>Primary</Button>
            <Button variant='contained' color='secondary'>secondary</Button>
            <Button variant='contained' color='error'>error</Button>
            <Button variant='contained' color='warnning'>warnning</Button>
            <Button variant='contained' color='info'>info</Button>
            <Button variant='contained' color='success'>success</Button>
        </Stack>

        <Stack spacing={2} direction='row' display='block'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='meduim'>Medium</Button>
            <Button variant='contained' size='large'>Large</Button>
        </Stack>
       </Stack>
    </>
  )
}

export default ButtonComp