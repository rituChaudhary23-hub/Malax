import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";
import { Button, Input, Form } from "semantic-ui-react";

import { connect } from "react-redux";
import { fetchScheduledAppointment } from "../../../redux/actions/clientSchedule.action";
import { listDateFormat } from "../../../utils/dateFormat";

class EditAppointment extends Component {
  userDetail: any;
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        clientScheduleId: 0,
        clientId: 0,
      },
      time: "",
      address: "",
    };
  }

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  changeTime = (e) => {
    this.state.time = e.target.value;
    this.props.userDetail.From = this.state.time;
    this.setState({ time: this.props.userDetail.From });
  };


  updateAddress = (e) => {
    this.state.address = e.target.value;
    this.props.userDetail.StreetAddress = this.state.address;
    this.setState({ address: this.props.userDetail.StreetAddress });
  };
  editAppointment = () => {
    this.props.fetchScheduledAppointment(this.state.fields);
  };

  render() {
    const { submitting } = this.props;
    this.userDetail = this.props.userDetail;
    console.log("data-new---------", this.userDetail);
    return (
      <Fragment>
        <Form autoComplete="off">
          <Modal
            show={this.props.editModal}
            onHide={this.props.toggle}
            size="lg"
            className="custom-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Scheduled Appointments</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12">
                  <p className="confirmation">Edit Scheduled Appointments</p>
                </div>
                <div className="col-lg-4 col-md-6 col-7 mb-4">
                  <div className="modCon">
                    <h6>Date </h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-5 mb-4">
                  <div className="modCon">
                    <input
                      type="date"
                      name="date"
                      className="login-form-textfield form-control"
                      id="date"
                      value={listDateFormat(this.userDetail.ServiceDate).convertToDateTime}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="modCon">
                    <h6>Service Time</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <input
                    className="login-form-textfield form-control"
                    id="time"
                    fullWidth={true}
                    name="time"
                    type="time"
                    value={this.userDetail.From}
                    onChange={this.changeTime}
                  />
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="modCon">
                    <h6>Address</h6>
                  </div>{" "}
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <textarea
                    className="form-control textArea"
                    rows="4"
                    id="comment"
                    placeholder="Enter your Addresas"
                    name="address"
                    onChange={this.updateAddress}
                    value={this.userDetail.StreetAddress}
                    autoComplete="false"
                  ></textarea>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                className="btn btn-primary register mr-4"
                onClick={this.editAppointment}
              >
                Update
              </Button>
              <button
                color="gray"
                type="submit"
                className="btn btn-sm btn-white"
                onClick={this.props.toggle}
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScheduledAppointment: (data) =>
      dispatch(fetchScheduledAppointment(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditAppointment)
);
