import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";

import Licensure from "./TheparistLicensure/Licensure";
import Modalities from "./TheparistModalities/Modalities";

const panes = [
  {
    menuItem: "Licensure",
    render: () => (
      <Tab.Pane attached={false}>
        <Licensure />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Modalities",
    render: () => (
      <Tab.Pane attached={false}>
        <Modalities />
      </Tab.Pane>
    ),
  },
];

class UpdateTheparistProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainBlock">
        <Header />
        <h2> Theparist Profile</h2>

        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    );
  }
}

export default UpdateTheparistProfile;
