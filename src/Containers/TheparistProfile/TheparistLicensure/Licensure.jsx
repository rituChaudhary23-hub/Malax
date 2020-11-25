import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import {
  listDateFormat,
  listDateFormat_sample,
} from "../../../utils/dateFormat";

import {
  fetchTherapistLicensure,
  getTherapistLicensureInfo,
} from "../../../redux/actions/therapist.action";
import { withRouter } from "react-router";
import { fetchCategoryName } from ".././../../redux/actions/global.action";
import { connect } from "react-redux";

class Licensure extends Component {
  StateOptions = [];
  GenderOptions = [];
  dropvalState: any;
  dropvalGender: any;
  constructor(props) {
    super(props);
    this.state = {
      abcGender: {
        name: "Gender",
      },
      name: "State",
      selectedstate: "",
      selectedGender: "",
      fields: {
        therapistLicensureId: 0,
        therapistId: 0,
        licensedSince: "",
        expirationDate: "",
        gender: 0,
        state: 0,
        actionBy: "",
        licensureNumber: 0,
      },
      getLicensure: { therapistLicensureId: 0, therapistId: 0 },

      errors: {
        gender: "",
        licensureNumber: "",
        expirationDate: "",
        licensedSince: "",
        state: "",
      },
      loading: false,
    };
  }

  componentDidMount = async () => {
    //gender-globally
    var _licensureGender = await this.props.fetchCategoryName(
      this.state.abcGender.name
    );
    if (_licensureGender != false) {
      this.dropvalGender = _licensureGender.data.Data.globalCodeData;
      this.dropvalGender.forEach((element) => {
        this.GenderOptions.push({
          text: element.CodeName,
          value: element.GlobalCodeId,
        });
      });
    }

    //state-globally
    var _licensureState = await this.props.fetchCategoryName(this.state.name);
    if (_licensureState != false) {
      this.dropvalState = _licensureState.data.Data.globalCodeData;
      this.dropvalState.forEach((element) => {
        this.StateOptions.push({
          text: element.CodeName,
          value: element.GlobalCodeId,
        });
      });
    }

    //get-licensure-details
    var data1 = this.props.user.Data.TherapistId;
    this.state.getLicensure.therapistId = data1;
    var aa = await this.props.getTherapistLicensureInfo(
      this.state.getLicensure
    );
    debugger
    //get-selected-state
    // if(aa=false){
    //   this.setState({fields:""})
    // }
    if (this.props.saveLicensure.data){
      this.setState({
        selectedstate: this.props.saveLicensure.data.Data.State,
      });
      this.state.fields.state=this.props.saveLicensure.data.Data.State
    }

    //get-selected-gender
    if (this.props.saveLicensure.data){
      this.setState({
        selectedGender: this.props.saveLicensure.data.Data.Gender,
      });
      this.state.fields.gender=this.props.saveLicensure.data.Data.Gender
    }

    this.setState();
  };

  //state-change
  changeState = (e, { value }) => {
    var infoState = value;
    this.setState({
      selectedstate: infoState,
    });
    var globalStateId = this.dropvalState.filter(
      (y) => y.GlobalCodeId == infoState
    )[0].GlobalCodeId;
    this.state.fields.state = globalStateId;
  };

  //gender-onchange
  changeGender = (e, { value }) => {
    var infoGender = value;
    this.setState({
      selectedGender: infoGender,
    });
    var globalGenderId = this.dropvalGender.filter(
      (y) => y.GlobalCodeId == infoGender
    )[0].GlobalCodeId;
    this.state.fields.gender = globalGenderId;
  };

  //licensed-since
  handleChangeDate = (event, { name, value }) => {
    this.state.fields.licensedSince = value;
    this.props.saveLicensure.data.Data.LicensedSince = this.state.fields.licensedSince;
    this.setState({
      licensedSince: this.props.saveLicensure.data.Data.LicensedSince,
    });
  };

