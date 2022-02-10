import React, { Component } from "react";
import WithCounter from "../WithCounter";

class HOverCounter extends Component {
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
        <h3 onMouseOver={incrementCounter}>Hovered {count} Times</h3>
      </div>
    );
  }
}

export default WithCounter(HOverCounter, 10);
