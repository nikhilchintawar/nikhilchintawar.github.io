import React from 'react';
import {FaLaptopCode, FaGithub} from "react-icons/fa";

import "./experience.styles.css";
import Card from '../card/Card';
import { reactProject1, reactProject2 } from '../card/info';


const Experience = ({id}) => {
    return (
        <div id={id}>
            <h2>Experience</h2>
            <div className="experience">
                <Card
                    favicon={<FaLaptopCode size={60} />}
                    title="Crown Clothing"
                    info={reactProject1}
                    href="https://github.com/nikhilchintawar/crown-clothing"
                    linkText={<FaGithub size={50} />}
                />
                <Card
                    favicon={<FaLaptopCode size={60} />}
                    title="Shetkari Shop"
                    info={reactProject2}
                    href="https://github.com/nikhilchintawar/crown-clothing"
                    linkText={<FaGithub size={50} />}
                />
            </div>

        </div>
    );
};

export default Experience;