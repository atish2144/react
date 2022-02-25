import React from "react";
import UseCounter from "./UseCounter";

function Counter2() {
  const [count, increment, decrement, reset] = UseCounter(0, 10);

  return (
    <div>
      Count = {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>reset</button>
        <br />
      </div>
    </div>
  );
}

export default Counter2;
