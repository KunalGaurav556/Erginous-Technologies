import { useState } from 'react'
import './App.css'
import GET from './Components/GET'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Components/Pages/Users'
function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/users' exact element={<Users/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
