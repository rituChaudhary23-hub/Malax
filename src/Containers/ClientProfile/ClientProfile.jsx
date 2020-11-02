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
    // window.onbeforeunload = function() { return "Your work will be lost."; };

    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <section class="therapistPro">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="therapistProInner">
                  <ul class="nav nav-pills">
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

export default ClientProfile;
