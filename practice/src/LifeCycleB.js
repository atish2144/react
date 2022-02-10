import React, { Component } from "react";

class LifeCylceB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "atish",
    };
    console.log("LifeCylceB constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCylceB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCylceB componentDidMount");
  }

  shouldComponentUpdate() {
    console.log(" LifeCylceB shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCylceB getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCylceB componentDidUpdate");
  }

  render() {
    console.log("LifeCylceB render");
    return <div className="App">LifeCylceB </div>;
  }
}

export default LifeCylceB;
