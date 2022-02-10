import "./App.css";
// import ClickCounter from "./components/ClickCounter";
import ClickCounterOne from "./components/ClickCounterOne";
import HOverCounterTwo from "./components/HOverCounterTwo";
import User from "./components/User";
// import HOverCounter from "./components/HOverCounter";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter name="xyz "></ClickCounter>
      <HOverCounter></HOverCounter> */}

      <ClickCounterOne></ClickCounterOne>
      <HOverCounterTwo></HOverCounterTwo>
      <User name={(isLoggedIn) => (isLoggedIn ? "User" : "guest")}></User>
    </div>
  );
}

export default App;
