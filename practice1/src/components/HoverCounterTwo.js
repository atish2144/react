import React, { Component } from "react";

export class HoverCounterTwo extends Component {
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
    return <h3 onMouseOver={this.incrementCounter}></h3>;
  }
}
