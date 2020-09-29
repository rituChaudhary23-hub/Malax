import React, { Component } from "react";
import main from "../../../assets/images/main.jpeg";
import { Label, Button } from "semantic-ui-react";

export class ConfirmEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginClientRoute = () => {
    window.location.href = "/login";
  };

  render() {
    return (
      <div className="mainBlock">
        <div className="left-banner-img">
          <img src={main} alt="" className="left-banner-log" />
        </div>
        <div>
          <h2>Confirm your Email address</h2>
          <br></br>
          <Label>We sent a Confirmation email to :</Label>
          <br></br>
          <label>email@gmail.com</label>
          <br></br>
          <Label>
            Check your email and click on the confirmation to continue
          </Label>
          <br></br>
          <Button
            className="ui green button btn btn-primary btn-md w-40 mr-0"
            onClick={this.registerTheparistRoute}
          >
            Resend Email
          </Button>{" "}
          <Button
            className="ui green button btn btn-primary btn-md w-40 mr-0"
            onClick={this.loginClientRoute}
          >
            LogIn
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default ConfirmEmail;
