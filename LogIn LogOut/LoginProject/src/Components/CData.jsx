import React, { useEffect, useState } from 'react'
import './CData.css'

const CData = () => {
    const getData = JSON.parse(localStorage.getItem('addCostomerData'))

  return (
    <>
        <h2>Costomer Data</h2>
        <div className="CDataContainer">
            {
                getData.map((data,index)=>{
                   return(
                        <div className="mainCData" key={index}>
                            <table>
                                <thead>
                                    <tr>
                                        <td>Name</td>
                                        <td>Number</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{data.name}</td>
                                        <td>{data.number}</td>
                                    </tr>
                                </tbody>
                            </table>
                            
                        </div>
                   )
                })
            }
        </div>
    </>
  )
}

export default CData