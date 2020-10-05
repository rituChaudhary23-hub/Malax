import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Input, Tab, Label } from "semantic-ui-react";

class TheparistRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  emailRoute = () => {
    window.location.href = "/confirm-email";
  };
  render() {
    return (
      <div className="log-in-form">
        <Form>
          <div className="form-group">
            <label>Email</label>
            <Form.Field>
              <Input
                className="form-control"
                id="email"
                fullWidth={true}
                name="email"
                type="email"
                margin={"normal"}
              />{" "}
            </Form.Field>{" "}
          </div>
          <div className="form-group">
            <label>Password</label>
            <Form.Field>
              <Input
                className="form-control"
                id="password"
                fullWidth={true}
                name="password"
                type="password"
                margin={"normal"}
              />
            </Form.Field>
          </div>
          <div className="form-group">
            <label>Password Confirmation</label>
            <Form.Field>
              <Input
                className="form-control"
                id="password"
                name="password"
                margin={"normal"}
              />
            </Form.Field>
          </div>

          <div className="form-group">
            <label>First Name</label>
            <Form.Field>
              <Input
                className="form-control"
                id="name"
                name="name"
                margin={"normal"}
              />
            </Form.Field>
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <Form.Field>
              <Input
                className="form-control"
                id="name"
                fullWidth={true}
                name="name"
                type="text"
                margin={"normal"}
              />
            </Form.Field>
          </div>

          <div className="form-group">
            <label for="sel1">Market</label>
            <select className="form-control" id="sel1">
              <option>Billings, MT</option>
              <option>Other</option>
            </select>
          </div>
          <div className="form-group">
            <p>
              Malax is not yet available in your area. You can submit this form,
              and we will be happy to notify you when Malax is available in your
              ZIP code.
            </p>
          </div>
          <div className="text-center">
            {" "}
            <Button
              type="submit"
              className="btn btn-primary register"
              onClick={this.emailRoute}
            >
              Register
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default TheparistRegister;
