import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.imagemodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Upload Photo ID</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p className="confirmation">
                  Please upload a photo of your current ID card (e.g., driver's
                  license). This will be used by Malax staff when reviewing your
                  profile but will not be shared with clients.
                </p>
              </div>

              <div className="col-lg-8 col-md-6 col-6">
                <input
                  className="login-form-textfield form-control"
                  id="file"
                  fullWidth={true}
                  type="file"
                  multiple
                  ref="fileInput"
                  onChange={this.onFileUploadChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="button"
              className="btn btn-sm btn-primary"
              disabled={true}
            >
              Upload Image from Computer
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
export default Image;
