import React, { Component } from "react";
import { Link } from "react-router-dom";
import { history } from "../../store/history";
import signUp from "../../assets/images/signUp.png";
import { Dropdown, Menu, Button, Form, Input } from "semantic-ui-react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChanges = (e, { value }) => {
    console.log("values", value);
    history.push(value);
    window.location.reload(false);
  };
  render() {
    const options = [
      { key: 3, text: "LogIn As Client", value: "/client-profile" },
      { key: 4, text: "LogIn As Theparist", value: "/theparist-profile" },
      { key: 5, text: "LogIn As Admin", value: "/dashboard" },
    ];
    return (
      <section className="log-in">
        <img src={signUp} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {" "}
              <div className="log-in-inner signUp sign-first">
                <h3 className="text-center">Log In</h3>
                <p>
                  Please sign in to continue therapy with Malax. Need to create
                  a<Link to="/register"> Malax account?</Link>
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

                    <Dropdown
                      className="dropNav"
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
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
