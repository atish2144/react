import React, { Component } from "react";

export class TextField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password1: "",
      topic: "React",
    };
  }

  HandleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  HandlePasswordhange = (event) => {
    this.setState({
      password1: event.target.value,
    });
  };

  optionChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  Handlesubmit = (event) => {
    alert(`${this.state.userName} ${this.state.password} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.Handlesubmit}>
          <div>
            <label> User Name </label>
            <input
              type="text"
              value={this.state.userName}
              onChange={this.HandleUserNameChange}
            ></input>
          </div>
          <br></br>
          <div>
            <label> Password </label>
            <input
              type="password"
              value={this.state.password}
              onClick={this.HandlePasswordhange}
            ></input>
          </div>
          <br></br>
          <div>
            <label>Topic </label>
            <select value={this.state.topic} onChange={this.optionChange}>
              <option value="React">React</option>
              <option value="Angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default TextField;
