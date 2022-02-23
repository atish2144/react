import "./App.css";
import React, { useReducer } from "react";
// import CounterOne from "./components/CounterOne";
//import CounterTwo from "./components/CounterTwo";
// import Counter3 from "./components/Counter3";
import ComponentA from "./components2/ComponentA";
import ComponentB from "./components2/ComponentB";
import ComponentC from "./components2/ComponentC";

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        {/* <CounterOne></CounterOne> */}
        {/* <CounterTwo></CounterTwo> */}
        {/* <Counter3></Counter3> */}
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
