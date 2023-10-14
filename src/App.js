import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "÷") {
      setInput(input + "/");
    } else if (value === "x") {
      setInput(input + "*");
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const clear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="output">{output}</div>
        <div className="input">{input}</div>
        <div className="buttons">
          {['7', '8', '9', '÷', '4', '5', '6', 'x', '1', '2', '3', '-', '0', '.', '=', '+'].map(button => (
            <button 
              key={button}
              onClick={() => button === "=" ? calculate() : handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
          <button onClick={clear}>C</button>
        </div>
      </div>
    </div>
  );
}

export default App;
