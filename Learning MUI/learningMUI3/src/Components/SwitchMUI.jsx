import React from 'react'
import {FormControlLabel,Box, Switch,Button,ButtonGroup,Stack} from '@mui/material'
import { useState } from 'react'

const SwitchMUI = () => {
    const [swith , setSwitch] = useState(false);

    const handleChange =()=>{
        setSwitch(!swith)
        console.log(swith)
    }

  return (
    <>
        <Box>
            <FormControlLabel control={<Switch color='secondary' onChange={handleChange}/>} label='Disable the Buttons'>
                   
            </FormControlLabel> <br /><br />

            <Stack spacing={3} direction='column' alignItems='flex-start' >
                   
                        <Button disabled={swith} variant='contained' color='success'>Left</Button>
                        <Button disabled={(!swith)}  variant='contained' color='warning'>Right</Button>
                        <Button disabled={swith} variant='contained' color='info'>Up</Button>
                        <Button disabled={(!swith)} variant='contained' color='error'>Down</Button>
                     
            </Stack>
        </Box>
    </>
  )
}

export default SwitchMUI