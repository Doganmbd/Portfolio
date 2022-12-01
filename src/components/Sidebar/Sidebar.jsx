import "./Sidebar.scss";

import React from 'react';
import { Link } from "react-router-dom";
import LogoM from "../../assets/images/mbd.png";

const Sidebar = () => {
  return (
    <div className = "side-bar">
      <Link className="logo" to="/">
        <img src={LogoM} alt="logo" />
       </Link>
      SidebarIndex
    </div>
  )
}

export default Sidebar