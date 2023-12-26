import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState(`textAnimate`); 
    const nameArray = ['l', 'o', 'b', 'o', 'd', 'a', 'n'];
    const jobArray = ['w','e','b',' ', 'd','e','v','e','l', 'o','p','e','r', '.'];

    return (
        <div className={`container ${styles.homePage}` }>
            <div className={` ${styles.textZone}`}>
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={22} />
                </h1>
                <h2>Frontend Developer / JavaScript Expert / Youtuber</h2>
                <Link to="/contact" className={styles.flatBtn}>CONTACT ME</Link>
            </div>
        </div>
    )
}

export default Home;