import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './Components/LogInPage/SignUp'
import LoginPage from './Components/LogInPage/LogInPage'
import Sidebar from './Components/SideBar/SideBar'
import HomePage from './Components/HomePage/HomePage'
import Student from './Components/StudentPage/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<SignUp/>}></Route>
          <Route path='/loginPage' exact element={<LoginPage/>}></Route>
          <Route path='/SignUpPage' exact element={<SignUp/>}></Route>
          <Route path='/homePage' exact element={<HomePage/>}></Route>
          <Route path='/studentPage' exact element={<Student/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
