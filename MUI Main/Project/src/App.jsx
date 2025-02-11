import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LogInPage from "./Components/LogInPage/LogInPage";
import Home from "./Components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/LogInPage" exact element={<LogInPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
