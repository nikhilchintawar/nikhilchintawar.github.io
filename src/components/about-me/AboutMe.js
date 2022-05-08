import React from "react";
import ProfileImage from "./../../assets/nc.jpg";

import "./about-me.styles.css";

const AboutMe = ({ id }) => {
  return (
    <div className="about-me" id={id}>
      <div className="about-me-section">
        <img
          className="profile-image"
          src={ProfileImage}
          alt="Nikhil Chintawar"
          width="200"
          loading="lazy"
        />
        <h2>About Me</h2>
        <p className="description">
          Hi I'm Nikhil Chintawar, and I am currently working as Frontend
          Engineer at DPhi, In my free time I like to learn new things, travel &
          explore new cities & read books.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
