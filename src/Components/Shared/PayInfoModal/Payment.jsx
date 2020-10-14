import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
// import { Button, Modal, Form, Input, Label, TextArea } from "semantic-ui-react";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        city: "",
        address: "",
        date: "",
        card_name: "",
        zip_code: "",
        card_no: "",
        cvv: "",
      },
      errors: {
        date: "",
        city: "",
        address: "",
        card_name: "",
        zip_code: "",
        card_no: "",
        cvv: "",
      },
      loading: false,
    };
  }

  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.paymodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Payment information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    Card Holder's name
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>{" "}
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    Card number
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>{" "}
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    CVV Number
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>{" "}
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    Card Expiration
                  </label>
                  <input type="date" class="form-control" id="date" />
                </div>
              </div>
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    City
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    Zip Code
                  </label>
                  <input type="text" class="form-control" />
                </div>
              </div>
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    Adress
                  </label>
                  <input type="textarea" class="form-control" id="date" />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="button"
              className="btn btn-sm btn-primary"
              disabled={this.state.fields.card_name.length < 5}
            >
              Connect with Stripe
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

export default Payment;
