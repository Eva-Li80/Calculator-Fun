import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [time, setTime] = useState(0); // Tid i sekunder
    const [isActive, setIsActive] = useState(false); // Timer aktiv/inaktiv

    // Effekt för att hantera timern
    useEffect(() => {
        let intervalId: number | undefined; // För att lagra interval-ID

        if (isActive) {
            intervalId = setInterval(() => {
                setTime(prevTime => prevTime + 1); // Öka tiden med 1 sekund
            }, 1000); // 1000 ms = 1 sekund
        }

        return () => clearInterval(intervalId); // Rensa intervallet vid avmontering
    }, [isActive]);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Timer</h1>
            <p>Tid: {time} sekunder</p>
            <button onClick={() => setIsActive(true)} disabled={isActive}>Starta</button>
            <button onClick={() => setIsActive(false)} disabled={!isActive}>Stoppa</button>
            <button onClick={() => { setTime(0); setIsActive(false); }}>Återställ</button>
        </div>
    );
};

export default Timer;
