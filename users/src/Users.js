import React, { Component } from "react";

export class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mess: "Hello",
    };
  }
  clickHandler() {
    this.setState({
      mess: "bye",
    });
    console.log(this);
  }

  render() {
    return (
      <div>
        <h1>{this.state.mess}</h1>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    );
  }
}

export default Users;
