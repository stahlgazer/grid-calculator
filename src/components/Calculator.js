import React from "react";

export default function Calculator() {
  return (
    <div className="calculator">
      <input type="number" placeholder="0"/>
      <div className="button-container">
        <button className="calc-button clear big">Clear</button>
        <button className="calc-button">/</button>
        <button className="calc-button">x</button>
        <button className="calc-button">+</button>
        <button className="calc-button">-</button>
        <button className="calc-button">1</button>
        <button className="calc-button">2</button>
        <button className="calc-button">3</button>
        <button className="calc-button">4</button>
        <button className="calc-button">5</button>
        <button className="calc-button">6</button>
        <button className="calc-button">7</button>
        <button className="calc-button">8</button>
        <button className="calc-button">9</button>
        <button className="calc-button big">0</button>
        <button className="calc-button equal">=</button>
      </div>
    </div>
  );
}
