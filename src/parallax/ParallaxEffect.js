import React from 'react';
import {Parallax} from "react-parallax";
import AboutMeImage from "./../assets/overlay.jpg";

import "./parallax.styles.css";

const ParallaxEffect = ({children, ...otherProps}) => {
    return (
        <Parallax
            bgImage={AboutMeImage}
            bgImageAlt="trees"
            strength={600}
            contentClassName="parallax"
            {...otherProps}
        >
            {children}
        </Parallax>
    );
};

export default ParallaxEffect;