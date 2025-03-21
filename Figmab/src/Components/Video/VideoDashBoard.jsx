import React from 'react'
import WorkIcon from '@mui/icons-material/Work';
import { CalendarMonth, RemoveRedEye,  } from '@mui/icons-material';
import AddchartIcon from '@mui/icons-material/Addchart';

const VideoDashBoard = () => {
  return (
    <>
        <div className="VideomainContainer">
            <div className="leftVideo">
                <button><span><WorkIcon/></span>Service Selection</button>
                <button><span><CalendarMonth/></span>Date and Time</button>
                <button><span><AddchartIcon/></span>Your Information</button>
                <button><span><RemoveRedEye/></span>Booking Recap</button>                
                <button><span><RemoveRedEye/></span>Payment</button>                

            </div>
            <div className="rightVideo">
                
            </div>
        </div>
    </>
  )
}

export default VideoDashBoard