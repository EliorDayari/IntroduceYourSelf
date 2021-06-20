import React,{useState} from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as CgIcons from "react-icons/cg";

import './NavLinks.css'

const NavLinks = () => {
    const [sideBar,setSideBar]=useState(false);

const openSideBar=()=>{
    setSideBar(true);
}
const closeSideBar=()=>{
    setSideBar(false);
}



const content=(
    <>
  <IconContext.Provider value={{ color: "#000" }}>
      

        <div className="burger-menu">
          <FaIcons.FaBars onClick={openSideBar} color="grey" />
        </div>
        <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={closeSideBar}>
            <li className="navbar-toggle">
              <div className="menu-bars">
                <AiIcons.AiOutlineClose />
              </div>
            </li>
            <li className="nav-greet-text">
           
                <li className="nav-text">Hello, Elior</li>
              
            </li>
            <li className="nav-text">
              <NavLink to="/" exact>
                <BiIcons.BiHomeAlt size="48%" />
                Home
              </NavLink>
            </li>
            <li className="nav-text">
                <NavLink to="/feed">
                <BiIcons.BiHomeAlt size="48%" />
                    Feed
                    </NavLink>

            </li>

            </ul>
        </nav>
      </IconContext.Provider>
    </>
)

    return  ReactDOM.createPortal(content,document.getElementById("side-bar-hook")) ;
}
 
export default NavLinks;
