import React from 'react'
import ChildB from './ChildB'

const ChildA = (props) => {
  console.log(props.value);
 const compB = "Rendering data of Child B Component data"
  return (
    <>
        this is ChildA Component <br />
        <span>Now rendering, {props.value}</span>
        <h4>Passing Data in Child B Component through ChildA Components</h4>
        <ChildB value={compB}/> 
    </>
  )
}

export default ChildA