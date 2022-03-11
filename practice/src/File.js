import React, { useState, useEffect } from "react";
import axios from "axios";

function File() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setdata(res.data.title);
      })
      .catch((err) => {
        console.log(console.error());
      });
  });

  return (
    <div>
      {/* <ul>
        {data.map((dat) => (
          <li key={dat.id}>{dat.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default File;
