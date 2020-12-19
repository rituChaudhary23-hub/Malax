import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";
import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";
import fire from "../../../utils/config/fire";

import { fetchResendEmail } from ".././../../redux/actions/userList.action";
import { email } from "redux-form-validators";

export class ConfirmEmail extends Component {
  email = "abc";
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }
  loginClientRoute = () => {
    window.location.href = "/register";
  };

  // resendEmail = () => {
  //   var data = this.props.saveUser.data.Data.Email;
  //   this.state.email = data;
  //   this.props.fetchResendEmail(data);
  // };
  componentWillMount() {
    var app = fire;
    var auth = app.auth();
    if (auth.currentUser) {
      this.email = auth.currentUser.email;
      sessionStorage.setItem("userEmail", auth.currentUser.email);
    } else {
      this.email = sessionStorage.getItem("userEmail");
    }

    var mode = new URLSearchParams(window.location.search).get("mode");
    var actionCode = new URLSearchParams(window.location.search).get("oobCode");
    var continueUrl = new URLSearchParams(window.location.search).get(
      "continueUrl"
    );
    var lang = new URLSearchParams(window.location.search).get("lang") || "en";
    if (actionCode && mode)
      this.handleVerifyEmail(auth, actionCode, continueUrl, lang);
  }

  handleVerifyEmail(auth, actionCode, continueUrl, lang) {
    fire
      .auth()
      .applyActionCode(actionCode)
      .then(function (resp) {})
      .catch(function (error) {});
  }

  render() {
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
              <div className="conEmail">
                <h3>Confirm your email address</h3>
                <p>
                  We sent a confirmation email to:<br></br>
                  <h2>Email:- {this.email}</h2>
                </p>
                <p>
                  Check your email and click on the confirmation link to
                  continue.
                </p>
                <Button
                  type="submit"
                  className="btn btn-primary mr-4"
                  onClick={this.handleVerifyEmail}
                >
                  Resend Mail
                </Button>
                <Button
                  type="submit"
                  className="btn btn-cancel back"
                  onClick={this.loginClientRoute}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    saveUser: state.userList.saveUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResendEmail: (data) => dispatch(fetchResendEmail(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ConfirmEmail)
);
