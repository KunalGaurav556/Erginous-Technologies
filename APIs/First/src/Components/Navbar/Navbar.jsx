import React from 'react'
import './Navbar.Modular.css'
import { useNavigate } from 'react-router-dom';
import AddBtn from './AddBtn';

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <>
        <div className="mainNav">
            <ul>
                <li onClick={()=>{navigate('/')}}>Post</li>
                <li onClick={()=>{navigate('/comments')}}>Comments</li>
                <li onClick={()=>{navigate('/album')}}>Albums</li>
                <li onClick={()=>{navigate('/photos')}}>Photos</li>
                <li onClick={()=>{navigate('/todos')}}>Todos</li>
                <li onClick={()=>{navigate('/users')}}>Users</li>
                <AddBtn/>
            </ul>
        </div>  
    </>
  )
}

export default Navbar