import React, { useState } from "react";
import "./List.css";

function List() {
  const [task, settask] = useState("");
  const [taskList, settaskList] = useState([]);

  const handleChange = (e) => {
    settask(e.target.value);
  };

  const AddTask = () => {
    if (task !== "") {
      const taskDetails = {
        id: Math.floor(Math.random() * 1000),
        value: task,
      };

      settask("");

      settaskList([...taskList, taskDetails]);
    }
  };

  const deleteval = (e, id) => {
    //e.preventDefalut();
    settaskList(taskList.filter((t) => t.id != id));
  };
  //console.log("taskList", taskList);
  return (
    <div>
      <input
        type="text"
        name="text"
        id="input1"
        onChange={(e) => handleChange(e)}
        placeholder="ADD Item "
      ></input>
      <button id="btn1" onClick={AddTask}>
        {" "}
        Add{" "}
      </button>
      <br />
      <br />
      {taskList !== [] ? (
        <ul>
          {taskList.map((t) => (
            <li className="list1">
              {t.value}
              <button className="del-btn" onClick={(e) => deleteval(e, t.id)}>
                delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default List;
