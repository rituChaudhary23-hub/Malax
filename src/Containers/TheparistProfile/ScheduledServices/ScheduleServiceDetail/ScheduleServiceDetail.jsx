import React, { Component, Fragment } from "react";
import Header from "../../../../Components/Shared/Header";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { Table, Label, Button } from "semantic-ui-react";
import { fetchScheduledServices } from "../../../../redux/actions/therapist.action";
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
      setTimeFields: {
        ClientScheduleId: 0,
        TherapistId: 0,
        Status: 0,
        From: "",
        ActionBy: "",
      },
    };
  }
  back() {
    window.location.href = "/theparist-profile";
  }
  ShowServiceModal = (data) => {
    debugger;
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

  componentWillMount = async () => {
    var data2 = parseInt(this.props.location.search.split("=")[1]);
    var stats = this.props.saveAppointments.data.Data.AllClientAppointments.filter(
      (x) => x.ClientScheduleId == data2
    )[0];
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

    // modal-fileds-params
    this.state.setTimeFields.ClientScheduleId = data2;
    this.state.setTimeFields.Status = stats.Status.GlobalCodeId;
    this.state.setTimeFields.TherapistId = stats.TherapistId;
  };

  //modal-setTime
  scheduleTime = async () => {
    var setTime = await this.props.fetchScheduledServices(
      this.state.setTimeFields
    );
    this.closeServiceModal();
  };

  onChangeFromTime = (time) => {
    this.state.setTimeFields.From = time.target.value;
  };
  render() {
    return (
      <div>
        <Header />
        <section className="therapistProDes serDetScr">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Service Detail Screen</h2>
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
                                        Client name :{" "}
                                        {
                                          this.props.getDetails.Data
                                            .ClientResponse.Name
                                        }
                                      </Table.HeaderCell>
                                      <Table.HeaderCell>
                                        Therapist name:{" "}
                                        {this.props.getDetails.Data
                                          ? this.props.getDetails.Data
                                              .TherapistResponse.Name
                                          : "Null"}
                                      </Table.HeaderCell>
                                    </Table.Row>
                                  </Table.Header>
                                  <Table.Body>
                                    <Table.Row>
                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>
                                          Location street address :{" "}
                                          {this.props.getDetails.Data
                                            ? this.props.getDetails.Data
                                                .TherapistResponse.Location
                                            : "Null"}
                                        </label>
                                        <br></br>
                                        <label>
                                          Client rating:{" "}
                                          {this.props.getDetails.Data
                                            ? this.props.getDetails.Data
                                                .TherapistResponse
                                                .TherapistRating
                                            : "Null"}
                                        </label>
                                        <br></br>
                                        <label>
                                          Status:{" "}
                                          {this.props.getDetails.Data
                                            ? this.props.getDetails.Data
                                                .TherapistResponse.Status
                                            : "Null"}
                                        </label>
                                      </Table.Cell>

                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>
                                          Location street address:{" "}
                                          {
                                            this.props.getDetails.Data
                                              .ClientResponse.Location
                                          }
                                        </label>
                                        <br></br>
                                        <label>
                                          Client rating:{" "}
                                          {
                                            this.props.getDetails.Data
                                              .ClientResponse.ClientRating
                                          }
                                        </label>
                                        <br></br>
                                        <label>
                                          Status:{" "}
                                          {
                                            this.props.getDetails.Data
                                              .ClientResponse.Status
                                          }
                                        </label>
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
                    timeDetail={this.state.fields}
                  /> */}
                  <Modal
                    show={this.state.service}
                    onHide={this.closeServiceModal}
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
                        onClick={this.scheduleTime}
                      >
                        Scheduled
                      </button>
                      <button
                        color="grey"
                        type="button"
                        className="btn btn-sm btn-white"
                        onClick={this.closeServiceModal}
                      >
                        Cancel
                      </button>
                    </Modal.Footer>
                  </Modal>
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
    getDetails: state.clientScheduleReducer.getDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServiceDetails: (data) => dispatch(fetchServiceDetails(data)),
    fetchServiceStatus: (data) => dispatch(fetchServiceStatus(data)),
    fetchClientTherapistDetails: (data) =>
      dispatch(fetchClientTherapistDetails(data)),
    fetchScheduledServices: (data) => dispatch(fetchScheduledServices(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleServiceDetail)
);
