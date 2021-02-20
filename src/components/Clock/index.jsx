import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './Clock.scss';
import useRandomColors from '../../hooks/useRandomColors';

function Clock(props) {
    const { timeString } = useClock();
    const [showTimeString, setShowTimeString] = useState(true);
    const [color, setColor] = useState('');
    const newColor = useRandomColors();

    function handleClickShowTimeString() {
        setShowTimeString(!showTimeString);
    }

    return (
        <>
            <div className="box-time">
                <div className="box-time__first-box-time" style={{ backgroundColor: newColor }}>
                    {showTimeString && (<p style={{ fontSize: '30px' }}>{timeString}</p>)}
                </div>
                <div className="box-time__second-box-time" style={{ backgroundColor: newColor }}>
                    {showTimeString && (<p style={{ fontSize: '30px' }}>{timeString}</p>)}
                </div>
            </div>
            <button type="button" onClick={handleClickShowTimeString}>{showTimeString ? 'Hide' : 'Show'}</button>
        </>
    );
}

Clock.propTypes = {

};

export default Clock;
