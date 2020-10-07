import React, { Component } from "react";
import { Link } from "react-router-dom";
import { history } from "../../store/history";
import signUp from "../../assets/images/signUp.png";
import logo from "../../assets/images/logo.png";
import { reduxForm, Field } from "redux-form";
import { FormField } from "../../Components/Shared/FormField";
import { required, email } from "redux-form-validators";

import { Dropdown, Menu, Button, Form, Input } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChanges = (e, { value }) => {
    history.push(value);
    window.location.reload(false);
  };
  render() {
    const options = [
      { key: 3, text: "LogIn As Client", value: "/client-profile" },
      { key: 4, text: "LogIn As Theparist", value: "/theparist-profile" },
      { key: 5, text: "LogIn As Admin", value: "/dashboard" },
    ];
    const { handleSubmit } = this.props;
    console.log("props", this.props);
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
            <div className="login-div">
              <div className="log-in-inner signUp sign-first">
                <h3 className="text-center">Log In</h3>
                <p>
                  Please sign in to continue therapy with Malax. Need to create
                  a <Link to="/register"> Malax account?</Link>
                </p>
                <Form onSubmit={handleSubmit}>
                  <div className="log-in-form">
                    <div className="form-group">
                      <label>Email</label>

                      <Form.Field>
                        <Input
                          className="form-control"
                          name="email"
                          // component={FormField}
                          type="text"
                          placeholder="email address"
                          validate={[email, required]}
                        />
                      </Form.Field>
                      {/* <Field
                        name="email"
                        className="form-control"
                        component={FormField}
                        type="email"
                        placeholder="Enter email"
                        validate={[required(), email()]}
                        autoFocus
                      /> */}
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Form.Field>
                        <Input
                          className="form-control"
                          id="password"
                          fullWidth={true}
                          name="password"
                          margin={"normal"}
                        />
                      </Form.Field>
                      <Link className="forgotPass" to="/forgot-password">
                        {" "}
                        Forgot Password
                      </Link>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="sign-up-button sign-first">
                <Dropdown
                  className="dropNav btn-primary"
                  text="Login"
                  options={options}
                  onChange={this.handleChanges}
                  simple
                  item
                  type="submit"
                />
              </div>
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

export default reduxForm({ form: "LoginForm" })(Login);
