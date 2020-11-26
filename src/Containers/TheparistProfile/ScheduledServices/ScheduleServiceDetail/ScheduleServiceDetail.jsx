import React, { Component } from "react";
import Header from "../../../../Components/Shared/Header";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Table, Modal, Label, Button } from "semantic-ui-react";
import ScheduledService from "../../../../Components/Shared/ScheduledServiceModal/ScheduledService";
// import { fetchServiceDetails,fetchServiceStatus } from "../../../redux/actions/clientSchedule.action";


class ScheduleServiceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelModal: false,
      service: false,

      fields: {
        clientScheduleId: 0,
        clientId: 0,
        status: 0,
      },
    };
  }
  back() {
    window.location.href = "/client-profile";
  }
  ShowServiceModal = () => {
    this.setState({ service: true });
  };
  closeServiceModal = () => {
    this.setState({ service: false });
  };
  ShowCancelModal = () => {
    this.setState({ cancelModal: true });
  };
  closeCancelModal = () => {
    this.setState({ cancelModal: false });
  };

  componentDidMount = () => {
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    var data2 = parseInt(this.props.location.search.split("=")[1]);
    var stats = this.props.getAppointment.token.Data.AllClientAppointments.filter(
      (x) => x.ClientScheduleId == data2
    )[0].Status.GlobalCodeId;
    this.state.fields.clientScheduleId = data2;
    this.state.fields.status = stats;
    this.props.fetchServiceDetails(this.state.fields);
    this.props.fetchServiceStatus(this.state.fields)
  };

  render() {
    console.log(" getAppointment------", this.props.getAppointment);
    return (
      <div>
        <Header />
        <section className="therapistProDes serDetScr">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Service Detail Screen </h2>
              <div className="row">
                <div className="col-sm-12">
                  <div className="serDetDes">
                    <p>
                     
                      {this.props.getServiceDetails.Data.Timelength}
                      {""}
                      &nbsp;
                      {this.props.getServiceDetails.Data.MassageType} &nbsp; on
                      &nbsp;
                      {this.props.getServiceDetails.Data.ServiceDate} &nbsp;
                      between &nbsp;
                      {this.props.getServiceDetails.Data.To} &nbsp;
                      {""}
                      {""}- &nbsp;
                      {this.props.getServiceDetails.Data.From}
                    </p>
                    <p>
                     
                      {this.props.getServiceDetails.Data.ClientGender}
                      &nbsp;Client with therapist &nbsp;
                      {this.props.getServiceDetails.Data.TherapistGender}&nbsp;
                      only.
                    </p>
                    <p>
                      {/* At home in the town - Heights area. */}
                      {this.props.getServiceDetails.Data.LocationType}&nbsp;in the &nbsp;
                      {this.props.getServiceDetails.Data.GeneralLocation}&nbsp;Area
                      
                      </p>
                  </div>

                  <br></br>
                  <div>
                    <div>
                      <div className="serDetDes schYet">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="thisSer">
                              <h5>
                                This service has not been scheduled yet.
{/* {this.props.getServiceStatus.Data.Message} */}

                              </h5>
                            </div>
                          </div>
                          <div className="col-sm-4 text-right">
                            <Button
                              className="btn btn-primary "
                              data-toggle="modal"
                              data-target="#canSer"
                              onClick={() => this.ShowServiceModal()}
                            >
                              Schedule service
                            </Button>
                          </div>
                        </div>
                      </div>
                      <section className="cltThrp serDetScr">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-6">
                              <h3 className="pb-2 pl-4">Client </h3>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="pb-2">Therapist </h3>
                            </div>
                            <div className="col-sm-12">
                              <div className="cltThrpone">
                                <Table celled className="table ">
                                  <Table.Header>
                                    <Table.Row>
                                      <Table.HeaderCell>
                                        Client name
                                      </Table.HeaderCell>
                                      <Table.HeaderCell>
                                        Therapist name
                                      </Table.HeaderCell>
                                    </Table.Row>
                                  </Table.Header>
                                  <Table.Body>
                                    <Table.Row>
                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>Location street address</label>
                                        <br></br>
                                        <label>Client rating</label>
                                        <br></br>
                                        <label>Status</label>
                                      </Table.Cell>

                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>Location street address</label>
                                        <br></br>
                                        <label>Client rating</label>
                                        <br></br>
                                        <label>Status</label>
                                      </Table.Cell>
                                    </Table.Row>
                                  </Table.Body>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div>
                        <Button
                          classNameName="ui green button btn btn-primary btn-md w-40 mr-0"
                          onClick={this.back}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  </div>
                 
                  <ScheduledService
                    scheduleModal={this.state.service}
                    toggle={this.closeServiceModal}
                  />
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
  console.log("Service--Detail", state);
  return {
    user: state.user.user,
    getAppointment: state.clientScheduleReducer.getAppointment,
    getServiceStatus:state.clientScheduleReducer.getServiceStatus,
    getServiceDetails: state.clientScheduleReducer.getServiceDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // fetchServiceDetails: (data) => dispatch(fetchServiceDetails(data)),
    // fetchServiceStatus:(data)=> dispatch(fetchServiceStatus(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleServiceDetail)
);
