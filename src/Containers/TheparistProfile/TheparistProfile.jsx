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
      <div>
        <Header />
        <section className="therapistPro">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="therapistProInner">
                  <ul className="nav nav-pills">
                    <Tab menu={{ secondary: true }} panes={panes} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Profile;
