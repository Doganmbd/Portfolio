import './Sidebar.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoM from '../../assets/images/mbd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <div className="side-bar">
      <Link className="logo" to="/">
        <img src={LogoM} alt="logo" />
      </Link>
      <nav>
        <NavLink
          className="home-link"
          exact="true"
          activeclassname="active"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="grey" />
        </NavLink>
        <NavLink
          className="about-link"
          exact="true"
          activeclassname="active"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="grey" />
        </NavLink>
        <NavLink
          className="contact-link"
          exact="true"
          activeclassname="active"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="grey" />
        </NavLink>
      </nav>
      SidebarIndex
    </div>
  )
}

export default Sidebar
