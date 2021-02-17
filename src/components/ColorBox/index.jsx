import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

function getColor() {
    const COLORS = ['green', 'blue', 'yellow', 'pink', 'grey'];
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLORS[randomIndex]
}

function ColorBox() {
   const initColor = localStorage.getItem('box_color') || 'blue'
    const [color, setColor] = useState(initColor)

    function handleBoxClick() {
        const newColor = getColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div
            className='box'
            style={{backgroundColor: color}}
            onClick={handleBoxClick}
        >
            
        </div>
    );
}

export default ColorBox;