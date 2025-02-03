import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CheckBoxMUI from './Components/CheckBox'
import SwitchMUI from './Components/SwitchMUI'
import RatiingMUI from './Components/RatiingMUI'
import AutoComplete from './Components/AutoComplete'
import BoxMUI from './Components/BoxMUI'
import PaperAndCard from './Components/PaperAndCard'
import AccordionMUI from './Components/AccordionMUI'
import DrawerMUI from './Components/DrawerMUI'
import { Avatar } from '@mui/material'
import AvatarMUI from './Components/AvatarMUI'
import BadgeMUI from './Components/BadgeMUI'
import ListMUI from './Components/ListMUI'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <CheckBoxMUI/> */}
     {/* <SwitchMUI/> */}
     {/* <RatiingMUI/> */}
     {/* <AutoComplete/> */}
     {/* <BoxMUI/> */}
     {/* <PaperAndCard/> */}
     {/* <AccordionMUI/> */}
     {/* <DrawerMUI/> */}
     {/* <AvatarMUI/> */}
     {/* <BadgeMUI/> */}
     <ListMUI/>
    </>
  )
}

export default App
