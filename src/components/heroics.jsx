import React, { Component } from "react";
import Project from "./project";

class Heroics extends Component {
  render() {
    let projects = this.props.projects;

    return (
      <div className="heroic">
        <h1>Projects</h1>
        {projects.map((project) => (
          <Project info={project}></Project>
        ))}
      </div>
    );
  }
}

export default Heroics;
