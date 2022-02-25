import React from "react";
import UseCounter from "./UseCounter";

function Counter1() {
  const [count, increment, decrement, reset] = UseCounter(0, 1);

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

export default Counter1;
