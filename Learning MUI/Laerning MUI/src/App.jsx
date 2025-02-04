import { useState } from 'react';
import MyTypographyComponent from './Components/Typography';
import ButtonComp from './Components/Buttom';
import IconsMUI from './Components/IconsMUI';
import BtnGroup from './Components/BtnGroup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Learning MUI</h1>
      {/* <MyTypographyComponent /> */}
      <ButtonComp/>
      <IconsMUI/>
      {/* <BtnGroup/>npm */}
    </>
  );
}

export default App;
