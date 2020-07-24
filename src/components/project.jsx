import React, { Component } from "react";

class Project extends Component {
  render() {
    let info = this.props.info;

    return (
      <div className={info.cssClass} onClick={() => window.open(info.link)}>
        <img src={info.image} className="image" alt="logo" />
        <h3 className="h3">{info.projectName}</h3>
      </div>
    );
  }
}

export default Project;
