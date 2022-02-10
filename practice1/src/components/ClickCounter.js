import React, { Component } from "react";
import WithCounter from "../WithCounter";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };
  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>
          {" "}
          {this.props.name}Click {count} times
        </button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter, 5);
