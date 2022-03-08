import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Other from "./components/Other";
import Navbar from "./components/Navbar";

function App() {
  const [username, setusername] = useState("admin");
  const [password, setpassword] = useState("123");
  const login = (props) => {
    if (username === "admin" && password === "123") {
      alert("login successful");
      console.log(username);
      console.log(password);
      // <link path="/Other"></link>;
      window.open(`http://localhost:3000/Other`, "_self");
    } else {
      console.log(username);
      console.log(password);

      alert("wrong username");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              login={login}
              setpassword={setpassword}
              setusername={setusername}
            />
          }
        ></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Other" element={<Other />}></Route>
      </Routes>
    </>
  );
}

export default App;
