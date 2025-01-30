import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dummy from "./Dummy";
import DashboardLayoutBasic from "./Components/DashboardLayoutBasic";
import Form from "./Components/Form";
import Context from "./ContextAPi/Context";

function App() {
  const [count, setCount] = useState(0);

  return <>
  <Form/> 
  </>;
}

export default App;
