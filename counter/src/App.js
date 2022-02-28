import "./App.css";
import React, { useEffect, useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const counterFromLc = Number(localStorage.getItem("counter"));
    if (counterFromLc) {
      setCounter(counterFromLc);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counter", counter);
  }, [counter]);

  const setCounterValue = (value) => () => {
    setCounter(value);
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  const handleInputviaInput = () => {
    const value = Number(inputVal);

    if (isNaN(value)) {
      setInputVal("");
    } else {
      setCounter(value);
      setInputVal("");
    }
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <div>
        <button onClick={setCounterValue(counter - 1)}>-1</button>
        <button onClick={setCounterValue(0)}>reset</button>
        <button onClick={setCounterValue(counter + 1)}>+1</button>
      </div>
      <div>
        <input onChange={handleInputChange} val={inputVal}></input>
        <button onClick={handleInputviaInput}>Update</button>
      </div>
    </div>
  );
}

export default App;
