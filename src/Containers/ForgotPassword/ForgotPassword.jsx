import React, { Component } from "react";

import { Button, Form, Input } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import signUp from "../../assets/images/signUp.png";

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
          <div className="row">
            <div className="col-sm-6">
              <div className="log-in-inner signUp sign-first">
                <h3 class="text-center">Forgot Password</h3>
                <p>
                  Enter your email. We'll send a link allowing you to reset your
                  password.
                </p>
                <Form>
                  <div className="log-in-form">
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
                    <br></br>
                  </div>
                </Form>
              </div>
              <div className="text-center sign-up-button sign-first">
                <Button type="submit" className="btn btn-primary register mr-4">
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
            </div>
            <div className="col-sm-6">
              <div className="log-in-img">
                <img src={signUp} />
                <div className="log-in-img-overlay">
                  <img src={logo} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Ornare eget odio nulla vulputate felis auctor vivamus auctor
                    congue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ForgotPassword;
