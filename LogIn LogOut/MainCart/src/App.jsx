import { useState } from 'react'
import './App.css'
import React from 'react'
import Sidebar from './Components/SideBar/SideBar'
import HomePage from './Components/HomePage/HomePage'
import SignUp from './Components/LogInPage/SignUp'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LogInPage from './Components/LogInPage/LogInPage'
import CData from './Components/CostomerData/CData'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignUp/>}></Route>
          <Route path='/LoginPage' exact element={<LogInPage/>}></Route>
          <Route path='/SignUpPage' exact element={<SignUp/>}></Route>
          <Route path='/homepage' exact element={<HomePage/>}></Route>
          <Route path='/CostomerData' exact element={<CData/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
