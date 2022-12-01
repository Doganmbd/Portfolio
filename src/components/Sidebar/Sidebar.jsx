import './Sidebar.scss'

import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoM from '../../assets/images/mbd.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub

} from '@fortawesome/free-brands-svg-icons'


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

      <ul>
        <li>
          <a
            href="https://github.com/Doganmbd"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="github-link"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mustafabilaldogan/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin} 
              color="#4d4d4e"
              className="linkedin-icon"
              
            />
          </a>
        </li>
        

      </ul>
       
    </div>
  )
}

export default Sidebar
