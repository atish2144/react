import "./App.css";
// import ClickCounter from "./components/ClickCounter";
import ClickCounterOne from "./components/ClickCounterOne";
import { HoverCounterTwo } from "./components/HoverCounterTwo.1";
// import HOverCounter from "./components/HOverCounter";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name="xyz "></ClickCounter>
      <HOverCounter></HOverCounter> */}

      <ClickCounterOne></ClickCounterOne>
      <HoverCounterTwo></HoverCounterTwo>
    </div>
  );
}

export default App;
