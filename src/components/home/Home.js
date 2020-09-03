import React from 'react';
import {FaLinkedin, FaGithub, FaTwitterSquare} from "react-icons/fa";
import Typewriter from "typewriter-effect";

import "./home.styles.css"

const Home = ({id}) => {

    return (
        <div className="home" id={id} >
            <div className="home-content">
                <h1>I'm Nikhil Chintawar</h1>
                <span className="subtitle">
                    <Typewriter 
                        options={{
                            strings: ["Web Developer", "Computer Science Student"],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </span>
                <span className="links">
                    <a target="_blank" rel="noopener noreferrer" title="Linkedin" href="https://www.linkedin.com/in/nikhilchintawar/">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Github" href="https://github.com/nikhilchintawar">
                        <FaGithub />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" title="Twitter" href="https://twitter.com/itsChintawar">
                        <FaTwitterSquare />
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Home;