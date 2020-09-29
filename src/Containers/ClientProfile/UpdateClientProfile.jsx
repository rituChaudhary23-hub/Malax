import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import { Button, Form, Input } from "semantic-ui-react";

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import History from "./MediaclHistory/History";
import Condition from "./MedicalCondition/Condition";
import Location from "./Locations/Location";
import Massage from "./Massage/Massage";

const panes = [
  {
    menuItem: "Personal Information",
    render: () => (
      <Tab.Pane attached={false}>
        <PersonalInfo />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Medical History",
    render: () => (
      <Tab.Pane attached={false}>
        <History />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Medical Conditions",
    render: () => (
      <Tab.Pane attached={false}>
        <Condition />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Massage Preferences",
    render: () => (
      <Tab.Pane attached={false}>
        <Massage />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Locations",
    render: () => (
      <Tab.Pane attached={false}>
        <Location />
      </Tab.Pane>
    ),
  },
];

class UpdateClientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  routeChange() {
    window.location.href = "client-service-request";
  }
  render() {
    return (
      <div className="mainBlock">
        <Header />
        <h2> Client Profile</h2>
        <div className="col-sm-6 text-sm-right">
          <Button
            className="ui green button btn btn-primary btn-md w-40 mr-0"
            onClick={this.routeChange}
          >
            Schedule A New Service
          </Button>
        </div>
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    );
  }
}

export default UpdateClientProfile;
