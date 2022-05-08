import React from "react";
import { FaLaptopCode, FaArrowCircleRight } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";

import "./experience.styles.css";
import Card from "../card/Card";
import { reactProject1, reactProject2 } from "../card/info";

const Experience = ({ id }) => {
  return (
    <div id={id}>
      <h2>Experience</h2>
      <div className="experience">
        <Card
          favicon={<FaLaptopCode size={60} />}
          title="DPhi"
          info={reactProject1}
          href="https://dphi.tech/"
          linkText={<MdLanguage size={50} />}
        />
        <Card
          favicon={<FaLaptopCode size={60} />}
          title="Skillspace.ai"
          info={reactProject2}
          href="https://skillspace.ai/"
          linkText={<MdLanguage size={50} />}
        />
      </div>
      <div className="project-link">
        <a
          href="https://github.com/nikhilchintawar"
          target="_blank"
          rel="noopener noreferrer"
          className="link-text"
        >
          checkout all my projects here.
          <span className="circle-icon">
            <FaArrowCircleRight size={25} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Experience;
