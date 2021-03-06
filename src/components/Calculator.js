import React, { useState } from "react";

export default function Calculator() {
  const [entry, setEntry] = useState(0);
  const [memory, setMemory] = useState("");

  const calculate = (e) => {
    setMemory(eval(memory + entry));
  };

  const numClick = (e) => {
    if (entry === 0) {
      setEntry(e.target.value);
    } else if (e.target.value === "/") {
      setMemory(entry + e.target.value);
      setEntry(0);
    } else if (e.target.value === "*") {
      setMemory(entry + e.target.value);
      setEntry(0);
    } else if (e.target.value === "+") {
      setMemory(entry + e.target.value);
      setEntry(0);
    } else if (e.target.value === "-") {
      setMemory(entry + e.target.value);
      setEntry(0);
    } else if (e.target.value === "=") {
      setMemory(memory + entry);
      setMemory(calculate);
      setEntry(0);
    } else {
      setEntry(entry + e.target.value);
    }
  };

  const clearClick = () => {
    setEntry(0);
    setMemory("");
  };
  console.log("current entry: ", entry);
  console.log("current memory: ", memory);

  return (
    <div className="calculator">
      <span>Answer</span>
      <input disabled type="text" value={memory}></input>
      <input disabled type="number" value={entry} placeholder="0" />
      <div className="buttons-container">
        <button onClick={clearClick} className="calc-button clear">
          Clear
        </button>
        <button
          value="/"
          disabled={entry === 0}
          onClick={numClick}
          className="calc-button"
        >
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
        <button
          value="*"
          disabled={entry === 0}
          onClick={numClick}
          className="calc-button"
        >
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
        <button
          value="-"
          disabled={entry === 0}
          onClick={numClick}
          className="calc-button"
        >
          &minus;
        </button>
        <button value={1} onClick={numClick} className="calc-button">
          1
        </button>
        <button value={2} onClick={numClick} className="calc-button">
          2
        </button>
        <button value={3} onClick={numClick} className="calc-button">
          3
        </button>
        <button
          value="+"
          disabled={entry === 0}
          onClick={numClick}
          className="calc-button"
        >
          +
        </button>
        <button value={0} onClick={numClick} className="calc-button zero">
          0
        </button>
        <button
          value="="
          disabled={entry === 0}
          onClick={numClick}
          className="calc-button equal"
        >
          =
        </button>
      </div>
    </div>
  );
}



