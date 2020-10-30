import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {fetchPaymentDetails} from "../../../redux/actions/clientSchedule.action"

class Payment extends Component {
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

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  validate = () => {
    // let errors = {};
    let fields = this.state.fields;
    let errors = this.state.errors;

    let formIsValid = true;
    if (fields["date"] === "") {
      formIsValid = false;
      errors["date"] = "Date can't be blank";
    }
    this.setState({ errors: errors });

    return formIsValid;
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
  submitPayment = (e) => {
    if (!this.validate()) {
      return;
    }

    const { doc_type, doc_number } = this.state.fields;
    window.location.href = "/client-profile";
  };
  handleChangeDate = (event, { name, value }) => {
    this.resetError("date");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.date = value;
      return { fields: fields };
    });
  };

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
                      onSubmit={this.submitPayment}
                      onError={this.validate}
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
                                fullWidth={true}
                                name="name"
                                margin={"normal"}
                                type="name"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "card_name"
                                )}
                                value={this.state.fields.card_name}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Name",
                                ]}
                              />{" "}
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
                                id="number"
                                fullWidth={true}
                                name="number"
                                minLength="12"
                                maxLength="12"
                                margin={"normal"}
                                type="number"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "card_no"
                                )}
                                value={this.state.fields.card_no}
                                validators={["required"]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Number",
                                ]}
                              />{" "}
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
                                id="number"
                                fullWidth={true}
                                name="number"
                                margin={"normal"}
                                type="number"
                                minLength="3"
                                maxLength="3"
                                onChange={this.setFormValue.bind(this, "cvv")}
                                value={this.state.fields.cvv}
                                validators={["required"]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Cvv",
                                ]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Card Expiration{" "}
                              </label>
                              <DateInput
                                className="form-control date"
                                id="date"
                                fullWidth={true}
                                name="date"
                                minDate={new Date()}
                                value={this.state.fields.date}
                                dateFormat={"YYYY-MM-DD"}
                                onChange={this.handleChangeDate}
                              />
                              {this.hasError("date") && (
                                <div className="ui pointing label">
                                  <div style={{ color: "red" }}>
                                    {this.state.errors["date"]}
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
                                id="city"
                                fullWidth={true}
                                name="city"
                                margin={"normal"}
                                type="city"
                                onChange={this.setFormValue.bind(this, "city")}
                                value={this.state.fields.city}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Name",
                                ]}
                              />{" "}
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
                                fullWidth={true}
                                name="zip_code"
                                margin={"normal"}
                                onChange={this.setFormValue.bind(
                                  this,
                                  "zip_code"
                                )}
                                value={this.state.fields.zip_code}
                                validators={["required"]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Code",
                                ]}
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Address{" "}
                              </label>
                              <textarea
                                className="form-control textArea"
                                rows="4"
                                id="comment"
                                name="address"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "address"
                                )}
                                value={this.state.fields.address}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Address",
                                ]}
                                autoComplete="false"
                              ></textarea>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="text-right">
                              <Button
                                className="btn btn-primary mr-4"
                                data-dismiss="modal"
                              >
                                Connect with stripe
                              </Button>
                              <Button
                                className="btn btn-primary"
                                data-dismiss="modal"
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
    saveashu: state.clientReducer.saveashu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPaymentDetails: (data) => dispatch(fetchPaymentDetails(data)),

  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Payment)
);

