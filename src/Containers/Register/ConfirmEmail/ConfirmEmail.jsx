import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";
import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";
import { withRouter } from "react-router";
import fire from "../../../utils/config/fire";
import { toast } from "../../../Components/Toast/Toast";

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

  componentWillMount() {
    var app = fire;
    var auth = app.auth();
    if (auth.currentUser) {
      this.email = auth.currentUser.email;
      sessionStorage.setItem("userEmail", auth.currentUser.email);
      sessionStorage.setItem("currentUser", auth.currentUser);
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

  resendEmail = async (e) => {
    e.preventDefault();
    var actionCode = "ABC123";
    var continueUrl = "https://" + process.env.REACT_APP_FIREBASE_AUTHDOMAIN + "/__/auth/action";
    var lang = "en";

    var actionCodeSettings = {
      url: "https://" + process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
      handleCodeInApp: true,
    };

    fire.auth().onAuthStateChanged(async function (user) {
    

      var verify = await user.sendEmailVerification();
      toast.success("We sent a confirmation email.");
    });
  };

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
                  <h2>{this.email}</h2>
                </p>
                <p>
                  Check your email and click on the confirmation link to
                  continue.
                </p>
                <Button
                  type="submit"
                  className="btn btn-primary mr-4"
                  onClick={this.resendEmail}
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

export default withRouter(ConfirmEmail);
