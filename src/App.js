import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./components/home";
import About from "./components/about";
import Simple from "./components/Simple/simple";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bob",
      count: 0
    };
    this.setName = this.setName.bind(this);
    this.addOne = this.addOne.bind(this);
    this.subOne = this.subOne.bind(this);
    this.reset = this.reset.bind(this);
  }

  addOne() {
    const count = this.state.count + 1;
    this.setState({ count });
  }
  subOne() {
    const count = this.state.count - 1;
    this.setState({ count });
  }
  reset() {
    const count = 0;
    this.setState({ count });
  }
  setName(e) {
    const name = e.target.value;
    this.setState({ name });
  }
  render() {
    const styles = {
      margin: "2%"
    };

    return (
      <Router>
        <div className="App">
          <ul>
            <NavLink
              to="/"
              style={styles}
              exact
              activeStyle={{ backgroundColor: "lightgrey" }}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              style={styles}
              exact
              activeStyle={{ backgroundColor: "lightgrey" }}
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/simple"
              style={styles}
              exact
              activeStyle={{ backgroundColor: "lightgrey" }}
            >
              TODO
            </NavLink>
          </ul>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <Home
                  name={this.state.name}
                  count={this.state.count}
                  addOne={this.addOne}
                  subOne={this.subOne}
                  reset={this.reset}
                />
              );
            }}
          />
          <Route
            path="/about"
            exact
            render={() => {
              return <About setName={this.setName} name={this.state.name} />;
            }}
          />
          <Route
            path="/simple"
            exact
            render={() => {
              return <Simple />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
