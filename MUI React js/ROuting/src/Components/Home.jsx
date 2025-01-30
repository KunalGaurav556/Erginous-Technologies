import { ContentPasteGoTwoTone } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
        <h3>Rendering Home Page</h3>
        <button onClick={()=>{navigate('/')}}>Home</button>
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/contact')}}>Contact</button>
    </>
  )
}

export default Home