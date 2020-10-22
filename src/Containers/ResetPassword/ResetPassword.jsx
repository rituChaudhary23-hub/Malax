import React, { Component } from "react";
import { connect } from "react-redux";
import {  reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { Button, Form, Input } from "semantic-ui-react";
import logo from "../../assets/images/logo.png";
import signUp from "../../assets/images/signUp.png";
import {fetchResetPassword} from "../../redux/actions/userList.action"

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        password: "",
        token:""
      },
      errors: {
        password: "",
        conPassword:""
      },
    };
  }
  routeChange() {
    window.location.href = "/";
  
  }
  resetPassword = e => {
    e.preventDefault();
this.state.fields.token = new URLSearchParams(this.props.location.search).get("Token")
    if (this.handleValidation()) {

        this.props.fetchResetPassword(this.state.fields);
        this.props.history.push("/");

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
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Password is required.";
    }

    if (
      typeof fields["password"] !== "undefined" &&
      fields["password"] !== ""
    ) {
      if (
        !fields["password"].match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        )
      ) {
        formIsValid = false;
        errors["password"] =
          "Password should have one uppercase letter one number and one special character,minimum 8 characters";
      }
    }

    //Confirm Password
    if (
      typeof fields["conPassword"] !== "undefined" &&
      fields["conPassword"] !== ""
    ) {
      if (fields["conPassword"] !== fields["password"]) {
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
    
    const { handleSubmit, pristine, reset, submitting } = this.props;
console.log("props",this.props)
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-div">
                <div className="log-in-inner signUp sign-first">
                  <h3 class="text-center">Reset Password</h3>
                  <p>
                    Enter your New  password.
                  </p>
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
                onChange={this.setFormValue.bind(this, "password")}
                onKeyUp={this.handleSignupKeyup.bind(this, "password")}
              />

              <span style={{ color: "red" }}>
                {this.state.errors["password"]}
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
                onChange={this.setFormValue.bind(this, "conPassword")}
                onKeyUp={this.handleSignupKeyup.bind(this, "conPassword")}
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
  console.log("@@@@@@>>>>>>>ritu.", state);
  return {
    resetPassword: state.userList.resetPassword,
 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchResetPassword: data => dispatch(fetchResetPassword(data)),

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ form: "ResetPassword" })(ResetPassword))
);