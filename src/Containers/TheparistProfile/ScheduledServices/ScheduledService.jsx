import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import RequestService from "./RequestService/RequestService";
import Appointment from "./Appointments/Appointment";
const panes = [
  {
    menuItem: "My Appointments",
    render: () => (
      <Tab.Pane attached={false}>
        <Appointment />
      </Tab.Pane>
    ),
  },
  {
    menuItem: "Requests",
    render: () => (
      <Tab.Pane attached={false}>
        <RequestService />
      </Tab.Pane>
    ),
  },
];
class ScheduleService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainBlock">
        <div>
          <Tab menu={{ secondary: true }} panes={panes} />
        </div>
      </div>
    );
  }
}

export default ScheduleService;
