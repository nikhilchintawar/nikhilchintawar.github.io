import React, {useState} from 'react';
import {GiHamburgerMenu} from "react-icons/gi";
import {RiCloseLine} from "react-icons/ri";
import {Link} from "react-scroll";


import "./header.styles.css";
import Menu from "./Menu";

const Header = () => {

    const [hidden, setHidden] = useState(true);

    const dropdown = () => {
        setHidden(!hidden)
    }

    return (
        <div>
        <div className="header header-desktop">
            <Link 
                className="logo-container" 
                spy={true} 
                smooth={true} 
                to="homeLink"
                duration={1000}
                delay={200} >
                <span>Nikhil Chintawar</span>
            </Link>
            <div className="options">
                <Link 
                    className="option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="homeLink"
                    duration={1000}
                    delay={200}
                     >
                    HOME
                </Link>
                <Link 
                    className="option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="aboutMeLink"
                    duration={1000}
                    delay={200} >
                    ABOUT ME
                </Link>
                <Link 
                    className="option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="backgroundLink"
                    duration={1000}
                    delay={200} >
                    BACKGROUND
                </Link>
                <Link 
                    className="option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="experienceLink"
                    duration={1000}
                    delay={200} >
                    EXPERIENCE
                </Link>
                <Link 
                    className="option"
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="contactLink"
                    duration={1000}
                    delay={200} >
                    CONTACT
                </Link>
        </div>
        </div>
        
        {/* header-mobile */}
        <div className="header-mobile">
        <div className="header">
            <Link 
                className="logo-container" 
                spy={true} 
                smooth={true} 
                to="homeLink"
                duration={1000}
                delay={200} >
                <span>Nikhil Chintawar</span>
            </Link>

        <div className="haburger">
        {
            hidden ? <GiHamburgerMenu size={30} onClick={dropdown} /> : <RiCloseLine size={30} onClick={dropdown} />        
        }
        </div>
            {
                hidden ? null : <Menu />
            }     
        </div>
        </div>
        </div>
    );
};

export default Header;