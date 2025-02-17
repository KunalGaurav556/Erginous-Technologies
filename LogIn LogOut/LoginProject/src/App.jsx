import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import SignUp from './Components/SignUp'
import Home from './Components/Home'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<LoginPage/>}></Route>
            <Route path='/SignUp' exact element={<SignUp/>}></Route>
            <Route path='/home' exact element={<Home/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
