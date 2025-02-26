import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
     <header>
      <nav>
        <div className="leftNavSection">
          <img src="https://erginous.com/assets/images/logo.png" alt="" />
        </div>
        <div className="midNavSection">
          <ul>
            <li>Home</li>
            <li>Students</li>
            <li>Cources</li>
            <li>About</li>
          </ul>
        </div>
        <div className="rightNavSection">
          <h5>logout</h5>
        </div>
      </nav>
     </header>
    </>
  )
}

export default Navbar;