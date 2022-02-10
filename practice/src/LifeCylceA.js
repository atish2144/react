import React, { Component } from "react";
import LifeCylceB from "./LifeCycleB";

class LifeCylceA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "atish",
    };
    console.log("LifeCylceA constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCylceA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCylceA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log(" LifeCylceA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCylceA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCylceA componentDidUpdate");
  }

  ChangeState = () => {
    this.setState({
      name: "code evaluation",
    });
  };

  render() {
    console.log("LifeCylceA render");
    return (
      <div className="App">
        <div>LifeCylceA</div>
        <button onClick={this.ChangeState}>Change State</button>
        <LifeCylceB></LifeCylceB>
      </div>
    );
  }
}

export default LifeCylceA;
