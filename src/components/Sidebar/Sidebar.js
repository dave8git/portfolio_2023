import { Link, NavLink } from 'react-router-dom';
import styles from './Sidebar.module.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faYoutube, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => 
    (
        <div className={styles.navBar}>
            <Link className={styles.logo} to='/'>
                <img src={LogoS} alt='logo' />
                <img src={LogoSubtitle} alt='lastName' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname={styles.active} className={styles.aboutLink} to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname={styles.active} className={styles.contactLink} to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul> 
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dawid-polok/'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://github.com/poldave111/'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://youtube.com'>
                        <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/dawid-polok/'>
                        <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )

export default Sidebar; 