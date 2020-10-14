import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        phone: "",
      },
    };
  }

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.Verifymodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm phone number</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p className="confirmation">
                  A text message containing a verification code will be sent to
                  this phone number for cofirmation.
                </p>
              </div>

              <div className="col-lg-4 col-md-6 col-6">
                <div className="modCon">
                  <h6> Phone Number</h6>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 col-6">
                <input
                  className="login-form-textfield form-control"
                  id="number"
                  fullWidth={true}
                  name="number"
                  type="number"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="button"
              className="btn btn-sm btn-primary"
              disabled={this.state.fields.phone.length <= 7}
            >
              Verify{" "}
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

export default Verification;
