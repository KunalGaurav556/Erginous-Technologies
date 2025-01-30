import { useState } from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import './App.css'
import Nav from './Components/Nav'
// import { Home } from '@mui/icons-material'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Error from './Components/Error'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Home/>} ></Route>
            <Route path='/about' exact element={<About/>} ></Route>
            <Route path='/contact' exact element={<Contact/>}></Route>
            <Route path='*' element={<Error/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
