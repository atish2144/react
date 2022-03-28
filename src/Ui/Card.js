import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const deletemsg = () => {
  toast.error("Task deleted", { autoClose: 2000 });
};

const completemsg = () => {
  toast.success("Task completed", { autoClose: 2000 });
};


function Card({ cbcheck, edititem, dat, deleteitem }) {
  return (
    <div className="card1">
      <li className="cs1">
        <input
          type="checkbox"
          onChange={(e) => {cbcheck(e, dat);completemsg();}}
          className="cb1"
        />
        {dat.date}
        <br />
        {dat.title}
        <br />
        {dat.text}
        <br />
      </li>
      <img
        src="editimage.png"
        alt="edit"
        className="editimage"
        onClick={() => edititem(dat.id)}
      ></img>
      <img
        src="deleteimage.png"
        alt="delete"
        className="deleteimage"
        onClick={() => {deleteitem(dat.id);deletemsg()}}
      ></img>
    </div>
  );
}

export default Card;
