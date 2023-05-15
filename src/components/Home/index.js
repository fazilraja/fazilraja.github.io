import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import "./index.scss"
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {

    //set the letter class with the initial value text-animate, setLetterClass is the function that change sit in AnimatedLetters
    const [letterClass, setLetterClass] = useState('text-animate')
    //array of chars to animate
    const nameArray = ['a', 'z', 'i', 'l']
    const jobArray = ['f', 'u', 'l', 'l', ' ', 's','t', 'a', 'c', 'k', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)
      

    //The F is going to be the logo
    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>

                    <br />
                
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray} 
                        idx={15} />
                    <br />

                    <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray} 
                    idx={26} />
                </h1>

                <h2>Masters Student / Full Stack Developer / Coder</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        </>
    );
}



export default Home