import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { toast } from "../../../Components/Toast/Toast";

import {
  fetchCategoryName,
  fetchValidateZip,
} from ".././../../redux/actions/global.action";
import { connect } from "react-redux";
import { fetchPaymentDetails } from "../../../redux/actions/clientSchedule.action";

class Payment extends Component {
  golbalID = 0;
  dropValcode: any;
  constructor(props) {
    super(props);
    this.state = {
      zip_code: {
        name: "ZipCode",
      },
      fields: {
        clientPaymentInfoId: 0,
        clientId: 0,
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

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;
    if (fields["cardExpiration"] === "") {
      formIsValid = false;
      errors["cardExpiration"] = "Expiration date can't be blank.";
    }
    if (fields["city"] === "") {
      formIsValid = false;
      errors["city"] = "required.";
    }
    if (fields["cardHolderName"] === "") {
      formIsValid = false;
      errors["cardHolderName"] = "this field is required.";
    }

    if (fields["cardNumber"] === "") {
      formIsValid = false;
      errors["cardNumber"] = "this field is required.";
    }
    if (fields["cvvNumber"] === "") {
      formIsValid = false;
      errors["cvvNumber"] = "this field is required.";
    }
    if (fields["zipCode"] === "") {
      formIsValid = false;
      errors["zipCode"] = "this field is required.";
    }
    if (fields["address"] === "") {
      formIsValid = false;
      errors["address"] = "this field is required.";
    }
    this.setState({ errors: errors });
    this.setState({ loading: false });
    return formIsValid;
  };

  resetError = (field) => {
    let errors = this.state.errors;
    errors[field] = "";
    this.setState({ errors });
  };

  back = () => {
    window.location.href = "/client-profile";
  };
  //save-payment
  savePayment = async (e, data) => {
    e.preventDefault();
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.handleValidation()) {
      var res = await this.props.fetchPaymentDetails(this.state.fields);
      if (res == true) {
      } else {
      }
    }
  };
  //expiration-date
  updateDate = (e) => {
    var date = e.target.value;
    this.state.fields.cardExpiration = date;
  };
  //cvv
  changeCvv = (e) => {
    var regex = "^\\d+$";
    if (e.target.value.match(regex)) {
      if (e.target.value.length <= 3 && e.target.value != "") {
        this.state.fields.cvvNumber = parseInt(e.target.value);
        this.setState({ cvvNumber: e.target.value });
      } else if (e.target.value.length == 0) {
        this.state.fields.cvvNumber = e.target.value;
        this.setState({ cvvNumber: e.target.value });
      }
    } else {
      if (
        this.state.fields.cvvNumber &&
        this.state.fields.cvvNumber.length > 0 &&
        e.target.value != ""
      ) {
        this.setState({ cvvNumber: this.state.cvvNumber });
      } else {
        this.state.fields.cvvNumber = "";
        this.setState({ cvvNumber: "" });
      }
    }
    // }
  };

  //update-cardNumber
  updateCardNumber = (e) => {
    var regex = "^\\d+$";
    if (e.target.value.match(regex)) {
      if (e.target.value.length <= 16 && e.target.value != "") {
        this.state.fields.cardNumber = e.target.value;
        this.setState({ cardNumber: e.target.value });
      } else if (e.target.value.length == 0) {
        this.state.fields.cardNumber = e.target.value;
        this.setState({ cardNumber: e.target.value });
      }
    } else {
      if (
        this.state.fields.cardNumber &&
        this.state.fields.cardNumber.length > 0 &&
        e.target.value != ""
      ) {
        this.setState({ cardNumber: this.state.fields.cardNumber });
      } else {
        this.setState({ cardNumber: "" });
      }
    }
    // }
  };

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
  resetError = (field) => {
    let errors = this.state.errors;
    errors[field] = "";
    this.setState({ errors });
  };

  hasError = (value) => {
    let errors = this.state.errors;
    if (errors[value] !== "") {
      return true;
    } else {
      return false;
    }
  };
  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  render() {
    const { submitting } = this.props;

    return (
      <section className="therapistProDes paymentDet">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Payment details </h2>
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="thrprofileDes">
                    <Form
                      ref="form"
                      autoComplete="off"
                      onError={this.handleValidation}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Card Holder's name{" "}
                              </label>
                              <Input
                                className="form-control"
                                id="name"
                                fullwidth="true"
                                name="name"
                                type="name"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "cardHolderName"
                                )}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Name",
                                ]}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Card number{" "}
                              </label>
                              <Input
                                className="form-control"
                                id="name"
                                fullwidth="true"
                                type="text"
                                maxLength={16}
                                onChange={this.updateCardNumber}
                                validators={["required"]}
                                value={this.state.fields.cardNumber}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Number",
                                ]}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["cardNumber"]}
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                CVV number{" "}
                              </label>
                              <Input
                                className="form-control"
                                id="name"
                                fullwidth="true"
                                type="text"
                                value={
                                  this.state.fields.cvvNumber &&
                                  this.state.fields.cvvNumber
                                }
                                onChange={this.changeCvv}
                                validators={["required"]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Number",
                                ]}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["cvvNumber"]}
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Card Expiration{" "}
                              </label>
                              <input
                                type="date"
                                name="date"
                                className="login-form-textfield form-control"
                                id="date"
                                dateformat={"YYYY-MM-DD"}
                                closable="true"
                                mindate={new Date()}
                                onChange={this.updateDate}
                                // value={this.state.fields.cardExpiration}
                                selected={this.state.fields.cardExpiration}
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

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                City{" "}
                              </label>
                              <Input
                                className="form-control"
                                id="name"
                                fullwidth="true"
                                type="name"
                                onChange={this.setFormValue.bind(this, "city")}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Name",
                                ]}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["city"]}
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                ZIP code{" "}
                              </label>
                              <Input
                                className="login-form-textfield"
                                id="zip code"
                                fullwidth="true"
                                name="zipCode"
                                placeholder="Enter Your Zipcode"
                                margin={"normal"}
                                onBlur={(e) => {
                                  this.checkZipCode(e);
                                }}
                                autoComplete="false"
                              />{" "}
                              <span style={{ color: "red" }}>
                                {this.state.errors["zipCode"]}
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Address{" "}
                              </label>
                              <input
                                type="textarea"
                                className="form-control"
                                id="date"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "address"
                                )}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["address"]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="text-right">
                              <Button
                                type="submit"
                                className="btn btn-primary mr-4"
                                data-dismiss="modal"
                                disabled={submitting}
                                onClick={this.savePayment}
                              >
                                Connect with Stripe
                              </Button>
                              <Button
                                className="btn btn-primary"
                                data-dismiss="modal"
                                onClick={this.back}
                              >
                                Complete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPaymentDetails: (data) => dispatch(fetchPaymentDetails(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchValidateZip: (data) => dispatch(fetchValidateZip(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Payment)
);
