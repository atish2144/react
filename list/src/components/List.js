import React, { useState, useEffect } from "react";

function List() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("item")) || []
  );

  // useEffect(() => {
  //   const counterFromLc = localStorage.getItem("items");
  //   if (counterFromLc) {
  //     setItems(counterFromLc);
  //   }
  // }, []);
  let ls = JSON.parse(localStorage.getItem("item"));
  if (ls) {
    // setItems(ls);
  }

  const handleInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  };

  const saveVal = () => {
    setItems((oldval) => {
      localStorage.setItem("items", JSON.stringify([...oldval, input]));
      setItems(JSON.parse(localStorage.getItem("items")));
      return [...oldval, input];
    });

    setInput("");
  };

  const deleteItems = (index) => {
    const method = items.filter((item, key1) => {
      return index !== key1;
    });
    setItems(method);
    localStorage.setItem("items", JSON.stringify(method));
  };

  return (
    <div>
      <br />
      <br />
      <h1>To do List</h1>
      <br />
      <br />

      <input type="text" onChange={handleInput} value={input}></input>
      <br />
      <br />
      <button onClick={saveVal} className="btn1">
        Submit
      </button>
      <br />
      <br />
      <ol>
        {items.map((itemval, index) => {
          return (
            <li key={index}>
              {itemval}
              <button onClick={() => deleteItems(index)} className="listItem">
                x
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
export default List;
