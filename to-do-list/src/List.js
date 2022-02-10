import React, { Component } from "react";

class List extends Component {
  state = {
    cart: ["abc", "xyz"],
  };

  saveInput = (e) => {
    this.setState({ input: e.target.value });
    this.setState.value = "";
    console.log(this.state.cart);
  };

  addNewItem = () => {
    let { cart, input } = this.state;
    cart.push(input);
    // this.state.cart.push(this.state.input); // same as above, though bad practice
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.saveInput} />
        <button onClick={this.addNewItem}> Add Item </button>

        <ol>
          {this.state.cart.map((subItems, sIndex) => {
            return <li key={sIndex}> {subItems}</li>;
          })}
        </ol>
      </div>
    );
  }
}

export default List;
