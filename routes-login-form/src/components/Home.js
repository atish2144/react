import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home(props) {
  // let val = {};

  // const addVal = () => {
  //   val = {
  //     username: username,
  //     password: password,
  //   };
  // };
  // const [login, setusername, setpassword] = props;
  return (
    <div>
      <div>
        <label>Username - </label>
        <input
          type="text"
          onChange={(e) => props.setusername(e.target.value)}
        ></input>
      </div>
      <br />
      <div>
        <label>Password - </label>
        <input
          type="text"
          onChange={(e) => props.setpassword(e.target.value)}
        ></input>
      </div>
      <br />
      {/* <Link to="/Other"> */}
      <button onClick={(e) => props.login(e)}>Login</button>
      {/* </Link> */}
    </div>
  );
}

export default Home;
