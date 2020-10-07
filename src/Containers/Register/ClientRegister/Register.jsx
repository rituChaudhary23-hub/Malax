import React, { Component } from "react";
import { Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

import TheparistRegister from "../TheparistRegister/TheparistRegister";
import ClientRegister from "../ClientRegister/ClientRegister";
import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const panes = [
      {
        menuItem: "Client",
        render: () => (
          <Tab.Pane attached={false}>
            <ClientRegister />
          </Tab.Pane>
        ),
      },
      {
        menuItem: "Theparist",
        render: () => (
          <Tab.Pane attached={false}>
            <TheparistRegister />
          </Tab.Pane>
        ),
      },
    ];
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="log-in-img ">
                <img src={logIn} />
                <div className="log-in-img-overlay">
                  <img className="img2" src={logo} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
            <div className="login-div">
              <div className="log-in-inner">
                <h3>Welcome to Malax</h3>
                <p>
                  Already registered?
                  <Link to="/"> Click here to Login</Link>
                </p>
                <Tab menu={{ secondary: true }} panes={panes} />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
