import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        therapistPaymentInfoId: 0,
      therapistId: 0,
        city: "",
        address: "",
        cardExpiration: "",
        cardHolderName: "",
        zipCode: 0,
        cardNumber: "",
        cvvNumber: 0,
        actionBy: ""
           
      },
      errors: {
        cardExpiration: "",
        city: "",
        address: "",
        cardHolderName: "",
        zipCode: "",
        cardNumber: "",
        cvvNumber: "",
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
              disabled={this.state.fields.cardHolderName.length < 5}
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
