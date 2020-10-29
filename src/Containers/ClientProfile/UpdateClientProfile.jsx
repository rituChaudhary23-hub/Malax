import React, { Component } from "react";
import Header from "../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";
import { Button, Form, Input } from "semantic-ui-react";

import PersonalInfo from "./PersonalInfo/PersonalInfo";
import History from "./MediaclHistory/History";
import Condition from "./MedicalCondition/Condition";
import Location from "./Locations/Location";
import Massage from "./Massage/Massage";

import { withRouter } from "react-router";
import { connect } from "react-redux";

class UpdateClientProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  routeChange() {
    window.location.href = "client-service-request";
  }

  render() {
    let panes = [
      {
        menuItem: "Personal Information",
        render: () => (
          <Tab.Pane attached={false}>
            <PersonalInfo name="ritu" />
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

    return (
      <div>
        <Header />
        <section className="therapistProDes TheraPro ">
          <div className="card">
            <div className="card-body">
              <div className="row pb-3">
                <div className="col-sm-6">
                  <h2 className="card-title pb-0">Client Profile</h2>
                </div>
                <div className="col-sm-6 text-sm-right">
                  <Button
                    className="btn btn-primary"
                    onClick={this.routeChange}
                  >
                    Schedule A New Service
                  </Button>
                </div>
              </div>
              <div className="scheduledServices">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="thrprofile">
                      <ul className="nav nav-pills">
                        <Tab
                          //  activeIndex={tabIndex()}
                          menu={{ secondary: true }}
                          panes={panes}
                        />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateClientProfile)
);
