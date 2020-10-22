import React, { Component } from "react";
import { connect } from "react-redux";
import {  reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import signUp from "../../assets/images/signUp.png";
import {userForgotPassword} from "../../redux/actions/userList.action"

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
      },
      errors: {
        email: "",
      },
    };
  }
  routeChange() {
    window.location.href = "/";
  }

  
  forgotPassword = e => {
    e.preventDefault();

    if (this.handleValidation()) {
        this.props.userForgotPassword(this.state.fields);
    }
    
};

  setFormValue(field, e) {
    console.log("field", field);
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  handleSignupKeyup(field, e) {
    this.setState((prevState) => {
      let errors = Object.assign({}, prevState.errors);
      errors[field] = "";
      return { errors };
    });
  }

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Email is required";
    }

    if (typeof fields["email"] !== "undefined" && fields["email"] !== "") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    if (!formIsValid) {
      this.setState({ loading: false });
    }

    this.setState({ errors: errors });
    return formIsValid;
  };
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-div">
                <div className="log-in-inner signUp sign-first">
                  <h3 class="text-center">Forgot Password</h3>
                  <p>
                    Enter your email. We'll send a link allowing you to reset
                    your password.
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
                            onChange={this.setFormValue.bind(this, "email")}
                            onKeyUp={this.handleSignupKeyup.bind(this, "email")}
                            placeholder="email address"
                            value={this.state.fields.email}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["email"]}
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
                    disabled={this.state.fields.email.length <= 5}
                    className="btn btn-primary register mr-4"
                    onClick={this.forgotPassword}
                  
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
  console.log("@@@@@@>>>>>>>ritu.", state);
  return {
   userForgotPassword: state.userList.userForgotPassword,
 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userForgotPassword: data => dispatch(userForgotPassword(data)),

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ form: "ForgotPassword" })(ForgotPassword))
);