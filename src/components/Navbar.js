import React, { Component } from "react";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <>
        <div className="navigation">
          <nav>
            <a className="logo" href="#home">
              PS
            </a>

            <div>
              <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <li>
                  <a className="active" href="#skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
export default Navbar;
