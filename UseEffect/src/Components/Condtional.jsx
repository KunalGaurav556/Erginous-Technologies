import React, { useState } from 'react'

const Condtional = () => {
    const [cd,setCd] = useState(0);

    const ConditionCheck = ()=>{
        setCd(cd+1);
    }

  return (
    <>
        <h3>Condtional Rendering {cd}</h3>
        <button onClick={ConditionCheck}>Add to Check</button>
        {
           cd === 0 ? <p>True Value</p> : <p>False Value</p>
        }
    </>
  )
}

export default Condtional