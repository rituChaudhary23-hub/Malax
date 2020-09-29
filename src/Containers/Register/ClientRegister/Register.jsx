import React, { Component } from "react";
import main from "../../../assets/images/main.jpeg";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "semantic-ui-react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  emailRoute = () => {
    window.location.href = "/confirm-email";
  };
  render() {
    return (
      <div>
        <div className="left-banner-img">
          <img src={main} alt="" className="left-banner-log" />
        </div>
        <div>
          <h2>Welcome to Malax</h2>
          <p>
            Already registered click here to
            <Link to="/login">Login</Link>
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

          <Form.Field>
            <lable>Password</lable>
            <Input
              className="login-form-textfield"
              id="password"
              name="password"
              margin={"normal"}
            />
          </Form.Field>
          <Form.Field>
            <lable>Password Confirmation</lable>
            <Input
              className="login-form-textfield"
              id="password"
              name="password"
              margin={"normal"}
            />
          </Form.Field>
          <Form.Field>
            <lable>First Name</lable>
            <Input
              className="login-form-textfield"
              id="name"
              name="name"
              margin={"normal"}
            />
          </Form.Field>
          <Form.Field>
            <lable>Last Name</lable>
            <Input
              className="login-form-textfield"
              id="name"
              fullWidth={true}
              name="name"
              margin={"normal"}
            />
          </Form.Field>
          <Form.Field>
            <lable>Zip Code</lable>
            <Input
              className="login-form-textfield"
              id="zip"
              fullWidth={true}
              name="zip"
              margin={"normal"}
            />
          </Form.Field>

          <div className="form-button log-btns">
            <p className="pr-3">
              Malax is not yet available in your area. You can submit this form,
              and we will be happy to notify you when Malax is available in your
              ZIP code
            </p>

            <Button
              className="ui green button btn btn-primary btn-md w-40 mr-0"
              onClick={this.emailRoute}
            >
              Register as a Client
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default Register;
