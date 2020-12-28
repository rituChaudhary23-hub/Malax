import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";
import fire from "../../../utils/config/fire";
import { toast } from "../../../Components/Toast/Toast";
import { userDetail } from ".././../../redux/actions/userList.action";
import { fetchGlobalCodes } from ".././../../redux/actions/global.action";

import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";

class ClientRegister extends Component {
  getzipcode: any;
  dropValcode: any;
  constructor(props) {
    super(props);
    this.state = {
      tablename:"codes",
      fields: {
        id: "",
        email: "",
        password: "",
        conPassword: "",
        firstName: "",
        lastName: "",
        accountTypeId: 2,
        userVerified: "",
        userTypeId:"clients",
        modifiedBy: "",
        modifiedDate: "",
        zipCode: "",
      },

      errors: {
        email: "",
        password: "",
        conPassword: "",
        firstName: "",
        lastName: "",
      },
    };
  }
  componentWillMount = async () => {
    var zipData = await this.props.fetchGlobalCodes(this.state.tablename)
    if (zipData != false) {
      this.dropValcode = zipData.data.data;
     this.getzipcode = this.dropValcode[0].markets[0].zipCodes
    }
  }


  signupMalax = async (e) => {
    e.preventDefault();
    var app = fire;
    var auth = app.auth();
    var actionCode = "ABC123";
    var continueUrl = "https://mydemo-863e7.firebaseapp.com/__/auth/action";
    var lang = "en";
    if (this.handleValidation()) {
      fire
        .auth()
        .createUserWithEmailAndPassword(
          this.state.fields.email,
          this.state.fields.password
        )
        .then(async (u) => {
          console.log(u);
          var actionCodeSettings = {
            url: "https://mydemo-863e7.firebaseapp.com",
            mode: "verifyEmail",
            handleCodeInApp: true,
          };
          fire
            .auth()
            .currentUser.sendEmailVerification(actionCodeSettings)
            .then(async (res) => {
              var localId = u.user.uid;
              this.state.fields.id = localId;
              var verify = auth.currentUser.emailVerified;
              this.state.fields.userVerified = verify;
              var nameCreated = this.state.fields.firstName;
              this.state.fields.modifiedBy = nameCreated;
              var res = await this.props.userDetail(this.state.fields);
              if (res == true) {
                this.props.history.push("/confirm-email");
              } else {
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {});
    }
  };

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

    //last_name
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "required*";
    }

    //first name
    if (!fields["firstName"]) {
      formIsValid = false;
      errors["firstName"] = "required*";
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

    this.setState({ errors: errors });
    return formIsValid;
  };
  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //zip-code
  checkZipCode = async (e) => {
    e.preventDefault();
    var code = e.target.value;
    var zipStatus = this.getzipcode.filter(x => x == code);
    if (zipStatus.length > 0) {
      this.state.fields.zipCode = zipStatus.toString();
      

    } else {
       toast.error(
        "Malax is not yet available in your area. You can submit this form, and we will be happy to notify you when Malax is available in your ZIP code."
      ); 
    }
  };

  handleSignupKeyup(field, e) {
    this.setState((prevState) => {
      let errors = Object.assign({}, prevState.errors);
      errors[field] = "";
      return { errors };
    });
  }

  render() {
    const { submitting } = this.props;
    return (
      <div className="log-in-form">
      <div className="container-fluid noPad">
        <div className="row">
          <div className="col-md-6">
            <div className="log-in-img ">
              <img src={logIn} />
              <div className="log-in-img-overlay">
                <img className="img2" src={logo} />
              </div>
            </div>
          </div>

          <div className="col-md-6 mt-3">
            <Form className="fixHeight" autoComplete="off">
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
                    placeholder="Email"
                    onChange={this.setFormValue.bind(this, "email")}
                    onKeyUp={this.handleSignupKeyup.bind(this, "email")}
                    value={this.state.fields.email}
                  />{" "}
                  <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
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

              <div className="form-group">
                <label>First Name</label>
                <Form.Field>
                  <Input
                    className="form-control"
                    id="name"
                    name="name"
                    margin={"normal"}
                    placeholder="First Name"
                    onChange={this.setFormValue.bind(this, "firstName")}
                    onKeyUp={this.handleSignupKeyup.bind(this, "firstName")}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.errors["firstName"]}
                  </span>
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
                    placeholder="Last Name"
                    margin={"normal"}
                    onChange={this.setFormValue.bind(this, "lastName")}
                    onKeyUp={this.handleSignupKeyup.bind(this, "lastName")}
                  />
                  <span style={{ color: "red" }}>
                    {this.state.errors["lastName"]}
                  </span>
                </Form.Field>
              </div>

              <div className="form-group">
                <label>ZIP Code</label>

                <Form.Field>
                  <Input
                    className="form-control"
                    id="zip"
                    fullWidth={true}
                    name="zip"
                    placeholder="Zip Code"
                    margin={"normal"}
                    onBlur={(e) => {
                      this.checkZipCode(e);
                    }}
                    autoComplete="false"
                  />

                  <span style={{ color: "red" }}>
                    {this.state.errors["zipCodeId"]}
                  </span>
                </Form.Field>
                {/* )} */}
              </div>

              <div className="text-center">
                {" "}
                <Button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary register"
                  onClick={this.signupMalax}
                >
                  Register
                </Button>
              </div>
            </Form>
          </div>


        </div>
      </div>
      
    </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    saveUser: state.userList.saveUser,
    categoryName: state.globalReducer.categoryName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userDetail: (data, history) => dispatch(userDetail(data, history)),
    fetchGlobalCodes: (data) => dispatch(fetchGlobalCodes(data)),
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(reduxForm({ form: "ClientRegister" })(ClientRegister))
);
