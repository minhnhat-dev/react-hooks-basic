import React, { useEffect, useState } from 'react';

function convertTimeString(date) {
    if (!date) return '';
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);
    return `${hours}:${minutes}:${seconds}`;
}

function Clock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const timeInterval = setInterval(() => {
            const now = new Date();
            const time = convertTimeString(now);
            setTimeString(time);
        }, 1000);
        return () => {
            clearInterval(timeInterval);
        };
    }, []);

    return { timeString };
}

export default Clock;
