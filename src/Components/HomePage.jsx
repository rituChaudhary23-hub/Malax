import React, { Component } from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { history } from "../../src/store/history";

const options = [
  { key: 1, text: "Register as a Client", value: "/register" },
  { key: 2, text: "Register as a Theparist", value: "/theparist-register" },
  { key: 3, text: "LogIn As Client", value: "/login" },
  { key: 4, text: "LogIn As Theparist", value: "/login" },
  { key: 5, text: "LogIn As Admin", value: "/login" },
];
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChanges = (e, { value }) => {
    history.push(value);
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <div className="left-banner-img">
          {/* <img src={main} alt="" className="left-banner-log" /> */}
        </div>
        <h2> Welcome to Malax Services</h2>
        <div>
          <Menu>
            <Dropdown
              className="dropNav"
              text="SignUp/SignIn"
              options={options}
              onChange={this.handleChanges}
              simple
              item
            />
          </Menu>
        </div>
      </div>
    );
  }
}

export default HomePage;
