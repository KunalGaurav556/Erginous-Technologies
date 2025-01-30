import React from 'react'
import { createContext } from 'react';
import DashboardLayoutBasic from './DashboardLayoutBasic';
import Context from '../ContextAPi/Context';



export const data1 = createContext();

const Form = () => {

  const contextData = "Kunal";

  return (
    <>
    {/* <h1>Form Data</h1> */}
      <data1.Provider value={contextData}>
        {/* <Context/> */}
        <DashboardLayoutBasic/>
      </data1.Provider> 
    </>
  )
}

export default Form