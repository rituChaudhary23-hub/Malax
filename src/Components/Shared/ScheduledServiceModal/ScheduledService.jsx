import React, { Component, Fragment } from "react";
import {
  fetchScheduledServices,
} from "../../../redux/actions/therapist.action";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";

export class ScheduledService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields:{
        clientScheduleId: 0,
        TherapistId: 0,
        status: 0,
        From:"",
        ActionBy:""
      }
    };
  }
 //time-from
 onChangeFromTime = (time) => {
  this.state.fields.From = time.target.value;
};
  render() {
    return (
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
            {/* <Modal.Title>Schedule Service</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
            <div class="row">
              <div class="col-lg-4 col-md-6 col-6">
                <div class="modCon">
                  <h6>Scheduled Service Time :</h6>
                </div>
              </div>
              <div class="col-lg-8 col-md-6 col-6">
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
    fetchScheduledServices: (data) => dispatch(fetchScheduledServices(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduledService)
);
