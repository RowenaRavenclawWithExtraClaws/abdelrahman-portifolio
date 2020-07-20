import React, { Component } from "react";
import Photo from "../static/Photo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header">
          <img src={Photo} alt="logo" />
          <h1> {this.props.name}</h1>
        </div>
      </header>
    );
  }
}

export default Header;
