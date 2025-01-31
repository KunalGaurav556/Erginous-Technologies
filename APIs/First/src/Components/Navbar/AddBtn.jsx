import React from 'react'
import './AddBtn.css'
import { useNavigate } from 'react-router-dom';

const AddBtn = () => {
    const navigate = useNavigate();
  return (
    <>
     <button className='btn' onClick={()=>{navigate('/postApis')}}>ADD + </button>
    </>
  )
}

export default AddBtn