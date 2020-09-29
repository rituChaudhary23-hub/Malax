import React, { Component } from "react";
import logo from "../../assets/images/logo.png";
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      // <div className="userFormHeader">
      //   <img src={logo} alt="" />
      // </div>
      <div>
        <div class="nav-header">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-12">
                <nav class="navbar navbar-expand-xl">
                  <a class="navbar-brand" href="index">
                    <img src={logo} alt="logo" />
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
