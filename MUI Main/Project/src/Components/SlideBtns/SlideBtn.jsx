import { Button, ButtonGroup, Stack, Typography } from '@mui/material'
import React from 'react'
import './SlideBtn.css'

const SlideBtn = () => {
  return (
    <>
        <Stack className='slideBtns'>
            <ButtonGroup className='slideBtnGrp'>
                <Button><strong>First Slide </strong><span>Interdum et malesuada fames ac ante</span></Button> <hr/>
                <Button><strong>Second Slide </strong><span>Interdum et malesuada fames ac ante</span></Button><hr/>
                <Button><strong>Third Slide </strong><span>Interdum et malesuada fames ac ante</span></Button> 
            </ButtonGroup>
        </Stack>
    </>
  )
}

export default SlideBtn