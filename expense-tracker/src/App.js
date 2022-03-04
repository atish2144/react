import "./App.css";
import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  let expenses = [
    {
      id: "e1",
      title: "school fee",
      amount: 250,
      date: new Date(2022, 3, 8),
    },

    {
      id: "e2",
      title: "college fee",
      amount: 350,
      date: new Date(2022, 3, 8),
    },

    {
      id: "e1",
      title: "Tution fee",
      amount: 350,
      date: new Date(2022, 3, 8),
    },
  ];

  return (
    <div className="App">
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
