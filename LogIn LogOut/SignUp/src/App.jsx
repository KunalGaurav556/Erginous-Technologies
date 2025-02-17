import { useState } from 'react'
import AuthForm from './Components/AuthForm'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SinUpPage from './Components/SinUpPage'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<AuthForm/>}></Route>
          <Route path='/SignUpPage' exact element={<SinUpPage/>}></Route>
          <Route path='/Home' exact element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
