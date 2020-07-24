import React, { Component } from "react";
import Photo from "./static/Photo.png";
import Octocat from "./static/Octocat.png";
import Header from "./components/header";
import Heroics from "./components/heroics";

class App extends Component {
  state = {
    name: "Abdelrahman Nasser",
    profession: "Softwre Engineer",
    about: "A dude who writes code for a living!",
    github: "https://github.com/RowenaRavenclawWithExtraClaws",
    photo: Photo,
    octocat: Octocat,
  };

  render() {
    return (
      <React.Fragment>
        <Header info={this.state}></Header>
        <Heroics></Heroics>
      </React.Fragment>
    );
  }
}

export default App;
