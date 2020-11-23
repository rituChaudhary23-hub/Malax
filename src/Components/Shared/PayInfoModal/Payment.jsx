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

  //validation
  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Password
    if (!fields["Password"]) {
      formIsValid = false;
      errors["password"] = "Password is required.";
    }

    if (
      typeof fields["password"] !== "undefined" &&
      fields["password"] !== ""
    ) {
      if (
        !fields["password"].match(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        )
      ) {
        formIsValid = false;
        errors["password"] =
          "Password should have one uppercase letter one number and one special character,minimum 8 characters";
      }
    }

    //last_name
    if (!fields["LastName"]) {
      formIsValid = false;
      errors["lastName"] = "required*";
    }

    //first name
    if (!fields["FirstName"]) {
      formIsValid = false;
      errors["firstName"] = "required*";
    }

    //Confirm Password
    if (
      typeof fields["conPassword"] !== "undefined" &&
      fields["conPassword"] !== ""
    ) {
      if (fields["conPassword"] !== fields["Password"]) {
        formIsValid = false;
        errors["conPassword"] = "Passwords don't match";
      }
    } else {
      formIsValid = false;
      errors["conPassword"] = "Confirm Password is Required";
    }

    //Email
    if (!fields["Email"]) {
      formIsValid = false;
      errors["email"] = "Email is required";
    }

    if (typeof fields["email"] !== "undefined" && fields["email"] !== "") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
    }

    this.setState({ errors: errors });
    return formIsValid;
  };

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
                    Card number ritu
                  </label>
                  <input type="tel" class="form-control" />
                </div>
              </div>{" "}
              <div class="col-sm-6 pb-3 pr-3">
                <div class="form-group">
                  <label for="usr" class="chkBox">
                    CVV Number
                  </label>
                  <input type="number" pattern="[0-3]*" inputmode="numeric" class="form-control" maxlength="3" />
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
