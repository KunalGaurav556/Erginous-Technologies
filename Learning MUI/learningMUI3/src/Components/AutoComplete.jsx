import React from 'react'
import {Stack,TextField,Autocomplete,Box} from '@mui/material'
import { useState } from 'react'

const AutoComplete = () => {
    const skill = ['HTML' , 'CSS' , 'JavaScript' , 'React' , 'Nextjs' , 'Nodejs' , 'Express js']
    const [value,setValue] = useState("");

    const handleChange = (e,newValue) =>{
        setValue(newValue)
    }
    console.log(value)

  return (
    <>
        <Stack width={'450px'}> 
            <Autocomplete value={value}  onChange={handleChange} options={skill} renderInput={(param)=><TextField  {...param} label='Skills'></TextField> }></Autocomplete>
        </Stack>
    </>
  )
}

export default AutoComplete