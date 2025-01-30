import { useEffect, useState } from 'react'
import './App.css'
import Condtional from './Components/Condtional';

function App() {
  const [count, setCount] = useState(0);
  const [add,setAdd] = useState(0);
  const [sub,setSub] = useState(0);

  const HandleAddBtn = () =>{
    setCount(count+1);
    // console.log("Rendering")
  }

  // useEffect(()=>{
  //   HandleAddBtn();
  //   console.log("Add btn Rendered");
  // },[])

  useEffect(()=>{
    HandleSubBtn();
    HandleAddBtn();
    console.log("Components mounted and updated");
  },[])
  const HandleSubBtn = () =>{
    setCount(count-1);
  }

  return (
    <>
      <h3>LifeCycle</h3>
      <button onClick={HandleAddBtn}>Increase</button>
      <h3>{count}</h3>
      <button onClick={HandleSubBtn}>Decrease</button>
      <Condtional/>
    </>
  )
}

export default App
