import React, { useState } from 'react'
import {Stack,Box,TextField,MenuItem} from '@mui/material'

const SelectMUI = () => {
    const [countary,setCountary] = useState("");

    const handleChange = (e)=>{
        setCountary(e.target.value);
    }
    console.log(countary)

  return (
    <>
       <Stack spacing={3} direction={'row'} width={'250px'}>
            <TextField  onChange={handleChange} label='Select Countary' select fullWidth value={countary}>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='Pak'>Pakistan</MenuItem>
                <MenuItem value='AUS'>Australia</MenuItem>
                <MenuItem value='Ban'>Banladesh</MenuItem>
            </TextField>
       </Stack>
    </>
  )
}

export default SelectMUI