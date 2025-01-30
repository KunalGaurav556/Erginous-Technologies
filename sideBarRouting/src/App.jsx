import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AnchorTemporaryDrawer from './Components/Drawer'
import Dummy from './Components/dummy'

function App() {
  const [count, setCount] = useState(111)
  const [allData,setAllData] = useState( ['Inbox', 'Starred', 'Send email', 'Drafts'])
  


  return (
    <>
     <div style={{display:'flex'}}>
      <div style={{width:'80%',border:'2px solid red'}}> <Dummy/></div>
      <div> <AnchorTemporaryDrawer value={count} allData={allData}/></div>
     </div>
    </>
  )
}

export default App
