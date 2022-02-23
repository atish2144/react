import React, { useState } from "react";

const Hook2 = () => {
  //   let val = "Learning react";
  const [myName, setMyName] = useState("Learning React");
  const array = [1, 2, 3, 4, 5];

  const reducer = (acc, currval) => acc + currval;

  console.log(array.reduce(reducer));

  const changeVal = () => {
    let val = myName;
    // if (val === "Learning React") {
    //   setMyName("changed Value");
    // } else {
    //   setMyName("Learning React");
    // }

    val === "Learning React"
      ? setMyName("changed Value")
      : setMyName("Learning React");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeVal}>Click to change</button>
    </div>
  );
};

export default Hook2;