   //expiration-date
  handleExpDate = (event, { name, value }) => {
    this.resetError("expirationDate");
    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.expirationDate = value;
      return { fields: fields };
    });

    this.state.fields.expirationDate = value;
    this.props.saveLicensure.data.Data.ExpirationDate = this.state.fields.expirationDate;
    this.setState({
      expirationDate: this.props.saveLicensure.data.Data.ExpirationDate,
    });

  
  };

  changeNumber = (e) => {
   debugger
   

    this.state.fields.licensureNumber = parseInt(e.target.value);
   this.props.saveLicensure.data.Data.LicensureNumber = this.state.fields.licensureNumber;
    this.setState({
      licensureNumber: this.props.saveLicensure.data.Data.LicensureNumber,
    });
  };

  submitDocument = async (e) => {
    e.preventDefault();
    var data1 = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = data1;
    if (this.validate()) {
      var res = await this.props.fetchTherapistLicensure(this.state.fields);
      if (res == true) {
        console.log("res--------", res);
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
  validate = () => {
    // let errors = {};
    let fields = this.state.fields;
    let errors = this.state.errors;

    let formIsValid = true;
    if (fields["expirationDate"] === "") {
      formIsValid = false;
      errors["expirationDate"] = "Date can't be blank";
    }
    if (fields["expirationDate"] === "") {
      formIsValid = false;
      errors["expirationDate"] = "Date can't be blank";
    }

    this.setState({ errors: errors });

    return formIsValid;
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
  cancel = () => {
    window.location.href = "/theparist-profile";
  };
  render() {
    console.log("----saveLicensure", this.props.saveLicensure.data);
    const { submitting } = this.props;

    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12 my-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tempus sed turpis cras quam ac tortor tempus amet.
                    Dolor eget enim ultrices dictum tempor pharetra. Id montes,
                    non mattis viverra. Vel nibh arcu venenatis leo quis nunc,
                    tempus maecenas enim.
                  </p>
                </div>
                <div className="col-sm-12">
                  <div className="thrprofileDes">
                    <div className="tab-content">
                      <div
                        className="tab-pane container-fluid active"
                        id="Licensure"
                      >
                        <Form
                          ref="form"
                          onSubmit={this.submitDocument}
                          onError={this.validate}
                        >
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-12">
                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    State{" "}
                                  </label>
                                  <Dropdown
                                    className="abc"
                                    options={this.StateOptions}
                                    selection
                                    value={
                                      this.state.selectedstate != ""
                                        ? this.state.selectedstate
                                        : ""
                                    }
                                    onChange={this.changeState}
                                    validators={["required"]}
                                    errorMessages={["this field is required"]}
                                  />
                                </div>

                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    Licensed Since{" "}
                                  </label>
                                  <DateInput
                                    className="form-control date"
                                    id="date"
                                    fullWidth={true}
                                    name="date"
                                    value={listDateFormat_sample(
                                      this.props.saveLicensure.data
                                        ? this.props.saveLicensure.data.Data
                                            .LicensedSince
                                        : this.state.fields.licensedSince
                                    )}
                                    dateFormat={"YYYY-MM-DD"}
                                    onChange={this.handleChangeDate}
                                  />
                                  {this.hasError("licensedSince") && (
                                    <div className="ui pointing label">
                                      <div style={{ color: "red" }}>
                                        {this.state.errors["licensedSince"]}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    Expiration Date{" "}
                                  </label>
                                  <DateInput
                                    className="form-control date"
                                    id="date"
                                    fullWidth={true}
                                    name="date"
                                    value={listDateFormat_sample(
                                      this.props.saveLicensure.data
                                        ? this.props.saveLicensure.data.Data
                                            .ExpirationDate
                                        : this.state.fields.expirationDate
                                    )}
                                    // value={this.state.fields.expirationDate}
                                    dateFormat={"YYYY-MM-DD"}
                                    onChange={this.handleExpDate}
                                  />
                                  {this.hasError("expirationDate") && (
                                    <div className="ui pointing label">
                                      <div style={{ color: "red" }}>
                                        {this.state.errors["expirationDate"]}
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    Number{" "}
                                  </label>
                                  <Input
                                    className="login-form-textfield"
                                    id="number"
                                    fullWidth={true}
                                    name="number"
                                    type="number"
                                    margin={"normal"}
                                    onChange={this.changeNumber}
                                    value={
                                      this.props.saveLicensure.data
                                        ? this.props.saveLicensure.data.Data
                                            .LicensureNumber
                                        : null
                                    }
                                    // validators={["required"]}
                                    // errorMessages={[
                                    //   "this field is required",
                                    //   "Invalid Code",
                                    // ]}
                                    autoComplete="false"
                                  />{" "}
                                </div>

                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    Gender{" "}
                                  </label>
                                  <Dropdown
                                    className="abc"
                                    options={this.GenderOptions}
                                    selection
                                    value={this.state.selectedGender}
                                    onChange={this.changeGender}
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
                                    className="btn btn-primary mr-4"
                                    data-dismiss="modal"
                                    disabled={submitting}
                                  >
                                    Save
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
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("sttate dekho--------", state);
  return {
    user: state.user.user,
    saveLicensure: state.therapistReducer.saveLicensure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchTherapistLicensure: (data) => dispatch(fetchTherapistLicensure(data)),
    getTherapistLicensureInfo: (data) =>
      dispatch(getTherapistLicensureInfo(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Licensure)
);
