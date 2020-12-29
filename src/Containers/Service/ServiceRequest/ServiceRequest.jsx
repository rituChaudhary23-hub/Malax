import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { fetchClientAppointment } from "../../../redux/actions/clientSchedule.action";
import {
  fetchCategoryName,
  // fetchValidateZip,
} from "../../../redux/actions/global.action";
import { connect } from "react-redux";
import Header from "../../../Components/Shared/Header";
import { toast } from "../../../Components/Toast/Toast";

class ServiceRequest extends Component {
  GenderOptions = [];
  dropvalGender: any;
  golbalID = 0;
  dropVal: any;
  dropValcode: any;
  dropvalState: any;
  stateOptions = [];
  dropvaltime: any;
  dropvalMassage: any;
  dropvalLocation: any;
  locationOptions = [];
  dropvalLocType: any;
  datalist: [];
  constructor(props) {
    super(props);
    this.state = {
      str_code: "",
      name: "ZipCode",
      globalGender: {
        name: "Gender",
      },
      globalType: {
        name: "LocationType",
      },
      globalMassage: {
        name: "MassageType",
      },
      globalLocation: {
        name: "GeneralLocation",
      },
      globalState: {
        name: "State",
      },
      globalTime: {
        name: "TimeLength",
      },
      zipCode: "",
      selectedGender: "",
      selectedState: "",
      selectedLocation: "",
      fields: {
        clientScheduleId: 0,
        clientId: 0,
        therapistId: 0,
        massageType: "",
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
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropValcode = data.data.Data.globalCodeData;
    }
    //state-globally
    var _state = await this.props.fetchCategoryName(
      this.state.globalState.name
    );
    if (_state != false) {
      this.dropvalState = _state.data.Data.globalCodeData;
      this.dropvalState.forEach((element) => {
        this.stateOptions.push({
          text: element.CodeName,
          value: element.GlobalCodeId,
        });
      });
    }

    //gender-globally
    var _gender = await this.props.fetchCategoryName(
      this.state.globalGender.name
    );
    if (_gender != false) {
      this.dropvalGender = _gender.data.Data.globalCodeData;
      this.dropvalGender.forEach((element) => {
        this.GenderOptions.push({
          text: element.CodeName,
          value: element.GlobalCodeId,
        });
      });
    }
    //time-length
    var _timeLength = await this.props.fetchCategoryName(
      this.state.globalTime.name
    );
    if (_timeLength) {
      this.dropvaltime = _timeLength.data.Data.globalCodeData;
    }

    //massage-type
    var _massageType = await this.props.fetchCategoryName(
      this.state.globalMassage.name
    );
    if (_massageType) {
      this.dropvalMassage = _massageType.data.Data.globalCodeData;
    }

    //general-location
    var _location = await this.props.fetchCategoryName(
      this.state.globalLocation.name
    );
    if (_location != false) {
      this.dropvalLocation = _location.data.Data.globalCodeData;
      this.dropvalLocation.forEach((element) => {
        this.locationOptions.push({
          text: element.CodeName,
          value: element.GlobalCodeId,
        });
      });
    }
    //loc-type

    var _locType = await this.props.fetchCategoryName(
      this.state.globalType.name
    );
    if (_locType) {
      this.dropvalLocType = _locType.data.Data.globalCodeData;
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

  //zipcode
  onChangeCode = (e) => {
    e.preventDefault();
    var _zip = this.dropValcode.find((x) => x.CodeName == e.target.value);
    if (_zip != undefined || _zip != null) {
      this.state.fields.zipCode = _zip.GlobalCodeId;
    } else {
      toast.error("Not matched zipcode");
    }
  };

  dropdownChange = (e, { value }) => {
    // var InfoAs = e.target.outerText;
    // var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
    //   .GlobalCodeId;
    // this.state.fields.therapistGender = globalId;
    var infoGender = value;
    this.setState({
      selectedGender: infoGender,
    });
    var globalGenderId = this.dropvalGender.filter(
      (y) => y.GlobalCodeId == infoGender
    )[0].GlobalCodeId;
    this.state.fields.therapistGender = globalGenderId;
  };

  //state
  selectState = (e, { value }) => {
    var infoState = value;
    this.setState({
      selectedState: infoState,
    });
    var globalStateId = this.dropvalState.filter(
      (y) => y.GlobalCodeId == infoState
    )[0].GlobalCodeId;
    this.state.fields.state = globalStateId;
  };

  //time-length
  selectTimeLength = (e, data) => {
    var InfoAs = e.target.outerText;
    var globaltimeLength = this.dropvaltime.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.timelength = globaltimeLength;
  };

  //massage-type
  selectMassageType = (e) => {
    var InfoAs = e.target.outerText;
    var globalMassageType = this.dropvalMassage.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.massageType = globalMassageType;
  };

  //general-location
  selectLocation = (e, { value }) => {
    var infoLocation = value;
    this.setState({
      selectedLocation: infoLocation,
    });
    var globalLocationId = this.dropvalLocation.filter(
      (y) => y.GlobalCodeId == infoLocation
    )[0].GlobalCodeId;
    this.state.fields.generallocation = globalLocationId;
  };

  //location-type
  selectLocType = (e) => {
    var InfoAs = e.target.outerText;
    var globalLocType = this.dropvalLocType.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.locationType = globalLocType;
  };

  //location-type
  locType = (e, data) => {
    var InfoAs = e.target.outerText;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.locationType = globalId;
    this.setState({ locationType: data.value }, () => {});
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //appointment-submit
  submitRequest = async (e) => {
    e.preventDefault();
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.validate()) {
      var res = await this.props.fetchClientAppointment(this.state.fields);
      if (res == true) {
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

  //time-to
  onChangeToTime = (time) => {
    this.state.fields.to = time.target.value;
  };

  //time-from
  onChangeFromTime = (time) => {
    this.state.fields.from = time.target.value;
  };

  render() {
    const { submitting } = this.props;
    const timeLengthOptions = [
      { key: "m", text: "20 minutes", value: "20 minutes" },
      { key: "k", text: "40 minutes", value: "40 minutes" },
      { key: "k", text: "60 minutes", value: "60 minutes" },
    ];
    const massageOptions = [
      { key: "r", text: "Relaxation", value: "Relaxation" },
    ];

    const typeOptions = [
      { key: "g", text: "At home", value: "At home" },
      { key: "s", text: "At work", value: "At work" },
      { key: "s", text: "Other", value: "Other" },
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
                      autoComplete="off"
                      onSubmit={this.submitRequest}
                      onError={this.validate}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Date{" "}
                              </label>

                              <DateInput
                                className="form-control date"
                                id="date"
                                fullWidth={true}
                                placeholder="Service Date"
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
                              <input
                                type="time"
                                className="form-control date"
                                step="900"
                                id="time"
                                fullWidth={true}
                                name="time"
                                onChange={this.onChangeToTime}
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="time"
                                className="form-control date"
                                step="900"
                                id="time"
                                fullWidth={true}
                                name="time"
                                onChange={this.onChangeFromTime}
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
                                options={timeLengthOptions}
                                selection
                                placeholder="Select TimeLength"
                                onChange={this.selectTimeLength}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["timelength"]}
                              </span>
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
                                placeholder="Select type of Massage"
                                onChange={this.selectMassageType}
                                // validators={["required"]}
                                // errorMessages={["this field is required"]}
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
                                className="dropNav"
                                options={this.GenderOptions}
                                selection
                                value={this.state.selectedGender}
                                onChange={this.dropdownChange}
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
                                className="dropNav"
                                options={this.locationOptions}
                                selection
                                value={this.state.selectedLocation}
                                onChange={this.selectLocation}
                                placeholder="Select General Location"
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
                                placeholder="Enter your Addresas"
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
                                autoComplete="off"
                                margin={"normal"}
                                type="city"
                                placeholder="Enter your City"
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
                                className="dropNav"
                                options={this.stateOptions}
                                selection
                                value={this.state.selectedState}
                                onChange={this.selectState}
                                placeholder="Select State"
                                validators={["required"]}
                                errorMessages={["this field is required"]}
                              />
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
                                placeholder="Enter Your Zipcode"
                                margin={"normal"}
                                onBlur={(e) => {
                                  this.onChangeCode(e);
                                }}
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
                                onChange={this.selectLocType}

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
    saveNumber: state.clientReducer.saveNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientAppointment: (data) => dispatch(fetchClientAppointment(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    // fetchValidateZip: (data) => dispatch(fetchValidateZip(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceRequest)
);
