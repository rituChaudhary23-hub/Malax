import React, { Component } from "react";
import { Link } from "react-router-dom";
import signUp from "../../assets/images/signUp.png";
import logo from "../../assets/images/logo.png";
import { email } from "redux-form-validators";
import {loginUser} from "../../redux/actions/user.action";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../redux/actions/global.action";
import fire from "../../utils/config/fire";
import { Button, Form, Input } from "semantic-ui-react";
import { toast } from "../../Components/Toast/Toast";


class Login extends Component {
  golbalID = 0;
  dropVal: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "UserAccountTypes",
      CodeName: "Therapist ",
      CodeName: "Client",
      id: "",
      fields: {
        email: "",
        password: "",
        accountTypeId: 0,
      },
      errors: {
        email: "",
        password: "",
      },
      loading: false,
    };
  }
  // componentDidMount = async () => {
  //   var user = sessionStorage.getItem("savedUser");
  //   var data = await this.props.fetchCategoryName(this.state.name);
  //   if (data != false) {
  //     this.dropVal = data.data.Data.globalCodeData;
  //   }
  // };

  // handleChanges = async (e, value) => {
  //   var loginAs = e.target.outerText;
  //   loginAs = loginAs.split(" ")[2];
  //   var globalId = this.dropVal.filter((x) => x.CodeName == loginAs)[0]
  //     .GlobalCodeId;
  //   this.state.fields.accountTypeId = globalId;
  //   e.preventDefault();
  //   if (this.handleValidation()) {
  //     var res = await this.props.onLoginUser(this.state.fields, value);
  //     if (res == true) {
  //       this.props.history.push(value.value);

  //     } else {
  //     }
  //     //  window.location.reload(false);
  //   }
  //  // e.target.className.replace('active','')
  // };
  
  handleVerifyEmail(auth, actionCode, continueUrl, lang) {
    fire
      .auth()
      .applyActionCode(actionCode)
      .then(function (resp) {})
      .catch(function (error) {});
  }


  componentWillMount() {
    if (document.URL.indexOf("resetPassword") > 0) {
      window.location.pathname = "reset-password";
    }
    else if (document.URL.indexOf("verifyEmail")) {
      var app = fire;
      var auth = app.auth();
      if (auth.currentUser) {
        this.email = auth.currentUser.email;
        sessionStorage.setItem("userEmail", auth.currentUser.email);
        sessionStorage.setItem("currentUser", auth.currentUser);
      } else {
        this.email = sessionStorage.getItem("userEmail");
      }
  
      var mode = new URLSearchParams(window.location.search).get("mode");
      var actionCode = new URLSearchParams(window.location.search).get("oobCode");
      var continueUrl = new URLSearchParams(window.location.search).get(
        "continueUrl"
      );
      var lang = new URLSearchParams(window.location.search).get("lang") || "en";
      if (actionCode && mode)
        this.handleVerifyEmail(auth, actionCode, continueUrl, lang);
    }
  }

  handleChanges = async (e) => {
    e.preventDefault();
    if (this.handleValidation()) {
      fire
        .auth()
        .signInWithEmailAndPassword(
          this.state.fields.email,
          this.state.fields.password
        )
        .then(async (u) => {
          console.log(u);
          if (u.user.emailVerified == false) {
            fire.auth().signOut();
            toast.error("Please verify your email first.");
            return;
          } else {
            var localId = u.user.uid;
            this.state.id = localId;
            var res = await this.props.loginUser(this.state.id);
            if (res != false) {
              if (res.toLowerCase() == "clients") {
                this.props.history.push("/client-profile")
              } else {
                this.props.history.push("/theparist-profile")
              }
            }
          }
          
        })
        .catch((err) => { });
    }};

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
          /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,64}$/
        )
      ) {
        formIsValid = false;
        errors["password"] =
          "Password should have one number and one special character,minimum 8 characters";
      }
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

    if (!formIsValid) {
      this.setState({ loading: false });
    }

    this.setState({ errors: errors });
    return formIsValid;
  };
  setFormValue(field, e) {
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

  render() {
    const options = [
      { key: 2, text: "LogIn As Client", value: "/client-profile" },
      { key: 4, text: "LogIn As Therapist", value: "/theparist-profile" },
      { key: 5, text: "LogIn As Admin", value: "/dashboard" },
    ];

    const { handleSubmit, submitting } = this.props;

    return (
      <section className="log-in">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-div">
                <Form autoComplete="off">
                  <div className="log-in-inner signUp sign-first logWrapper">
                    <h3 className="text-center">Log In</h3>
                    <p>
                      Please sign in to continue therapy with Malax. Need to
                      create a <Link to="/register"> Malax account?</Link>
                    </p>

                    <div className="log-in-form">
                      <div className="form-group">
                        <label>Email</label>

                        <Form.Field>
                          <Input
                            className="form-control"
                            name="email"
                            type="text"
                            onChange={this.setFormValue.bind(this, "email")}
                            onKeyUp={this.handleSignupKeyup.bind(this, "email")}
                            placeholder="Email"
                            validate={email}
                            value={this.state.fields.email}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["email"]}
                          </span>
                        </Form.Field>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <Form.Field>
                          <Input
                            className="form-control"
                            id="password"
                            type="password"
                            onChange={this.setFormValue.bind(this, "password")}
                            onKeyUp={this.handleSignupKeyup.bind(
                              this,
                              "password"
                            )}
                            fullWidth={true}
                            placeholder="Password"
                            value={this.state.fields.password}
                            name="password"
                            margin={"normal"}
                          />
                          <span style={{ color: "red" }}>
                            {this.state.errors["password"]}
                          </span>
                        </Form.Field>
                        <Link className="forgotPass" to="/forgot-password">
                          {" "}
                          Forgot Password
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="sign-up-button sign-first">
                    {/* <Dropdown
                      name="login"
                      type="submit"
                      // disabled={this.state.fields.email.length <= 5}
                      disabled={submitting}
                      className="dropNav btn-primary"
                      text="Login"
                      options={options}
                      onChange={this.handleChanges}
                      simple
                      item
                    /> */}
                    <Button onClick={this.handleChanges}>
                      Login
                    </Button>
                  </div>
                </Form>
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
const mapStateToProps = (state) => {
  return {
    formVal: state.form,
    user: state.persist["c_user"],
    usersDetails: state.user,
    saveUser: state.userList.saveUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (values, history) => dispatch(loginUser(values, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
