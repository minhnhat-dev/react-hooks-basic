import React from 'react';
import useClock from '../../hooks/useClock';
import './Home.scss';

function Home() {
    const { timeString } = useClock();
    return (
        <div>
            <h2>Home</h2>
            <div className="time-box">
                <p className="time-box__text-time">{timeString}</p>
            </div>
        </div>
    );
}

export default Home;
