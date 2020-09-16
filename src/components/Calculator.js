import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState(0);

  const numClick = (e) => {
    if (result === 0) {
      setResult(e.target.value);
    } else {
      setResult(`${result}${e.target.value}`);
    }
  };

  const clearClick = () => {
    setResult(0);
  };

  return (
    <div className="calculator">
      <input type="number" value={result} placeholder="0" />
      <div className="buttons-container">
        <button onClick={clearClick} className="calc-button clear">
          Clear
        </button>
        <button value={`/`} className="calc-button">
          &divide;
        </button>
        <button value={7} onClick={numClick} className="calc-button">
          7
        </button>
        <button value={8} onClick={numClick} className="calc-button">
          8
        </button>
        <button value={9} onClick={numClick} className="calc-button">
          9
        </button>
        <button value={`*`} className="calc-button">
          &times;
        </button>
        <button value={4} onClick={numClick} className="calc-button">
          4
        </button>
        <button value={5} onClick={numClick} className="calc-button">
          5
        </button>
        <button value={6} onClick={numClick} className="calc-button">
          6
        </button>
        <button className="calc-button">&minus;</button>
        <button value={1} onClick={numClick} className="calc-button">
          1
        </button>
        <button value={2} onClick={numClick} className="calc-button">
          2
        </button>
        <button value={3} onClick={numClick} className="calc-button">
          3
        </button>
        <button value={`+`} className="calc-button">
          +
        </button>
        <button value={0} onClick={numClick} className="calc-button zero">
          0
        </button>
        <button value={`=`} className="calc-button equal">
          =
        </button>
      </div>
    </div>
  );
}
