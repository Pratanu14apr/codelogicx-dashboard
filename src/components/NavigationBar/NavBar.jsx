import React, { useState } from 'react'
import './NavBar.css'
import Logo from "./Logo.png"
import { MdKeyboardArrowDown, MdMenu } from "react-icons/md";
function NavBar() {
  //   const [showMenu, setShowMenu] = useState(false);

  //   const toggleMenu = () => {
  //     setShowMenu(!showMenu);
  //   };
  return (
    <div className='navBarSection'>
      <div className='logo'>
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <div className='menu'>
        <ul>
          <li>
            <a href="">Technologies</a>
            <MdKeyboardArrowDown color='#265169' />
          </li>
          <li>
            <a href="">Service</a>
            <MdKeyboardArrowDown color='#265169' />
          </li>
          <li>
            <a href="">Domain</a>
            <MdKeyboardArrowDown color='#265169' />
          </li>
          <li>
            <a href="">About</a>
            <MdKeyboardArrowDown color='#265169' />
          </li>
        </ul>
      </div>

      {/* <div className='menuIcon' onClick={toggleMenu}>
        <MdMenu color='#265169' size={24} />
      </div> */}
      <div className='contactBtn'>
        <button className='btn'>
          Contact us
        </button>
      </div>

    </div>
  )
}

export default NavBar
