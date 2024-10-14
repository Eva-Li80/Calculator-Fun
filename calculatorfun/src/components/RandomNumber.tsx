import React, { useState } from 'react';

const RandomNumber = () => {
    const [tal, setTal] = useState<number>(0);

    // Funktion för att generera ett slumpmässigt tal
    const generateRandomNumber = () => {
        const randomNum = Math.floor(Math.random() * 101); // Generera ett tal mellan 0 och 100
        setTal(randomNum);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Slumptal Generator</h1>
            <p>Slumptalet är: {tal}</p>
            <button onClick={generateRandomNumber}>Generera Slumptal</button>
        </div>
    );
};

export default RandomNumber;
