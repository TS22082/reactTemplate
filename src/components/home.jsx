import React, { Component } from "react";

class Home extends Component {
  state = {};
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>This is the Home component</h1>
        <p>Hello: {this.props.name}</p>
        <p>count: {this.props.count}</p>
        <button onClick={this.props.addOne}>Add</button>
        <button onClick={this.props.subOne}>Sub</button>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default Home;
