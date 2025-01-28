import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildA from './Components/ChildA'

function App() {
const compA = "This Component is belonging from childA Component"

  return (

    <>
        <h3>Prop Drilling</h3><br />
        <ChildA value={compA}/>
    </>
  )
}

export default App
