import React from 'react';
import { FaGithub, FaLinkedin, FaTwitterSquare, FaArrowCircleUp } from 'react-icons/fa';
import {TiLocation} from "react-icons/ti";
import {MdEmail} from "react-icons/md";
import {animateScroll as scroll} from "react-scroll";

import "./contact.styles.css";

const Contact = ({id}) => {
    
    const scrollToTop = () => scroll.scrollToTop();

    return (
        <div className="contact" id={id}>
            <h2>Contact Details</h2>
            <p>send me an email, or add me on your social media, and I'll get in touch!</p>
            <p><TiLocation /> Nanded, India</p>
            <p><MdEmail /> chintawarnikhil88@gmail.com</p>
            <span className="links">
                    <a target="_blank" rel="noopener noreferrer" title="Linkedin" href="https://www.linkedin.com/in/nikhilchintawar/" className="link">
                        <FaLinkedin size={30} color="#ffffff" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/nikhilchintawar" className="link" >
                        <FaGithub size={30} color="#ffffff" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Twitter" href="https://twitter.com/itsChintawar" className="link" >
                        <FaTwitterSquare size={30} color="#ffffff" />
                    </a>
                </span>
                <div className="scrollToTop">
                    <span onClick={scrollToTop} >
                        <FaArrowCircleUp size={40} />
                </span>
                </div>
                
        </div>
    );
};

export default Contact;