import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import ManageScheduleService from "./Service/ScheduleList/ScheduleList";
import ClientList from "./Client/ClientList/ClientList";
import TheparistList from "./Theparist/TheparistList/TheparistList"
const panes = [
  {
    menuItem: "Clients",
    render: () => (
      <Tab.Pane attached={false}>
        <ClientList />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Theparists",
    render: () => (
      <Tab.Pane attached={false}>
        <TheparistList />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Scheduled Services",
    render: () => (
      <Tab.Pane attached={false}>
        <ManageScheduleService />
      </Tab.Pane>
    ),
  },
];

class Index extends Component {
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

export default Index;
