import React from "react";
import {Link} from "react-scroll";
import "./menu.styles.css";

const Menu = () => {
    return(
            <div className="mobile-options">
                <Link 
                    className="mobile-option" 
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
                    className="mobile-option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="aboutMeLink"
                    duration={1000}
                    delay={200} >
                    ABOUT ME
                </Link>
                <Link 
                    className="mobile-option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="backgroundLink"
                    duration={1000}
                    delay={200} >
                    BACKGROUND
                </Link>
                <Link 
                    className="mobile-option" 
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="experienceLink"
                    duration={1000}
                    delay={200} >
                    EXPERIENCE
                </Link>
                <Link 
                    className="mobile-option"
                    activeClass="active" 
                    spy={true} 
                    smooth={true} 
                    to="contactLink"
                    duration={1000}
                    delay={200} >
                    CONTACT
                </Link>
        </div>
    )
}

export default Menu;