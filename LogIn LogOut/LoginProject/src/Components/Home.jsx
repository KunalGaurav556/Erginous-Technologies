import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom'; 
import DashBoard from './DashBoard';
const Home = () => {
  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);


  return (
    <>
      {
        user ? (
          <p>You are not logged in. Please log in first.</p> 
        ) : (
            <div className="container">
              <div className="leftSidebar">
                <div className="profile">
                  <h4>Kunal</h4>
                </div>
                <div className="Sidelist">
                  <ul>
                    <li>Create new Account</li>
                    <li>Home</li>
                    <li>Orders</li>
                    <li>Add to cart</li>
                    <li onClick={()=>{navigate('/')}}>Log Out</li>
                  </ul>
                </div>
              </div>
  
              <div className="RightSideDashBoard">
                    <DashBoard/>
              </div>
            </div>
          ) 
      }
    </>
  );
}

export default Home;
