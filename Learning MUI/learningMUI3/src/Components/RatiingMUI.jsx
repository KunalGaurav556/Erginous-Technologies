import React from 'react'
import {Stack,Rating} from '@mui/material'
import { useState } from 'react'

const RatiingMUI = () => {
    const [rating,setRating] = useState(0);

    const handleRating = (e) =>{
        setRating(e.target.value);
    }
    console.log(rating)
  return (
   <>
    Learning Rating Components
    <Stack>
        <Rating value={rating} onChange={handleRating}/>
        {
            <h2>{rating}</h2>
        }
    </Stack>
   </>
  )
}

export default RatiingMUI