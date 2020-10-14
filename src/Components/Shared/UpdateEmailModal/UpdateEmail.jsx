import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";

class UpdateEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        email: "",
      },
    };
  }
  render() {
    return (
      <Fragment>
        <form>
          <Modal
            show={this.props.modal}
            onHide={this.props.toggle}
            size="lg"
            className="custom-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Update email address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12">
                  <p className="confirmation">
                    A confirmation message will be sent to your new email
                    address.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-7 mb-4">
                  <div className="modCon">
                    <h6>Current email ID :</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-5 mb-4">
                  <div className="modCon">client@aol.com</div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="modCon">
                    <h6>New email ID :</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <input
                    className="login-form-textfield form-control"
                    id="email"
                    fullWidth={true}
                    name="email"
                    type="email"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                color="blue"
                type="submit"
                className="btn btn-sm btn-primary"
                disabled={this.state.fields.email.length <= 5}
              >
                Update Email
              </button>
              <button
                color="gray"
                type="submit"
                className="btn btn-sm btn-white"
                onClick={this.close}
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        </form>
      </Fragment>
    );
  }
}

export default UpdateEmail;
