import React, { Component } from "react";
import { Redirect } from "react-router";

import { Button, Form, Input } from "semantic-ui-react";
import Header from "../../Components/Shared/Header";

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  routeChange() {
    window.location.href = "/";
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <h2>Forgot Password</h2>
          <p>
            Enter your email. We'll send a link allowing you to reset your
            password.
          </p>
        </div>
        <Form>
          <Form.Field>
            <lable>Email</lable>
            <Input
              className="login-form-textfield"
              id="email"
              fullWidth={true}
              name="email"
              type="email"
              margin={"normal"}
            />
          </Form.Field>

          <div className="form-button log-btns">
            <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
              Reset Password
            </Button>
            <Button
              className="ui green button btn btn-primary btn-md w-40 mr-0"
              onClick={this.routeChange}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default ForgotPassword;
