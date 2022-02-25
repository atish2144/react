import { useState } from "react";

function UseCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((prevState) => prevState + value);
  };
  const decrement = () => {
    setCount((prevState) => prevState - value);
  };
  const reset = () => {
    setCount(initialCount);
  };

  return [count, increment, decrement, reset];
}

export default UseCounter;
