import React from 'react'
import Sidebar from '../SideBar/SideBar'
import './HomePage.css'
import DashBoard from '../DashBoard/DashBoard'

const HomePage = () => {
  return (
    <>
        <div>
            <div className="sideBar">
                <Sidebar/>
            </div>
            <div className='homeSectioArea'>
                <DashBoard/>
            </div>
        </div>
    </>
  )
}

export default HomePage