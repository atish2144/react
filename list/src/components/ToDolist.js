import React, { useState } from "react";
function ToDolist() {
  let arr = [];
  const [input, setInput] = useState("");
  const [value, setValue] = useState(arr);
  const [flag, setFlag] = useState(false);
  let ls = JSON.parse(localStorage.getItem("arr"));
  if (ls) {
    arr = ls;
  }
  function SubmitHandler() {
    if (!input) {
      setFlag(true);
      setInput("");
    } else {
      arr.push(input);
      setFlag(false);
      setInput("");
      localStorage.setItem("arr", JSON.stringify(arr));
      setValue(JSON.parse(localStorage.getItem("arr")));
    }
  }
  function RemoveEle(id) {
    const newList = value.filter((items) => items !== id);
    setValue(newList);
    localStorage.setItem("arr", JSON.stringify(newList));
  }
  function ClearHandler() {
    localStorage.clear();
    setValue();
  }
  return (
    <>
      <head>
        <link rel="stylesheet" href="to_do_list.css" />
      </head>
      <div className="container">
        <h1>TO-DO LIST</h1>
        <input
          type="text"
          id="box"
          placeholder="Add an Item"
          onChange={(e) => setInput(e.target.value)}
        />
        <button id="submit" name="submit" type="button" onClick={SubmitHandler}>
          Submit
        </button>
        <button id="clear" onClick={ClearHandler} name="clear" type="button">
          Clear List
        </button>
      </div>
      <ul>
        {arr.map((items, index) => {
          return (
            <>
              <li key={index}>
                {items}{" "}
                <button
                  id={items}
                  name="clear"
                  type="button"
                  onClick={() => {
                    RemoveEle(items);
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
}
export default ToDolist;
