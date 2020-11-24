import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
import { withRouter } from "react-router";
import { Button } from "semantic-ui-react";
import {
  fetchCategoryName,
  fetchValidateZip,
} from ".././../../redux/actions/global.action";
import { connect } from "react-redux";
import { DateInput } from "semantic-ui-calendar-react";
import { toast } from "../../../Components/Toast/Toast";
import { fetchTherapistPaymentInfo } from "../../../redux/actions/therapist.action";

export class Payment extends Component {
  golbalID = 0;
  dropValcode: any;
  constructor(props) {
    super(props);
    this.state = {
      zip_code: {
        name: "ZipCode",
      },
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
        actionBy: "",
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

  componentDidMount = async () => {
    //zip-code-globally
    var zipData = await this.props.fetchCategoryName(this.state.zip_code.name);
    if (zipData != false) {
      this.dropValcode = zipData.data.Data.globalCodeData;
    }
  };

  //validation

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    if (fields["cardExpiration"] === "") {
      formIsValid = false;
      errors["cardExpiration"] = "Expiration date can't be blank.";
    }

    this.setState({ errors: errors });
    this.setState({ loading: false });
    return formIsValid;
  };
  hasError = (value) => {
    let errors = this.state.errors;
    if (errors[value] !== "") {
      return true;
    } else {
      return false;
    }
  };

  //save-payment
  savePayment = async (e, data) => {
    debugger;
    e.preventDefault();
    var data1 = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = data1;
    if (this.handleValidation()) {
      debugger
      var res = await this.props.fetchTherapistPaymentInfo(this.state.fields);
      if (res == true) {
        console.log("res--------", res);
      } else {
      }
    }
  };

  //expiration-date
  handleChangeDate = (event, { name, value }) => {
    debugger
    this.resetError("cardExpiration");
    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.cardExpiration = value;
      return { fields: fields };
    });
  };

  //onchange-inputs
  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //zipcode
  checkZipCode = (e) => {
    e.preventDefault();
    var _zip = this.dropValcode.find((x) => x.CodeName == e.target.value);
    if (_zip != undefined || _zip != null) {
      this.state.fields.zipCode = _zip.GlobalCodeId;
    } else {
      toast.error("Not matched zipcode");
    }
  };

  render() {
    const { submitting } = this.props;

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
          <Form
                ref="form"
                autoComplete="off"
                onSubmit={this.savePayment}
                onError={this.handleValidation}
              >
              
            <div className="row">
               <div className="col-sm-6 pb-3 pr-3">
                  <div className="form-group">
                    <label for="usr" className="chkBox">
                      Card Holder's name
                    </label>
                    {/* <input type="text" class="form-control" /> */}

                    <Input
                      className="form-control"
                      id="name"
                      fullWidth={true}
                      name="name"
                      type="name"
                      onChange={this.setFormValue.bind(this, "cardHolderName")}
                      // value={
                      //   this.props.saveData.data
                      //     ? this.props.saveData.data.Data
                      //         .FirstName
                      //     : this.state.fields.firstName
                      // }
                      validators={["required", "matchRegexp:^[a-zA-Z ]*$"]}
                      errorMessages={["this field is required", "Invalid Name"]}
                    />
                  </div>
                </div>{" "}
                <div className="col-sm-6 pb-3 pr-3">
                  <div className="form-group">
                    <label for="usr" className="chkBox">
                      Card number ritu
                    </label>
                    {/* <input type="tel" class="form-control" /> */}
                    <Input
                      className="form-control"
                      id="name"
                      fullWidth={true}
                      name="name"
                      type="number"
                      maxLength={16}
                      onChange={this.setFormValue.bind(this, "cardNumber")}
                      validators={["required", "matchRegexp:^[0-9]*$"]}
                      errorMessages={[
                        "this field is required",
                        "Invalid Number",
                      ]}
                    />
                  </div>
                </div>{" "}
                <div class="col-sm-6 pb-3 pr-3">
                  <div class="form-group">
                    <label for="usr" class="chkBox">
                      CVV Number
                    </label>
                    {/* <input
                      type="number"
                      pattern="[0-3]*"
                      inputmode="numeric"
                      class="form-control"
                      maxlength="3"
                      validators={["required"]}
                      errorMessages={["this field is required"]}
                    /> */}

                    <Input
                      className="form-control"
                      id="name"
                      fullWidth={true}
                      type="number"
                      maxLength="3"
                      onChange={this.setFormValue.bind(this, "cvvNumber")}
                      validators={["required", "matchRegexp:^[0-9]*$"]}
                      errorMessages={[
                        "this field is required",
                        "Invalid Number",
                      ]}
                    />
                  </div>
                </div>{" "}
                <div class="col-sm-6 pb-3 pr-3">
                  <div class="form-group">
                    <label for="usr" class="chkBox">
                      Card Expiration
                    </label>
                    {/* <input type="date" class="form-control" id="date" /> */}
                    <DateInput
                      className="form-control date"
                      id="date"
                      fullWidth={true}
                      placeholder="Card Expiration Date"
                      name="date"
                      value={this.state.fields.cardExpiration}
                      dateFormat={"YYYY-MM-DD"}
                      minDate={new Date()}
                      closable="true"
                      onChange={this.handleChangeDate}
                    />
                    {this.hasError("cardExpiration") && (
                      <div className="ui pointing label">
                        <div style={{ color: "red" }}>
                          {this.state.errors["cardExpiration"]}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div class="col-sm-6 pb-3 pr-3">
                  <div class="form-group">
                    <label for="usr" class="chkBox">
                      City
                    </label>
                    {/* <input type="text" class="form-control" /> */}
                    <Input
                      className="form-control"
                      id="name"
                      fullWidth={true}
                      type="name"
                      onChange={this.setFormValue.bind(this, "city")}
                      validators={["required", "matchRegexp:^[a-zA-Z ]*$"]}
                      errorMessages={["this field is required", "Invalid Name"]}
                    />
                  </div>
                </div>
                <div class="col-sm-6 pb-3 pr-3">
                  <div class="form-group">
                    <label for="usr" class="chkBox">
                      Zip Code
                    </label>
                    <Input
                      className="login-form-textfield"
                      id="zip code"
                      fullWidth={true}
                      name="zipCode"
                      placeholder="Enter Your Zipcode"
                      margin={"normal"}
                      onBlur={(e) => {
                        this.checkZipCode(e);
                      }}
                      autoComplete="false"
                    />{" "}
                  </div>
                </div>
                <div class="col-sm-6 pb-3 pr-3">
                  <div class="form-group">
                    <label for="usr" class="chkBox">
                      Adress
                    </label>
                    <input
                      type="textarea"
                      class="form-control"
                      id="date"
                      onChange={this.setFormValue.bind(this, "address")}
                    />
                  </div>
                </div>
             
            </div>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="btn btn-primary mr-4"
              data-dismiss="modal"
              disabled={submitting}
              onClick={this.savePayment}
            >
              Connect with Stripe
            </Button>
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

const mapStateToProps = (state) => {
  console.log("sttate dekho--------", state);
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTherapistPaymentInfo: (data) =>
      dispatch(fetchTherapistPaymentInfo(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchValidateZip: (data) => dispatch(fetchValidateZip(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Payment)
);
