import React, { Component } from "react";
import Project from "./project";
import Tincan from "../static/tincan.png";
import Reddit from "../static/redditApi.png";
import Fluid from "../static/fluidUI.png";

class Heroics extends Component {
  state = [
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
  ];

  render() {
    let info = this.state;

    return (
      <div className="heroic">
        <h1>Projects</h1>
        {info.map((project) => (
          <Project info={project}></Project>
        ))}
      </div>
    );
  }
}

export default Heroics;
