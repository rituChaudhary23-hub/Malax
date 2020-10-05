import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import Service from "./ScheduledServices/Service";
import ProfileMain from "./ClientProfileMain";
const panes = [
  {
    menuItem: "Client Profile",
    render: () => (
      <Tab.Pane attached={false}>
        <ProfileMain />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Scheduled Services",
    render: () => (
      <Tab.Pane attached={false}>
        <Service />
      </Tab.Pane>
    ),
  },
];

class ClientProfile extends Component {
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

export default ClientProfile;
