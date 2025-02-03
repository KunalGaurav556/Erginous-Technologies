import React, { useState } from 'react'
import { Badge, Button, Stack } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const BadgeMUI = () => {
    const [count,setCount] = useState(0)

  return (
    <>
        <Stack spacing={4} direction={"row"}>
            <Badge badgeContent={count} color='primary'>
                <MailIcon/>
            </Badge>

            <Badge badgeContent={count} variant='contained' color='secondary'>
                <MailIcon/>
            </Badge>
        </Stack>

        <Button onClick={()=>{setCount(count+1)}}>Left</Button>
        <Button>Right</Button>      
    </>
  )
}

export default BadgeMUI