import { useState } from "react";

const Calculator = () => {
    const [input, setInput] = useState(""); // Hanterar input och visar resultatet
  
    // Hanterar knapptryck för siffror och operators
    const handleButtonClick = (value: string) => {
      setInput(input + value);
    };
  
    // Hanterar "=" knappen och beräknar resultatet
    const handleEquals = () => {
      try {
        const calculation = eval(input); // Beräkna uttrycket
        setInput(calculation.toString()); // Uppdatera input-fältet med resultatet
      } catch (error) {
        setInput("Error"); // Visa felmeddelande vid ogiltigt uttryck
      }
    };
  
    // Hanterar Clear-knappen för att nollställa input
    const clearInput = () => {
      setInput(""); // Nollställ input
    };
  
    return (
      <div className="calculator" >
        {/* Visar input/resultat */}
        <div className="display">{input || "0"}</div>
  
        {/* Kalkylator-knappar */}
        <div className="buttons" style={{display: "flex", flexDirection: "row"}}>
          <div >
            <button onClick={() => handleButtonClick("1")}>1</button>
            <button onClick={() => handleButtonClick("2")}>2</button>
            <button onClick={() => handleButtonClick("3")}>3</button>
            <button onClick={() => handleButtonClick("4")}>4</button>
            <button onClick={() => handleButtonClick("5")}>5</button>
            <button onClick={() => handleButtonClick("6")}>6</button>
            <button onClick={() => handleButtonClick("7")}>7</button>
            <button onClick={() => handleButtonClick("8")}>8</button>
            <button onClick={() => handleButtonClick("9")}>9</button>
            <button onClick={() => handleButtonClick("0")}>0</button>
          </div>
          <div>
            <button onClick={() => handleButtonClick("+")}>+</button>
            <button onClick={() => handleButtonClick("-")}>-</button>
            <button onClick={() => handleButtonClick("*")}>*</button>
            <button onClick={() => handleButtonClick("/")}>/</button>
            <button onClick={handleEquals}>=</button>
            <button onClick={clearInput}>C</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Calculator;