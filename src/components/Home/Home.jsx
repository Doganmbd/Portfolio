import React from 'react'
import { Link } from 'react-router-dom';
import mpng from "../../assets/images/m.png"
import "./Home.scss"

const Home = () => {
  return (
    <div>
        <div className="container home-page">
        <div className="text-zone">
            <h1>Hi, <br/>  I'm   <img src={mpng} alt="m" />ustafa Bilal Doğan  
            
            </h1>
            <h2>Frontend Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Home