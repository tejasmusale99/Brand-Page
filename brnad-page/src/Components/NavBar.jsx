import React from 'react'
import logo from "../images/brand_logo.png"
const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
        <div className='logo'>
            <img src={logo} alt="logo" />
        </div>
        <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
        <button className='nav_btn'>Login</button>
      </nav>
    </div>
  )
}

export default NavBar
