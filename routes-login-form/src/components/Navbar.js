import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Login</Link>
      <Link to="/About"></Link>
      {/* <Link to="/Other">Others</Link> */}
    </nav>
  );
}

export default Navbar;
