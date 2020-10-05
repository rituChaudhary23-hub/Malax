import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import ScheduleService from "../TheparistProfile/ScheduledServices/ScheduledService";
import TheparistProfileMain from "./TheparistProfileMain";
const panes = [
  {
    menuItem: "Theparist Profile",
    render: () => (
      <Tab.Pane attached={false}>
        <TheparistProfileMain />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Scheduled Services",
    render: () => (
      <Tab.Pane attached={false}>
        <ScheduleService />
      </Tab.Pane>
    ),
  },
];

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainBlock">
        <Header />
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    );
  }
}

export default Profile;
