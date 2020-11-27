import React, { Component, Fragment } from "react";
import Header from "../../../../Components/Shared/Header";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Table, Modal, Label, Button } from "semantic-ui-react";
import ScheduledService from "../../../../Components/Shared/ScheduledServiceModal/ScheduledService";
import {
  fetchServiceDetails,
  fetchServiceStatus,
  fetchClientTherapistDetails,
} from "../../../../redux/actions/clientSchedule.action";

class ScheduleServiceDetail extends Component {
  _status: any;
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
    window.location.href = "/theparist-profile";
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

  componentDidMount = async () => {
    debugger;
    var data2 = parseInt(this.props.location.search.split("=")[1]);
    var stats = this.props.saveAppointments.data.Data.AllClientAppointments.filter(
      (x) => x.ClientScheduleId == data2
    )[0];
    debugger;
    this.state.fields.clientScheduleId = data2;
    this.state.fields.status = stats.Status.GlobalCodeId;

    var clientIdData = this.props.saveAppointments.data.Data.AllClientAppointments.filter(
      (x) => x.ClientId == stats.ClientId && x.ClientScheduleId == data2
    )[0];
    this.state.fields.clientId = clientIdData.ClientId;
    var details = await this.props.fetchServiceDetails(this.state.fields);
    this.props.fetchServiceStatus(this.state.fields);

    //get-status-message
    var statusMessage = await this.props.getServiceStatus;
    this._status = statusMessage.Message;

    //get-of service-details
    this.props.fetchClientTherapistDetails(this.state.fields);
  };

  render() {
    console.log("getServiceDetails", this.props.getServiceDetails.data);
    console.log("saveService------", this.props.saveService);
    return (
      <div>
        <Header />
        <section className="therapistProDes serDetScr">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Service Detail Screen ritu </h2>
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
                      {this.props.getServiceDetails.Data.LocationType}&nbsp;in
                      the &nbsp;
                      {this.props.getServiceDetails.Data.GeneralLocation}
                      &nbsp;Area
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <div>
                      <div className="serDetDes schYet">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="thisSer">
                              <h5>{this._status}</h5>
                            </div>
                          </div>
                          <div className="col-sm-4 text-right">
                            <Button
                              className="btn btn-primary "
                              data-toggle="modal"
                              data-target="#canSer"
                              onClick={this.ShowServiceModal}
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

                  {/* <ScheduledService
                    scheduleModal={this.state.service}
                    toggle={this.closeServiceModal}
                  /> */}
                  <Fragment>
                    <Modal
                      show={this.props.scheduleModal}
                      onHide={this.props.toggle}
                      size="lg"
                      className="custom-modal"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                    >
                      <Modal.Header closeButton>
                        <Modal.Title>Schedule Service</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div className="row">
                          <div className="col-lg-4 col-md-6 col-6">
                            <div className="modCon">
                              <h6>Scheduled Service Time :</h6>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-6 col-6">
                            <input
                              type="time"
                              className="form-control date"
                              step="900"
                              id="time"
                              fullWidth={true}
                              name="time"
                              onChange={this.onChangeFromTime}
                            />
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <button
                          color="blue"
                          type="button"
                          className="btn btn-sm btn-primary"
                          onClick={this.deleteUser}
                        >
                          Scheduled
                        </button>
                        <button
                          color="grey"
                          type="button"
                          className="btn btn-sm btn-white"
                          onClick={this.close}
                        >
                          Cancel
                        </button>
                      </Modal.Footer>
                    </Modal>
                  </Fragment>
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

    saveAppointments: state.therapistReducer.saveAppointments,
    getServiceStatus: state.clientScheduleReducer.getServiceStatus,
    getServiceDetails: state.clientScheduleReducer.getServiceDetails,
    // saveService:state.therapistReducer.saveService
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServiceDetails: (data) => dispatch(fetchServiceDetails(data)),
    fetchServiceStatus: (data) => dispatch(fetchServiceStatus(data)),
    fetchClientTherapistDetails: (data) =>
      dispatch(fetchClientTherapistDetails(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleServiceDetail)
);
