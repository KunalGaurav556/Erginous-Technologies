import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
   <>
    <h3>Rendering About Page</h3>
         <button onClick={()=>{navigate('/')}}>Home</button>
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/contact')}}>Contact</button>
   </>
  )
}

export default About;