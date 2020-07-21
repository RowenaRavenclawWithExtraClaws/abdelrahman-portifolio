import React, { Component } from "react";
import Photo from "../static/Photo.png";

class Header extends Component {
  render() {
    const info = this.props.info;

    return (
      <header>
        <div className="header">
          <img src={Photo} alt="logo" />
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
