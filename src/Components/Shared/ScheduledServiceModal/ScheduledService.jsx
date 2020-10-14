import React, { Component, Fragment } from "react";

import { Modal } from "react-bootstrap";

export class ScheduledService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
            <Modal.Title>Schedule Service</Modal.Title>
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
                  className="login-form-textfield form-control"
                  id="time"
                  fullWidth={true}
                  name="time"
                  type="time"
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
export default ScheduledService;
