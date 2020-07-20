import React, { Component } from "react";
import Header from "./components/header";

class App extends Component {
  state = {
    name: "Abdelrahman Nasser",
  };

  render() {
    return (
      <React.Fragment>
        <Header name={this.state.name}></Header>
      </React.Fragment>
    );
  }
}

export default App;
