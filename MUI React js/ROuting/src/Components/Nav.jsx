import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Error from './Error'


const Nav = () => {
  return (
    <>
       <h3>Nav Page</h3>
       
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>} ></Route>
            <Route path='/bout' exact element={<About/>} ></Route>
            <Route path='/contact' exact element={<Contact/>}></Route>
            <Route path='*' errorElement={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default Nav