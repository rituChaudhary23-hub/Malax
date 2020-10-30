import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { fetchClientAppointment } from "../../../redux/actions/clientSchedule.action";
import {
  fetchCategoryName,
  fetchValidateZip,
} from "../../../redux/actions/global.action";
import { connect } from "react-redux";
import Header from "../../../Components/Shared/Header";
import { toast } from "../../../Components/Toast/Toast";

class ServiceRequest extends Component {
  golbalID = 0;
  dropVal: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "Gender",
      name: "LocationType",
      name:"State",
      zipCode: "",
      fields: {
        clientScheduleId: 0,
        clientId: 0,
        therapistId: 0,
        massageType: "",
        doc_number: "",
        city: "",
        streetAddress: "",
        serviceDate: "",
        timelength: "",
        generallocation: "",
        from: "",
        to: "",
        therapistGender: "",
        state: "",
        locationType: "",
        zipCode: "",
      },
      errors: {
        serviceDate: "",
        city: "",
        locationType: "",
        streetAddress: "",
        zipCode: "",
      },
      loading: false,
    };
  }

  componentDidMount = async () => {
    debugger;
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
  };

  handleChangeDate = (event, { name, value }) => {
    this.resetError("serviceDate");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.serviceDate = value;
      return { fields: fields };
    });
  };

  dropdownChange = (e, value) => {
    debugger;
    // this.resetError(name);
    // this.setState({ [name]: value1 });
    var InfoAs = e.target.outerText;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.therapistGender = globalId;
    // this.setState({ genderValue: value });

    // this.setState((prevState) => {
    //   let fields = Object.assign({}, prevState.fields);
    //   fields[name] = value1;
    //   return { fields: fields };
    // });
  };

  //location-type
  locType = (e, data) => {
    console.log(data.value);
    // this.state.fields.zipCode
    console.log("---------e-------", e);
    var InfoAs = e.target.outerText;
    debugger;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.locationType = globalId;
    this.setState({ locationType: data.value }, () => {
      console.log("locationType----------", data.value);
    });
  };

  //state
  
  selectState = (e, data) => {
    console.log(data.value);
    console.log("---------e-------", e);
    var InfoAs = e.target.outerText;
    debugger;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.state = globalId;
    this.setState({ state: data.value }, () => {
      console.log("locationType----------", data.value);
    });
  };

  //zipcode
  abc = async (e) => {
    console.log("-------zipcode -----------", e);
    this.state.zipCode = e;
    var data = {
      zipCode: this.state.zipCode,
    };
    this.state.fields.zipCodeId = e;
    var res = await this.props.fetchValidateZip(data);
    if ((res = true)) {
      toast.success("Available");
    } else {
      toast.error("Not Available to this area");
    }
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //appointment-submit
  submitRequest = async (e) => {
    e.preventDefault();
    debugger;
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    debugger;
    if (this.validate()) {
      var res = await this.props.fetchClientAppointment(this.state.fields);
      if (res == true) {
        console.log("res--------", res);
        this.props.history.push("/payment");
      } else {
      }
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

  cancel = () => {
    window.location.href = "/client-profile";
  };
  validate = () => {
    // let errors = {};
    let fields = this.state.fields;
    let errors = this.state.errors;

    let formIsValid = true;
    if (fields["serviceDate"] === "") {
      formIsValid = false;
      errors["serviceDate"] = "Date of Birth can't be blank";
    }
    this.setState({ errors: errors });

    return formIsValid;
  };
  render() {
    const { submitting } = this.props;

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
      { key: "s", text: "North Carolina 3", value: "North Carolina 3" },
      { key: "t", text: "Ohio", value: "Ohio" },
      { key: "w", text: "Texas", value: "Texas" },
    ];
    const typeOptions = [
      { key: "g", text: "At home", value: "At home" },
      { key: "s", text: "At work", value: "At work" },
      { key: "s", text: "Other", value: "Other" },
    ];
    const genderOptions = [
      { key: "u", text: "Male", value: "Male" },
      { key: "j", text: "Female", value: "Female" },
    ];
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
                      onSubmit={this.submitRequest}
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
                                value={this.state.fields.serviceDate}
                                dateFormat={"YYYY-MM-DD"}
                                minDate={new Date()}
                                closable="true"
                                onChange={this.handleChangeDate}
                              />
                              {this.hasError("serviceDate") && (
                                <div className="ui pointing label">
                                  <div style={{ color: "red" }}>
                                    {this.state.errors["serviceDate"]}
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
                                // onChange={this.dropdownChange}
                                value={this.state.fields.timelength}
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
                                // onChange={this.dropdownChange}

                                value={this.state.fields.massageType}
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
                              {/* <Dropdown
                                options={genderOptions}
                                selection
                               onChange={this.dropdownChange}
                               value={this.state.fields.therapistGender}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              /> */}
                              <Dropdown
                                name="info"
                                type="submit"
                                disabled={submitting}
                                className="dropNav"
                                text="Please Select"
                                options={genderOptions}
                                // value={this.state.genderValue}
                                onChange={this.dropdownChange}
                                simple
                                item
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
                                // onChange={this.dropdownChange}
                                value={this.state.fields.generallocation}
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
                                  "streetAddress"
                                )}
                                value={this.state.fields.streetAddress}
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
                              {/* <Dropdown
                               
                                name=""
                                // onChange={this.dropdownChange}
                                value={this.state.fields.state}
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />{" "} */}
                              <Dropdown
                                options={stateOptions}
                                selection
                                placeholder="Select State"
                                name="state"
                                onChange={(e, data) => this.selectState(e, data)}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["state"]}
                              </span>
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
                                name="zipCode"
                                margin={"normal"}
                                // onChange={this.setFormValue.bind(
                                //   this,
                                //   "zipCode"
                                // )}

                                onChange={(e) => {
                                  this.abc(e.target.value);
                                }}
                                onKeyUp={this.setFormValue.bind(
                                  this,
                                  "zipCode"
                                )}
                                // value={this.state.fields.zipCode}
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
                                placeholder="Select Location Type"
                                name="locationType"
                                onChange={(e, data) => this.locType(e, data)}

                                //  value={this.state.fields.locationType}
                                // validators={["required"]}
                                // errorMessages={["this field is required"]}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["locationType"]}
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
                                onClick={this.cancel}
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    saveashu: state.clientReducer.saveashu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientAppointment: (data) => dispatch(fetchClientAppointment(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchValidateZip: (data) => dispatch(fetchValidateZip(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceRequest)
);
