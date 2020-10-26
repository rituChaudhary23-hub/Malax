import React, { Component } from "react";
import logo from "../../assets/images/logo.png";

import profile1 from "../../assets/images/profile1.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="nav-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <nav className="navbar navbar-expand-xl">
                  <a className="navbar-brand" href="/">
                    <img src={logo} alt="logo" />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar-list-2"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbar-list-2">
                    <ul className="navbar-nav">
                      <li className="nav-item active notification">
                        <a className="nav-link" href="/" title="Notification">
                          <span>
                            <i className="fa fa-bell"></i>
                          </span>
                        </a>
                      </li>
                      <li className="nav-item profile">
                        <a className="nav-link" href="/" title="My Account"
                        onClick={sessionStorage.removeItem('savedUser')}
                        >
                          <img src={profile1} />
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/" title="LogOut">
                          <span>
                            <i className="fa fa-sign-out"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
