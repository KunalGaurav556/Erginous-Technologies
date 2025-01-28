import React from 'react'
import ChildC from './ChildC'

const ChildB = (props) => {
  console.log(props.value)
    const compC = "Rendering data of Child C Component";
  return (
    <>
        This is ChildB Component
        <h4>
          {props.value}
        </h4>
        <ChildC value={compC}/>
    </>
  )
}

export default ChildB