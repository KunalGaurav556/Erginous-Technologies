import React from 'react'
import { useContext } from 'react';
import InputData from '../Components/InputData';
import { data1 } from '../Components/Form';

const Context = () => {
    const Context = useContext(data1);

  return (
    <>
       <h1>{Context}</h1>
    </>
  )
}

export default Context