import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Home'
import Comments from '../Pages/Comments'

const Routing = () => {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='./comments' element={<Comment/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Routing