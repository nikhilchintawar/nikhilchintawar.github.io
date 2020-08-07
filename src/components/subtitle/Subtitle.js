import React from 'react';
import "./subtitle.styles.css";

const Subtitle = () => {
    const subtitle = ["Web Developer", "Computer Science Engineering Student"]

    let subTitleArray = []

    for(let title of subtitle){
        subTitleArray.push(
            <div className="background">
                <p className="typewriter">
                    {title}
                </p>
            </div>
        )
    }
    return (
        subTitleArray
    );
};

export default Subtitle;