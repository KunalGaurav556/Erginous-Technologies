import React from 'react';
import CottageIcon from '@mui/icons-material/Cottage';
import VideocamIcon from '@mui/icons-material/Videocam';
import WidgetsIcon from '@mui/icons-material/Widgets';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScheduleIcon from '@mui/icons-material/Schedule';
import './SideBar.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/video');
  };

  return (
    <div className="sideBarContainer">
      <div className="sideBardContent">
        <CottageIcon sx={{ fontSize: '30px', color: 'orange' }} />
        <VideocamIcon sx={{ fontSize: '30px' }} onClick={handleNavigate} />
        <WidgetsIcon sx={{ fontSize: '30px' }} />
        <FavoriteBorderIcon sx={{ fontSize: '30px' }} />
        <ScheduleIcon sx={{ fontSize: '30px' }} />
      </div>
    </div>
  );
};

export default SideBar;
