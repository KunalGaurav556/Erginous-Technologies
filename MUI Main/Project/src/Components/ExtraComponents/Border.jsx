import React from 'react'
import './Border.css'
import {Stack} from '@mui/material'
const BorderComp = () => {
  return (
    <>
        <Stack className='gainBorderMain' direction={"row"}>
            <Stack className='gainBorderLeft'></Stack>
            <Stack className='gainBorderRight'></Stack>
        </Stack>
    </>
  )
}

export default BorderComp