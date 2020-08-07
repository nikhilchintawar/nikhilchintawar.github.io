import React from 'react';
import {v4 as uuidv4} from "uuid";
import "./card.styles.css";

const Card = ({favicon, title, info, href, linkText}) => {
    return (
        <div className="card">
            <span>{favicon}</span>
            <h3>{title}</h3>
            {
                info.map((edu) => (
                    <ul className="infoContainer" key={uuidv4()}>
                        <li>{edu}</li>
                    </ul>
                ))
            }
            <a target="_blank" rel="noopener noreferrer" href={href}>
                {linkText}
            </a>
        </div>
    );
};

export default Card;