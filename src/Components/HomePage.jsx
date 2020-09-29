import React, { Component } from "react";
import { Button } from "semantic-ui-react";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  registerClientRoute = () => {
    window.location.href = "/register";
  };

  registerTheparistRoute = () => {
    window.location.href = "/theparist-register";
  };
  loginClientRoute = () => {
    window.location.href = "/login";
  };
  loginTheparistRoute = () => {
    window.location.href = "/login";
  };
  loginRoute = () => {
    window.location.href = "/login";
  };
  render() {
    return (
      <div>
        <Button
          className="ui green button btn btn-primary btn-md w-40 mr-0"
          onClick={this.registerClientRoute}
        >
          Register as a Client
        </Button>{" "}
        <Button
          className="ui green button btn btn-primary btn-md w-40 mr-0"
          onClick={this.registerTheparistRoute}
        >
          Register as a Theparist
        </Button>{" "}
        <Button
          className="ui green button btn btn-primary btn-md w-40 mr-0"
          onClick={this.loginClientRoute}
        >
          LogIn As Client
        </Button>{" "}
        <Button
          className="ui green button btn btn-primary btn-md w-40 mr-0"
          onClick={this.loginTheparistRoute}
        >
          LogIn As Theparist
        </Button>{" "}
        <Button
          className="ui green button btn btn-primary btn-md w-40 mr-0"
          onClick={this.loginRoute}
        >
          LogIn As Admin
        </Button>
      </div>
    );
  }
}

export default HomePage;
