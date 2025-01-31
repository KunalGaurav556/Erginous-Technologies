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
import Albums from './Components/Pages/Albums'
import PostAPI from './PostDataAPI/PostAPI'
function App() {

  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Home/>}></Route>
                <Route path='/comments' exact element={<Comments/>}></Route>
                <Route path='/album' exact element={<Albums/>}></Route>
                <Route path='/photos' exact element={<Photos/>}></Route>
                <Route path='/todos' exact element={<Todos/>}></Route>
                <Route path='/users' exact element={<Users/>}></Route>
                <Route path='/postApis' exact element={<PostAPI/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
