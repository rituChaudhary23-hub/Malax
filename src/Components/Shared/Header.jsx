import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

import profile from "../../assets/images/profile.png";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="nav-header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-expand-xl">
                <a class="navbar-brand" href="/">
                  <img src={logo} alt="logo" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbar-list-2"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-list-2">
                  <ul class="navbar-nav">
                    <li class="nav-item active notification">
                      <a class="nav-link" href="#" title="Notification">
                        <span>
                          <i class="fa fa-bell" aria-hidden="true"></i>
                        </span>
                      </a>
                    </li>
                    <li class="nav-item profile">
                      <a class="nav-link" href="#" title="My Account">
                        <img src={profile} />
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="index" title="Log in">
                        <span>
                          <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
}

export default Header;
