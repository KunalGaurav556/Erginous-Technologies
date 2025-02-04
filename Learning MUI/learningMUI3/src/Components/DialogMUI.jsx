import React, { useState } from 'react'
import {Button,Dialog,DialogActions,DialogContent,DialogTitle,DialogContentText} from '@mui/material'
import { ToastContainer,toast } from 'react-toastify'

const DialogMUI = () => {
  const [open,setOpen] =useState(false)
    const toastify =  ()=>{
      toast.success("Submitted Successfully")
    }
  return (
    <>
        <Button onClick={()=>{setOpen(true)}} variant='contained' color='primary'>Dialog</Button>
        <Dialog open={open}>
            <DialogTitle>Are you sure to submit this text</DialogTitle>
            <DialogContent>
              <DialogContentText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, quas? Maiores quam et hic molestiae excepturi unde explicabo id deleniti officia ea praesentium, incidunt, ipsum quia reprehenderit enim optio alias!</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={()=>{setOpen(false)}}>Cancel</Button>
              <Button onClick={() => { setOpen(false); toastify(); }}>Submit</Button>
            
            </DialogActions>
        </Dialog>
        <ToastContainer/>
    </>
  )
}

export default DialogMUI