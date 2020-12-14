import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";

import { Button, Input, Form } from "semantic-ui-react";

import { connect } from "react-redux";
import {
  fetchDeleteAppointment,
  fetchScheduledAppointment,
} from "../../../redux/actions/clientSchedule.action";

class DeleteAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        clientScheduleId: 0,
        clientId: 0,
        actionBy: "",
      },
    };
  }

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  deleteUser = async (data) => {
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    var data = this.props.userDetail;

    this.state.fields.clientScheduleId = data;

    var aa = await this.props.fetchDeleteAppointment(this.state.fields);
    this.props.toggle();
    // this.props.fetchScheduledAppointment(data1)
  };

  render() {
    const { submitting } = this.props;
    let { userDetail } = this.props;

    return (
      <Fragment>
        <Form autoComplete="off">
          <Modal
            show={this.props.deleteModal}
            onHide={this.props.toggle}
            size="lg"
            className="custom-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Delete Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12">
                  <p className="confirmation">
                    Are you sure you want to Delete the Scheduled Service.
                  </p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                className="btn btn-primary register mr-4"
                onClick={this.deleteUser}
              >
                Delete
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
    formVal: state.form,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeleteAppointment: (data) => dispatch(fetchDeleteAppointment(data)),
    fetchScheduledAppointment: (data) =>
      dispatch(fetchScheduledAppointment(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DeleteAppointment)
);
