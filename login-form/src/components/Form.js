import React, { useState } from "react";

function Form() {
  const [count, secount] = useState(0);

  return (
    <div>
      Count {count}
      <br />
      <br />
      <button onClick={() => secount(count + 1)}>inc</button>
    </div>
  );
}

export default Form;
