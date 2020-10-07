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
      <div>
        <Header />
        <section className="therapistProDes">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Therapist Profile</h2>
              <div className="scheduledServices">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="thrprofile">
                      <ul className="nav nav-pills">
                        <Tab menu={{ secondary: true }} panes={panes} />
                      </ul>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>
        </section>{" "}
      </div>
    );
  }
}

export default UpdateTheparistProfile;
