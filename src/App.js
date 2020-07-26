import React, { Component } from "react";
import Header from "./components/header";
import Heroics from "./components/heroics";
import Photo from "./static/Photo.png";
import Octocat from "./static/Octocat.png";
import Tincan from "./static/tincan.png";
import Reddit from "./static/redditApi.png";
import Fluid from "./static/fluidUI.png";

class App extends Component {
  state = {
    name: "Abdelrahman Nasser",
    profession: "Softwre Engineer",
    about: "A dude who writes code for a living!",
    github: "https://github.com/RowenaRavenclawWithExtraClaws",
    photo: Photo,
    octocat: Octocat,
    projects: [
      {
        projectName: "Tincan",
        image: Tincan,
        cssClass: "project1",
        link: "https://github.com/RowenaRavenclawWithExtraClaws/TincanApp",
      },
      {
        projectName: "Reddit API",
        image: Reddit,
        cssClass: "project2",
        link:
          "https://github.com/RowenaRavenclawWithExtraClaws/Reddit-like-GraphQL-API",
      },
      {
        projectName: "Fluid UI",
        image: Fluid,
        cssClass: "project3",
        link: "https://git.divvoice.eu/internship/nasser/-/tree/master",
      },
    ],
  };

  render() {
    let { projects, ...restProps } = this.state;

    return (
      <React.Fragment>
        <Header info={restProps}></Header>
        <Heroics projects={projects}></Heroics>
      </React.Fragment>
    );
  }
}

export default App;
