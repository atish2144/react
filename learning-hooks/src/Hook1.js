import React, { useState } from "react";

const Hook1 = () => {
  //  var val = "Learning Hooks";
  //   console.log(useState(val));

  const [myName, setMyName] = useState("Learning Hooks");

  const changeVal = () => {
    // val = "value changed";
    //    console.log(myName);
    let val = myName;
    // if (val === "Learning Hooks") {
    //   setMyName("Changed Value");
    // } else {
    //   setMyName("Learning Hooks");
    // }

    val === "Learning Hooks"
      ? setMyName("changed value")
      : setMyName("Learning Hooks");
  };
  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={changeVal}>Click to change</button>
    </div>
  );
};

export default Hook1;
