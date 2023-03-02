import "./NavBar.css";
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "../SideBarData";
import { IconContext } from 'react-icons';

export default function NavBar () {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);
  return (
    <>
    <IconContext.Provider value={{color: "#fff"}}>
      <div className="navbar">
        <Link to="#" className='menu-bars' />
          <FaIcons.FaBars onClick={showSideBar} />
      </div>
      <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSideBar}>
          <li className="close"> Exit Out
            <Link to="#" className="menu-bars" /> 
              <AiIcons.AiOutlineClose />
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.icon }&nbsp;&nbsp;&nbsp;{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  )
}