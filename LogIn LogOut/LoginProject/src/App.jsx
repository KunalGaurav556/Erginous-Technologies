import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import CData from './Components/CData'
import OrderHistory from './Components/OrderHistory'


function App() {
  
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<LoginPage/>}></Route>
            <Route path='/SignUp' exact element={<SignUp/>}></Route>
            <Route path='/home' exact element={<Home/>}></Route>
            <Route path='/ohistory' exact element={<OrderHistory/>}></Route>
            <Route path='/cdata' exact element={<CData/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
