import React from 'react';
import ProfileImage from "./../../assets/nc.jpg";

import "./about-me.styles.css";

const AboutMe = ({id}) => {
    return (
        <div className="about-me" id={id} >
            <div className="about-me-section">
                <img className="profile-image" src={ProfileImage} alt="Nikhil Chintawar" width="200" />
                <h2>About Me</h2>
                <p className="description">Hi I'm Nikhil Chintawar, and I am currently pursuing Computer Science And Engineering at 
                    Shri Guru Gobind Singh Ji Institute Of Engineering & Technology, Vishnupuri, Nanded
                    I believe in learning through practicing. also I am completely book nut and loves to read books 
                and also myself. I am from village and I love my village also I deeply believe in Indian culture.</p>
                </div>
        </div>
    );
};

export default AboutMe;