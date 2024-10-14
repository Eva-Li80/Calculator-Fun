import React, { useState } from "react";

const ColorChange = () => {
    const [color, setColor] = useState("red")

    const handleColor = (colorrr:string) => {
        setColor(colorrr)
    }

  return (
    <div style={{backgroundColor: color}}>
      <h1>color change</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
        omnis officiis dicta voluptate expedita soluta, eaque eius accusamus in,
        repellendus inventore harum porro excepturi repellat, dolor unde sequi
        sit! Ea.
      </p>
      <button onClick={() => handleColor("pink")}>pink</button>
      <button onClick={() => handleColor("blue")}>blue</button>
      <button onClick={() => handleColor("green")}>green</button>
      <button onClick={() => handleColor("yellow")}>yellow</button>
      <button onClick={() => handleColor("purple")}>purple</button>
    </div>
  );
};

export default ColorChange;
