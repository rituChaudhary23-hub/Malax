import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";

export class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.agreemodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Malax Massage Therapist Agreement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p className="confirmation">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  tellus nulla volutpat risus id adipiscing leo tristique.
                  Sollicitudin ac rhoncus posuere bibendum aliquet elementum
                  viverra volutpat. Amet libero in eu, ut erat platea laoreet.
                  Augue scelerisque nunc adipiscing ultrices orci, sollicitudin.
                  Sit egestas ultricies ipsum, posuere ut bibendum semper. Non
                  nibh nibh accumsan metus pharetra integer aliquam vitae.{" "}
                  <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. In tellus nulla volutpat risus id adipiscing leo
                  tristique. Sollicitudin ac rhoncus posuere bibendum aliquet
                  elementum viverra volutpat. Amet libero in eu, ut erat platea
                  laoreet. Augue scelerisque nunc adipiscing ultrices orci,
                  sollicitudin. Sit egestas ultricies ipsum, posuere ut bibendum
                  semper. Non nibh nibh accumsan metus pharetra integer aliquam
                  vitae.
                </p>
              </div>

              <div className="col-sm-12 mt-4">
                <div className="form-check form-check-inline">
                  <label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="chk_red"
                    />
                    <span className="form-check-label" for="chk_red">
                      I confirm that I have read and agree to the terms above
                    </span>
                  </label>
                </div>
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
              I Agree
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

export default Agreement;
