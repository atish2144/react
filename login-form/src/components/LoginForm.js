import React, { useState } from "react";

function LoginForm() {
  const [userRegistration, setuserregistartion] = useState({
    Username: "",
    email: "",
    phone: "",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setuserregistartion({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newrecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };
    console.log(records);
    setRecords([...records, newrecord]);

    setuserregistartion({ Username: "", email: "", phone: "", password: "" });
    alert(
      `Username- ${userRegistration.Username}
       \n e-mail- ${userRegistration.email}
          \n phone- ${userRegistration.phone}
       \n password- ${userRegistration.password}`
    );
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Username">Name-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.Username}
            onChange={handleInput}
            name="Username"
            id="Username"
          />
          <br />
          <br />
          <div></div>
          <label htmlFor="email">email-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="phone">phone-</label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="password">password-</label>
          <input
            type="password"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
        <br />
        <br />

        <button type="submit"> Registration</button>
      </form>

      {/* <div>
        {records.map((curelemet) => {
          return (
            <div>
              <p>{curelemet.Username}</p>
              <p>{curelemet.email}</p>
              <p>{curelemet.phone}</p>
              <p>{curelemet.password}</p>
            </div>
          );
        })} 
      </div>*/}
    </div>
  );
}

export default LoginForm;
