import React from 'react';
import {FaBookReader} from "react-icons/fa";

import Card from '../card/Card';
import { education } from '../card/info';
import "./background.styles.css";

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