import React, { Component } from "react";

class List extends Component {
  // state = {
  //   arr1: [1, 2],
  // };

  // addItem = (item) => {
  //   arr1.push({});
  //   alert(this.state.arr1);
  state = {
    cart: [],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
    // this.setState.value = "";
    console.log(this.state.cart);
  };

  addNewItem = (e) => {
    this.setState({ input: e.target.value });
    let { cart, input } = this.state;
    cart.push(input);
    this.txt1.value = "";
  };

  render() {
    return (
      <div>
        <br></br>
        <h2>To Do List</h2>
        <br></br>
        <input
          id="txt1"
          type="text"
          placeholder="write text here"
          onChange={this.saveInput}
        />

        <button onClick={this.addNewItem}>Add</button>

        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return (
              <li key={sIndex} id="list1">
                {" "}
                {subItems}
                {"  "}
                <button>X</button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default List;
