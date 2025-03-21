import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainHome from './Components/MainHome/MainHome'
import Video from './Components/Video/Video'

function App() {

  return (
    <>
  

      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<MainHome/>}></Route>
          <Route path='/video' exact element={<Video/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
