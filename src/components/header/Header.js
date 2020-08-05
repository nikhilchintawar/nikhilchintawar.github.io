import React from 'react';
import { Link } from 'react-router-dom';

import "./header.styles.css";

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/" >
                <span>NIKHIL CHINTAWAR</span>
            </Link>
            <div className="options">
                <Link className="option" to="/" >
                    HOME
                </Link>
                <Link className="option" to="/about-me" >
                    ABOUT ME
                </Link>
                <Link className="option" to="/background" >
                    BACKGROUND
                </Link>
                <Link className="option" to="/experience" >
                    EXPERIENCE
                </Link>
                <Link className="option" to="/contact" >
                    CONTACT
                </Link>
            </div>
        </div>
    );
};

export default Header;