import React, { Component } from "react";
import { Redirect } from "react-router";

import { Button, Form, Input } from "semantic-ui-react";
import Header from "../../Components/Shared/Header";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  routeChange() {
    window.location.href = "/";
  }

  render() {
    return (
      <section className="log-in">
        <div className="container">
          <div className="col-sm-6">
            <div className="log-in-inner signUp forgetPassword d-none">
              <h3 className="text-center">Forgot Password</h3>
              <p>
                Enter your email. We'll send a link allowing you to reset your
                password.{" "}
              </p>
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
                      />
                    </Form.Field>
                  </div>
                  <div className="text-center sign-up-button">
                    {" "}
                    <Button
                      type="submit"
                      className="btn btn-primary register mr-4"
                    >
                      Reset Password
                    </Button>
                    <Button
                      type="submit"
                      className="btn btn-cancel back"
                      onClick={this.routeChange}
                    >
                      Cancel
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
            {/* <div className="col-sm-6">
              <div className="log-in-img">
                <img src="assets/images/signUp.png" />
                <div className="log-in-img-overlay">
                  <img src="assets/images/logo.png" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare eget odio nulla vulputate felis auctor vivamus auctor
                    congue.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
