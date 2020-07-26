import React, { Component } from "react";

class Header extends Component {
  render() {
    const info = this.props.info;

    return (
      <header>
        <div className="header">
          <img
            src={info.photo}
            className="photo"
            alt="logo"
            onClick={this.props.changeInfo}
          />
          <img
            src={info.octocat}
            title="Github profile"
            className="github"
            alt="logo"
            onClick={() => window.open(info.github)}
          />
          <div className="col">
            <h1>{info.name}</h1>
            <h3>{info.profession}</h3>
            <p>{info.about}</p>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
