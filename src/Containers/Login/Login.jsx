import React, { Component } from "react";
import { Link } from "react-router-dom";
import main from "../../assets/images/main.jpeg";

import { Button, Form, Input } from "semantic-ui-react";
import "../../assets/scss/style.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  theparistRoute = () => {
    window.location.href = "/theparist-profile";
  };

  adminRoute = () => {
    window.location.href = "/dashboard";
  };
  render() {
    return (
      <div>
        <div className="left-banner-img">
          <img src={main} alt="" className="left-banner-log" />
        </div>
        <div></div>
        <div>
          <h2>Log in</h2>
          <p>
            Please sign in to continue therapy with Malax. Need to create a{""}
            <Link to="/register"> Malax Account</Link>{" "}
          </p>
        </div>
        <Form>
          <Form.Field>
            <label>Email</label>
            <Input
              className="login-form-textfield"
              id="email"
              fullWidth={true}
              name="email"
              type="email"
              //   margin={"normal"}
            />
          </Form.Field>

          <Form.Field>
            <label>Password</label>
            <Input
              className="login-form-textfield"
              id="password"
              fullWidth={true}
              name="password"
              margin={"normal"}
            />
          </Form.Field>

          <div className="form-button log-btns">
            <p className="pr-3">
              <Link to="/forgot-password"> Forgot Password</Link>
            </p>

            <span className="ui green button btn btn-primary btn-md w-40 mr-0">
              <Link to="/client-profile">Log In As Client</Link>
            </span>
            <Button
              className="ui green button btn btn-primary btn-md w-40 mr-0"
              onClick={this.theparistRoute}
            >
              Log In As Theparist
            </Button>
            <Button
              className="ui green button btn btn-primary btn-md w-40 mr-0"
              onClick={this.adminRoute}
            >
              Log In As Admin
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Login;
