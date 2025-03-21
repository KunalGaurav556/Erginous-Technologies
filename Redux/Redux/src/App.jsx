import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeContainer from './Container/HomeContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HomeContainer/>
    </>
  )
}

export default App
