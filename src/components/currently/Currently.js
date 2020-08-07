import React from 'react';

import "./currently.styles.css";
import CurrentlyCard from './CurrentlyCard';


const Currently = () => {
    return (
        <div className="currently">
            <h2>I'm Currently...</h2>
            <div className="currently-info">
                <CurrentlyCard
                    currentInfo="Studying in final year at Shri Guru Gobind Singh Ji Institute at Engineering & Technology, Vishnupuri-431606, Nanded"
                />
                <CurrentlyCard
                    currentInfo="Exploring the oportunities for internships and working on projects."
                />
            </div>
        </div>
    );
};

export default Currently;