import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import MainPage from './Components/MainPage/MainPage'
import SlideBtn from './Components/SlideBtns/SlideBtn'
import GainCardPosotion from './Components/GainCardPosition/GainCardPosotion'
import Feature from './Components/Intelligent/Feature'
import HarnessSection from './Components/HarnessSection/HarnessSection'
import GainAction from './Components/GainAction/GainAction'
import AutomateSection from './Components/AutomateSection/AutomateSection'
import DiscoverSection from './Components/DiscoverSection/DiscoverSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <MainPage/>
      <SlideBtn/>
      <GainCardPosotion/>
      <Feature/>
      <HarnessSection/>
      <GainAction/>
      <AutomateSection/>
      <DiscoverSection/>
    </>
  )
}

export default App
