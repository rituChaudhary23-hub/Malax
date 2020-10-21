import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";
import logIn from "../../../assets/images/logIn.png";
import logo from "../../../assets/images/logo.png";
import { connect } from "react-redux";
import {  reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { userDetail} from ".././../../redux/actions/userList.action";


export class ConfirmEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginClientRoute = () => {
    window.location.href = "/register";
  };
  resendEmail=()=>{

  }

  render() {
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="log-in-img ">
                <img src={logIn} />
                <div className="log-in-img-overlay">
                  <img className="img2" src={logo} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="conEmail">
                <h3>Confirm your email address</h3>
                <p>
                  We sent a confirmation email to:<br></br>
                <h2>
                  {/* {this.props.saveUser.Data.Email} */}
                </h2>
                </p>
                <p>
                  Check your email and click on the confirmation link to
                  continue.
                </p>
                <Button type="submit" className="btn btn-primary mr-4"
                onClick={this.resendEmail}
                >
                  Resend Mail
                </Button>
                <Button
                  type="submit"
                  className="btn btn-cancel back"
                  onClick={this.loginClientRoute}
                >
                  Cancel
                </Button>
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
    saveUser: state.userList.saveUser,
 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    userDetail: data => dispatch(userDetail(data)),

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmEmail)
);

