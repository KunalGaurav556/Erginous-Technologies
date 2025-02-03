import React, { useState } from 'react'
import {Drawer,Box, Typography} from '@mui/material'

const DrawerMUI = () => {

  const [open,setOpen] = useState(false)

  const handleClick =() =>{
    setOpen(!false)
  }
  return (
    <>
      <button onClick={handleClick}>Open Drawer</button>
      <Drawer anchor='right' open={open} onClose={()=>{setOpen(false)}}>
       <Box textAlign={"center"} p={"1rem"} width={'250px'} role='presentation'>
          <Typography variant='h6' component={"div"}>SideBar Nav</Typography>
       </Box>
      </Drawer>
    </>
  )
}

export default DrawerMUI