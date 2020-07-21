import React, { Component } from "react";
import Header from "./components/header";

class App extends Component {
  state = {
    name: "Abdelrahman Nasser",
    profession: "Softwre Engineer",
    about: "A dude who writes code for a living!",
  };

  render() {
    return (
      <React.Fragment>
        <Header info={this.state}></Header>
      </React.Fragment>
    );
  }
}

export default App;
