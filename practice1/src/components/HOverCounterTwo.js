import React, { Component } from "react";

class HOverCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h3 onMouseOver={this.incrementCounter}> MouseOver Count {count}</h3>
      </div>
    );
  }
}

export default HOverCounterTwo;
