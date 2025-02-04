import React, { useState } from 'react'
import {Stack,Alert,AlertTitle, Button} from '@mui/material'
import { ToastContainer,toast } from 'react-toastify'

const AlertMUI = () => {
    const [alert,setAlert] = useState(false)

    const handleAlert = ()=>{
        setAlert(!alert)
        setTimeout(() => {
            <Alert severity='success'>Alert</Alert>           
        }, 5000);
    }

    const handleToast =()=>{
            toast.success("Success");
    }


  return (
    <>
        <Button onClick={handleToast} variant='contained' color='secondary' >Alert</Button>
        <ToastContainer position='top-centre'/>


        <Stack spacing={4}>
            <Alert severity='success'>This is a success alert</Alert>
            <Alert severity='warning'>This is a warning alert</Alert>
            <Alert severity='info'>This is a info alert</Alert>
            <Alert severity='error'>This is a error alert</Alert>


            <Alert variant='filled' severity='success'><AlertTitle>Success</AlertTitle>This is a success alert</Alert>
            <Alert variant='filled' severity='warning'><AlertTitle>Warning</AlertTitle>This is a warning alert</Alert>
            <Alert variant='filled' severity='info'><AlertTitle>info</AlertTitle>This is a info alert</Alert>
            <Alert variant='filled' severity='error'><AlertTitle>info</AlertTitle>This is a error alert</Alert>

            <Alert variant='outlined' severity='success'>This is a success alert</Alert>
            <Alert variant='outlined' severity='warning'>This is a warning alert</Alert>
            <Alert variant='outlined' severity='info'>This is a info alert</Alert>
            <Alert variant='outlined' severity='error'>This is a error alert</Alert>

            <Button onClick={handleAlert}>Click</Button>

        </Stack>
    </>
  )
}

export default AlertMUI