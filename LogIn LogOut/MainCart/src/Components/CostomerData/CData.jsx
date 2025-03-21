import './CData.css'
import Sidebar from '../SideBar/SideBar'
import React from 'react'

const CData = () => {
    const getData = JSON.parse(localStorage.getItem('addCostomerData'))
  return (
    <>
       <div className="mainCostomerDataPage">
        <div className="leftSideCostomerPage">
            <Sidebar/>
        </div>
        <div className="RightCostomerPage">
        <h2 id='cDataHead'>Costomer Data</h2>
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
        </div>
       </div>
    </>
  )
}

export default CData