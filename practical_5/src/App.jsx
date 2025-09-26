import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => setInput((prev) => prev + value);
  const handleClear = () => { setInput(""); setResult(""); };
  const handleEqual = () => {
    try {
      const evalResult = Function(`"use strict"; return (${input})`)();
      setResult(evalResult);
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} placeholder="0" readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("-")}>-</button>

        {[7, 8, 9].map((num) => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        <button onClick={() => handleClick("+")}>+</button>

        {[4, 5, 6].map((num) => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        {[1, 2, 3].map((num) => <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>)}
        <button onClick={handleEqual}>=</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
      </div>
    </div>
  );
}

export default App;
