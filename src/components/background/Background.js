import React from 'react';
import {FaBookReader} from "react-icons/fa";

import Card from '../card/Card';
import "./background.styles.css";
import {education} from "./backgroundInfo";

const Background = ({id}) => {
    return (
        <div id={id}>
            <h2>Background</h2>
            <div className="background">
                <Card
                    favicon={<FaBookReader size={60} />}
                    title="Education"
                    info={education}
                />
            </div>
        </div>
    );
};

export default Background;