import React, { useState } from 'react'
import {Stack,Chip,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

const ChipMUI = () => {
    const [chips,setChip] = useState(['Chip 1' , 'Chip 2' , 'Chip 3'])

    const HandleDelete = (index,chip)=>{
        console.log(index)
        setChip(chips=> chips.filter((_,i)=> i!==index))
    }
  return (                          
    <>
        <Stack spacing={3} direction={"row"}>
            <Chip color='primary' variant='contained' label='Chip' avatar={<Avatar color='secondary' variant='outlined'>V</Avatar>}/>
            <Chip color='secondary' variant='outlined' label='Secondary Outlined' icon={<FaceIcon/>}/>
            <Chip color='success' label='Click' onClick={()=>{alert("Clicked")}}/>
            <Chip color='error' label='Delete' onDelete={()=>{alert("Delete")}}></Chip>

            {
                chips.map((chip,index)=>{
                   return( 
                      <Chip key={index} label={chip}  color='error' onDelete={()=>{HandleDelete(index)}}/>
                   )
                    
                })
            }
        </Stack>
    </>
  )
}

export default ChipMUI