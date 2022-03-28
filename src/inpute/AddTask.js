import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../Ui/Card";
import "react-toastify/dist/ReactToastify.css";
import "./AddTask.css";
toast.configure();

function AddTask(props) {
  const [count, setcount] = useState(0);
  const [cmpltarr, setcmpltarr] = useState([]);
  const navigate = useNavigate();
  const [state1, setstate1] = useState(false);

  const [data1, setdata1] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );

  const deleteitem = (index) => {
    const method = data1.filter((obj, key1) => index !== obj.id);

    setdata1(method);
    localStorage.setItem("data", JSON.stringify(method));
  };

  const deletelistitem = (index) => {
    
    const method1 = cmpltarr.filter((obj, key1) => index !== obj);
    console.log("items=", method1);
    setcmpltarr(method1);
    setcount((prevcount) => prevcount - 1);
  };

  const completebtn = () => {
    setstate1(true);
    if (state1) return <div className="displaydiv"></div>;
  };

  const edititem = (id) => {
    props.data(false);
    navigate(`/Add/${id}`);
  };

  const cbcheck = (e, index) => {
    if (e.target.checked) {
      setcmpltarr([...cmpltarr, index.title]);
      setcount((prevcount) => prevcount + 1);
      e.target.checked = false;
      deleteitem(index.id);
    }
  };

  const dragEnd = (result) => {
    // const items=[...Data.current]
    const [orderproduct] = data1.splice(result.source.index, 1);
    console.log(orderproduct);
    data1.splice(result.destination.index, 0, orderproduct);
    console.log(data1);
    setdata1(data1);

    localStorage.setItem("data", JSON.stringify(data1));
  };

  return (
    <div>
      <div>
        <img src="addtask.webp" alt="logo" className="image1"></img>
        <label className="labl1">Add Task</label>

        <button className="addtask" onClick={() => navigate("/Add/id")}>
          Add Task
        </button>
      </div>
      <br />
      <br />

      <DragDropContext onDragEnd={dragEnd}>
        <Droppable
          droppableId="productSequence"
          direction="horizontal"
          type="row"
        >
          {(provided) => (
            <div
              className="Task-container"
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={{ width: "100%", height: "400px", top: "0" }}
            >
              {data1.map((index, id) => {
                return (
                  <Draggable
                    draggableId={`draggable-${id}`}
                    key={`draggable-${id}`}
                    index={id}
                  >
                    {(provided) => (
                      <span
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        {...provided.placeholder}
                        ref={provided.innerRef}
                      >
                        <Card
                          value={index}
                          cbcheck={cbcheck}
                          dat={index}
                          edititem={edititem}
                          deleteitem={deleteitem}
                        />
                      </span>
                    )}
                  </Draggable>
                );
              })}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {state1 && count !== 0 ? (
        <div className="cmpltdiv">
          {cmpltarr.map((obj, index) => {
            return (
              // console.log("object",obj)
              <li key={index} className="list2">
                {obj + "    "}
                <button onClick={() => deletelistitem(obj)}>X</button>
              </li>
            );
          })}
        </div>
      ) : (
        " "
      )}

      <div>
        <button className="cmpltbtn" onClick={() => setstate1(true)}>
          Completed {count}
        </button>
      </div>
      {data1.length === 0 ? navigate("/") : " "}
    </div>
  );
}

export default AddTask;
