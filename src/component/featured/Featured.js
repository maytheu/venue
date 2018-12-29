import React from 'react';

import Carrousel from './Carrousel'
import CountdownTimer from './CountdonTimer'

const Featured = () => {
    return (
        <div style={{position: "relative"}}>
            <Carrousel />
            <div className="artist_name">
                <div className="wrapper">Ariana Grande</div>
            </div>
            <CountdownTimer />
        </div>
    );
};

export default Featured;