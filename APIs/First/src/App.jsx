import { useState } from 'react'
import './App.css'
import GET from './Components/GET'
import Navbar from './Components/Navbar/Navbar'
import Post from './Components/Pages/Post'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Comments from './Components/Pages/Comments'
import Users from './Components/Pages/Users'
import Todos from './Components/Pages/Todos'
import Photos from './Components/Pages/Photos'

function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/comments' exact element={<Comments/>}></Route>
                <Route path='/album' exact element={<Comments/>}></Route>
                <Route path='/photos' exact element={<Photos/>}></Route>
                <Route path='/todos' exact element={<Todos/>}></Route>
                <Route path='/users' exact element={<Users/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
