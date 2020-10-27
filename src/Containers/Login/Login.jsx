import React, { Component } from "react";
import { Link } from "react-router-dom";
import { history } from "../../store/history";
import signUp from "../../assets/images/signUp.png";
import logo from "../../assets/images/logo.png";
import { reduxForm, Field } from "redux-form";
import { required, email } from "redux-form-validators";
import { loginUser } from "../../redux/actions/user.action";
import { connect } from "react-redux";
import {
  fetchCategoryName,
} from "../../redux/actions/global.action";

import { Dropdown, Menu, Button, Form, Input } from "semantic-ui-react";

class Login extends Component {
  golbalID = 0;
dropVal:any;
  constructor(props) {
    super(props);
    this.state = {
      name: "UserAccountTypes",
      CodeName: "Therapist ",
      CodeName: "Client",
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
  componentDidMount = async() => {
    var user = JSON.parse(sessionStorage.getItem("savedUser"));
    console.log("user-token", user);
    debugger
   var data = await this.props.fetchCategoryName(this.state.name);
   debugger
 if(data != false){
    this.dropVal = data.data.Data.globalCodeData
    console.log('aaaaaaaaa',this.dropVal);
 }
   
      // courseData = this.props.categoryName.filter(
      //   (item) => item.CodeName == this.state.CodeName
      // )[0];
   // this.golbalID = courseData.GlobalCodeId;
  };

  // componentDidMount = async () => {
  //   var data = await this.props.fetchCategoryName(this.state.name);
  //   let courseData;
  //   if (this.props.categoryName)
  //     courseData = this.props.categoryName.filter(
  //       (item) => item.CodeName == this.state.CodeName
  //     )[0];
  //   this.golbalID = courseData.GlobalCodeId;
  // };



  handleChanges = async (e, value) => {
    debugger
    console.log("event",e)
    console.log("value",value);
    var loginAs= e.target.outerText;
    loginAs = loginAs.split(' ')[2];
    console.log('loginas', loginAs);
    var globalId = this.dropVal.filter(x=>x.CodeName == loginAs)[0].GlobalCodeId;
    this.state.fields.accountTypeId = globalId;
    e.preventDefault();
    if (this.handleValidation()) {
      var res = await this.props.onLoginUser(this.state.fields, value);
      console.log("value", value);
      if (res == true) {
        this.props.history.push(value.value);
      } else {
      }
      //  window.location.reload(false);
    }
  };

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

  render() {
    const options = [
     
      { key: 2, text: "LogIn As Client", value: "/client-profile" },
      { key: 4, text: "LogIn As Theparist", value: "/theparist-profile" },
      { key: 5, text: "LogIn As Admin", value: "/dashboard" },
    ];

    console.log("options",this.props.saveUser.accountTypeId)
    const { handleSubmit, submitting } = this.props;

    console.log("props", this.props);
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="login-div">
                <Form autoComplete="off">
                  <div className="log-in-inner signUp sign-first">
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
                    <Dropdown
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
                    />
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
  console.log("####!!!!!!", state);
  return {
    formVal: state.form,
    user: state.persist["c_user"],
    usersDetails: state.user,
    saveUser: state.userList.saveUser,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (values, history) => dispatch(loginUser(values, history)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),

  };
};

// export default  reduxForm({connect(mapStateToProps, mapDispatchToProps)})(Login);
export default connect(mapStateToProps, mapDispatchToProps)(Login);
