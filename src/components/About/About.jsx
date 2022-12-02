import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'

import AnimatedLetters from '../AnimatedLetter/AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.scss'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')



  useEffect(() => {
   
  
    return () => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
          }, 3000)
    }
  }, [])
  

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p >
          I am a fast learner and have developed strong skills over the years through my education and research in this field. 
          </p>
          <p >
          I'm a very ambitious front-end developer
          </p>
          <p>
          I'm quiet confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </p>
          <p >
          If I had to introduce myself in one sentence, understanding, kind, technology obsessed !!! 

          </p>
          <p>
          And I would like to say: 
          </p>
          <p >
          There will be obstacles. There will be skeptics. There will be mistakes. But if you work hard, the limits will go away and if you can dream it, you can do it.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#def71c" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
    <Loader type="pacman" /> 
    </>
  )
}

export default About