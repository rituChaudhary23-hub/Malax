import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import signUp from "../../assets/images/signUp.png";
import fire from "../../utils/config/fire";
import { fetchResetPassword } from "../../redux/actions/userList.action";

class ResetPassword extends Component {
  actionCode = "";
  continueUrl = "";
  email = "";

  constructor(props) {
    super(props);
    this.state = {
      fields: {
        newPassword: "",
      },
      errors: {
        newPassword: "",
        conPassword: "",
      },
    };
  }
  routeChange() {
    window.location.href = "/";
  }

  resetPassword = (e) => {
    e.preventDefault();

    var auth = fire.auth();
    var _actionCode = window.location.search.split("&")[2].split("=")[1];
    var _continueUrl = window.location.search.split("&")[3].split("=")[1];
    var _pass = this.state.fields.newPassword;
    var lang = "en";
    if (this.handleValidation()) {
      var accountEmail;
      auth.verifyPasswordResetCode(_actionCode).then(function (email) {
        var accountEmail = email;
        if (email) {
          auth
            .confirmPasswordReset(_actionCode, _pass)
            .then(function (resp) {})
            .catch(function (error) {});
        }
      });
    }
  };

  handleSignupKeyup(field, e) {
    this.setState((prevState) => {
      let errors = Object.assign({}, prevState.errors);
      errors[field] = "";
      return { errors };
    });
  }

  //signup form validation
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!fields["newPassword"]) {
      formIsValid = false;
      errors["newPassword"] = "Password is required.";
    }

    if (
      typeof fields["newPassword"] !== "undefined" &&
      fields["newPassword"] !== ""
    ) {
      if (
        !fields["newPassword"].match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        )
      ) {
        formIsValid = false;
        errors["newPassword"] =
          "Password should have one uppercase letter one number and one special character,minimum 8 characters";
      }
    }

    //Confirm Password
    if (
      typeof fields["conPassword"] !== "undefined" &&
      fields["conPassword"] !== ""
    ) {
      if (fields["conPassword"] !== fields["newPassword"]) {
        formIsValid = false;
        errors["conPassword"] = "Passwords don't match";
      }
    } else {
      formIsValid = false;
      errors["conPassword"] = "Confirm Password is Required";
    }

    this.setState({ errors: errors });
    return formIsValid;
  };
  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    const { submitting } = this.props;
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-div">
                <div className="log-in-inner signUp sign-first">
                  <h3 class="text-center">Reset Password</h3>
                  <p>Enter your New password.</p>
                  <Form>
                    <div className="log-in-form">
                      <div className="form-group">
                        <label>New Password</label>
                        <Form.Field>
                          <Input
                            className="form-control"
                            id="password"
                            fullWidth={true}
                            name="password"
                            type="password"
                            placeholder="Password"
                            margin={"normal"}
                            onChange={this.setFormValue.bind(
                              this,
                              "newPassword"
                            )}
                            onKeyUp={this.handleSignupKeyup.bind(
                              this,
                              "newPassword"
                            )}
                          />

                          <span style={{ color: "red" }}>
                            {this.state.errors["newPassword"]}
                          </span>
                        </Form.Field>
                      </div>
                      <div className="form-group">
                        <label>Password Confirmation</label>
                        <Form.Field>
                          <Input
                            className="form-control"
                            id="password"
                            type="password"
                            margin={"normal"}
                            placeholder="Confirm Password"
                            onChange={this.setFormValue.bind(
                              this,
                              "conPassword"
                            )}
                            onKeyUp={this.handleSignupKeyup.bind(
                              this,
                              "conPassword"
                            )}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["conPassword"]}
                          </span>
                        </Form.Field>
                      </div>
                      <br></br>
                    </div>
                  </Form>
                </div>
                <div className="text-center sign-up-button sign-first">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="btn btn-primary register mr-4"
                    onClick={this.resetPassword}
                  >
                    Reset Password
                  </Button>
                  <Button
                    type="submit"
                    className="btn btn-white back"
                    onClick={this.routeChange}
                  >
                    Cancel
                  </Button>
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

const mapStateToProps = (state, ownProps) => {
  return {
    resetPassword: state.userList.resetPassword,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchResetPassword: (data) => dispatch(fetchResetPassword(data)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ form: "ResetPassword" })(ResetPassword))
);
