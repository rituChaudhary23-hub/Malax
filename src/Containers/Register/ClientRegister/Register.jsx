import React, { Component } from "react";
import {Button} from "semantic-ui-react";
import { Link } from "react-router-dom";
import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";
// import { Button } from "bootstrap";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  clientRegister = () => {
    window.location.href = "/client-register";

  }
  therapistRegister = () => {
    window.location.href = "/therapist-register";

  }
  render() {
    // const panes = [
    //   {
    //     menuItem: "Client",
    //     render: () => (
    //       <Tab.Pane attached={false}>
    //         <ClientRegister />
    //       </Tab.Pane>
    //     ),
    //   },
    //   {
    //     menuItem: "Theparist",
    //     render: () => (
    //       <Tab.Pane attached={false}>
    //         <TheparistRegister />
    //       </Tab.Pane>
    //     ),
    //   },
    // ];
    return (
      <section className="log-in">
        <div className="container-fluid noPad">
          <div className="hFullWidth">
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
                    <p className="mb-2">
                      Already registered?
                      <Link to="/"> Click here to Login</Link>
                    </p>
                      {/* <Tab menu={{ secondary: true }} panes={panes} /> */}
                      <Button onClick={this.clientRegister}>
                        Register as Client</Button>
                      <Button onClick={this.therapistRegister}>Register as Therapist</Button>
                  </div>
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
