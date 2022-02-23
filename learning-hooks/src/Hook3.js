import React, { useState } from "react";

function Hook3() {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const IncrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevstate) => prevstate + 1);
    }
  };
  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button> */}
      Count {count}
      <br />
      <br />
      <button id="btn1" onClick={() => setCount(initialCount)}>
        Reset
      </button>
      <button id="btn2" onClick={() => setCount((prevstate) => prevstate + 1)}>
        Increment
      </button>
      <button id="btn3" onClick={() => setCount((prevstate) => prevstate - 1)}>
        decrement
      </button>
      <button onClick={IncrementFive}>Increment five</button>
    </div>
  );
}

export default Hook3;
