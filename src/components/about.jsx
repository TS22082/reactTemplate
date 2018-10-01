import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>This is the About Component</h1>
        <p>Name: {this.props.name}</p>
        <input
          type="input"
          value={this.props.name}
          onChange={this.props.setName}
        />
      </div>
    );
  }
}

export default About;
