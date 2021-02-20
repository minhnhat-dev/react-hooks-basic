import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

function randomColors(currentColor = '') {
    const colors = ['lightyellow', 'lightsalmon', 'palegreen', 'aquamarine', 'powderblue', 'plum', 'honeydew'];
    const colorsNew = colors.filter((color) => color !== currentColor);
    const index = Math.floor(Math.random() * colorsNew.length);
    return colorsNew[index];
}

function RandomColors(props) {
    const [color, setColor] = useState('');
    const colorRef = useRef('');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            const currentColor = colorRef.current;
            const newColor = randomColors(currentColor);
            setColor(newColor);
            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        };
    }, []);

    return color;
}

RandomColors.propTypes = {

};

export default RandomColors;
