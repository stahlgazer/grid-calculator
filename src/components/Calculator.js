import React from "react";

export default function Calculator() {
  return (
    <div className="calculator">
      <input type="number" placeholder="0" />
      <div className="buttons-container">
        <button className="calc-button clear">Clear</button>
        <button className="calc-button">&divide;</button>
        <button className="calc-button">7</button>
        <button className="calc-button">8</button>
        <button className="calc-button">9</button>
        <button className="calc-button">&times;</button>
        <button className="calc-button">4</button>
        <button className="calc-button">5</button>
        <button className="calc-button">6</button>
        <button className="calc-button">&minus;</button>
        <button className="calc-button">1</button>
        <button className="calc-button">2</button>
        <button className="calc-button">3</button>
        <button className="calc-button">+</button>
        <button className="calc-button zero">0</button>
        <button className="calc-button equal">=</button>
      </div>
    </div>
  );
}
