import { useState } from 'react'
import './App.css'
import SideNav from './Components/SideNav'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Settings from './Components/Pages/Settings'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
// import Settings from './Components/Pages/Settings'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/About' exact element={<About/>}></Route>
          <Route path='/Settings' exact element={<Settings/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
