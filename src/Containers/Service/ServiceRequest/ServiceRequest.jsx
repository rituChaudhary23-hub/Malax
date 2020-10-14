import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";

import Header from "../../../Components/Shared/Header";

// const currentdate = new Date();
// const currentYear = currentdate.getFullYear();
// const mindate = new Date(currentdate.setYear(currentdate.getFullYear()));

const options = [
  { key: "m", text: "20 minutes", value: "20 minutes" },
  { key: "k", text: "40 minutes", value: "40 minutes" },
  { key: "k", text: "60 minutes", value: "60 minutes" },
];
const massageOptions = [
  { key: "r", text: "Relaxation", value: "relaxation" },
  { key: "r", text: "Relax", value: "relax" },
];

const locationOptions = [
  { key: "g", text: "Town-Heights", value: "Town-Heights" },
  { key: "s", text: "Location 2", value: "Location 2" },
  { key: "s", text: "Location 3", value: "Location 3" },
];
const stateOptions = [
  { key: "g", text: "New York", value: "New York" },
  { key: "s", text: "Texas", value: "Texas" },
];
const typeOptions = [
  { key: "g", text: "At Home", value: "At Home" },
  { key: "s", text: "At Work", value: "At Work" },
  { key: "s", text: "Other", value: "Other" },
];
const genderOptions = [
  { key: "u", text: "Male Only", value: "m" },
  { key: "j", text: "Female Only", value: "f" },
];
class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        doc_type: "",
        doc_number: "",
        city: "",
        address: "",
        dob: "",
        time: "",
        location: "",
        gender: "",
        state: "",
        loc_type: "",
        zip_code: "",
      },
      errors: {
        dob: "",
        city: "",
        address: "",
        zip_code: "",
      },
      loading: false,
    };
  }
  handleChangeDate = (event, { name, value }) => {
    this.resetError("dob");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.dob = value;
      return { fields: fields };
    });
  };

  dropdownChange = (e, { name, value }) => {
    this.resetError(name);
    this.setState({ [name]: value });

    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields[name] = value;
      return { fields: fields };
    });
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  submitDocument = (e) => {
    if (!this.validate()) {
      return;
    }

    const { doc_type, doc_number } = this.state.fields;
    window.location.href = "/payment";
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
  validate = () => {
    // let errors = {};
    let fields = this.state.fields;
    let errors = this.state.errors;

    let formIsValid = true;
    if (fields["dob"] === "") {
      formIsValid = false;
      errors["dob"] = "Date of Birth can't be blank";
    }
    this.setState({ errors: errors });

    return formIsValid;
  };
  render() {
    const { submitting } = this.props;
    return (
      //

      <section className="therapistProDes serviceReq">
        <Header />
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Service Request</h2>
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="thrprofileDes">
                    <Form
                      ref="form"
                      onSubmit={this.submitDocument}
                      onError={this.validate}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Date ashu{" "}
                              </label>

                              <DateInput
                                className="form-control date"
                                id="date"
                                fullWidth={true}
                                name="date"
                                value={this.state.fields.dob}
                                dateFormat={"YYYY-MM-DD"}
                                minDate={new Date()}
                                closable="true"
                                onChange={this.handleChangeDate}
                              />
                              {this.hasError("dob") && (
                                <div className="ui pointing label">
                                  <div style={{ color: "red" }}>
                                    {this.state.errors["dob"]}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group mb-0">
                              <label for="usr" className="chkBox">
                                Time range{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <Input
                                className="form-control date"
                                value="11:00"
                                step="900"
                                id="time"
                                fullWidth={true}
                                name="time"
                                type="time"
                                //   margin={"normal"}
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="time"
                                className="form-control date"
                                value="13:00"
                                step="900"
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Time length{" "}
                              </label>
                              <Dropdown
                                options={options}
                                selection
                                name="time"
                                onChange={this.dropdownChange}
                                value={this.state.fields.time}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Type of massage{" "}
                              </label>
                              <Dropdown
                                options={massageOptions}
                                selection
                                name="doc_type"
                                onChange={this.dropdownChange}
                                value={this.state.fields.doc_type}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Therapist gender preference{" "}
                              </label>
                              <Dropdown
                                options={genderOptions}
                                selection
                                name="gender"
                                onChange={this.dropdownChange}
                                value={this.state.fields.gender}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                General location{" "}
                              </label>

                              <Dropdown
                                className="form-control"
                                options={locationOptions}
                                selection
                                name="location"
                                onChange={this.dropdownChange}
                                value={this.state.fields.location}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Street Address{" "}
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
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-sm-4">
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
                                autoComplete="false"
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                State{" "}
                              </label>
                              <Dropdown
                                options={stateOptions}
                                selection
                                name="state"
                                onChange={this.dropdownChange}
                                value={this.state.fields.state}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Zip Code
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
                                autoComplete="false"
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Location Type{" "}
                              </label>

                              <Dropdown
                                options={typeOptions}
                                selection
                                name="loc_type"
                                onChange={this.dropdownChange}
                                value={this.state.fields.loc_type}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
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
                                disabled={submitting}
                                className="btn btn-primary mr-4 reqApp"
                                data-dismiss="modal"
                              >
                                Request Appointment
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-cancel"
                                data-dismiss="modal"
                              >
                                Cancel
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

export default ServiceRequest;
