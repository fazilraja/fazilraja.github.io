import "./index.scss"
import AnimatedLetters from '../AnimatedLetters'
import { useState } from "react"
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Loader from "react-loaders"

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    setTimeout(() => {setLetterClass('text-animate-hover')}, 3000)

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e' ]}
                    idx={15} 
                    />
                </h1>
                <p>
                    Hi! I am Fazil, a Computer Science Masters Student that loves learning and challenging myself. 
                </p>
                <p>
                    My current interests are Full Stack Development, Cyber Security with a touch of AI. I am currently looking for
                    full time opportunites
                </p>
                <p>
                    SOMETHING
                </p>
            </div>
            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faAngular} color="#DD0031" />
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