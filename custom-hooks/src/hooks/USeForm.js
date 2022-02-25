import React, { useState } from "react";

function USeForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const setHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    setfirstName("");
    setlastName("");
  };

  return (
    <div>
      <form onSubmit={setHandler}>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>LastName</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          <br />
          <br />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default USeForm;
