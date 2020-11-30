import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import {
  fetchUserHistory,
  getUserHistory,
} from "../../../redux/actions/client.action";
import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,
      fields: {
        medicalHistoryId: 0,
        clientId: 0,
        emergencyContactName: "",
        emergencyPhoneNumber: "",
        physicianContactName: "",
        physicianPhoneNumber: "",
        hobbies: "",
        currentMedications: "",
        surgeries: "",
        dislocations: "",
        profession: "",

        actionBy: "",
      },
      errors: {
        emergencyContactName: "",
        emergencyPhoneNumber: "",
        physicianContactName: "",
        physicianPhoneNumber: "",
        hobbies: "",
        currentMedications: "",
        surgeries: "",
        dislocations: "",
        profession: "",
      },
      loading: false,
    };
  }

  componentDidMount = async (data1) => {
    var data1 = this.props.user.Data.ClientId;
    this.state.clientId = data1;
    this.props.getUserHistory(data1);
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  updatePhone = (e) => {
    var regex = "^\\d+$";
    if (e.target.value.match(regex)) {
      if (e.target.value.length <= 10 && e.target.value != "") {
        this.state.fields.physicianPhoneNumber = e.target.value;
        this.setState({ physicianPhoneNumber: e.target.value });
      } else if (e.target.value.length == 0) {
        this.state.fields.physicianPhoneNumber = e.target.value;
        this.setState({ physicianPhoneNumber: e.target.value });
      }
    } else {
      if (
        this.state.fields.physicianPhoneNumber &&
        this.state.fields.physicianPhoneNumber.length > 0 &&
        e.target.value != ""
      ) {
        this.setState({
          physicianPhoneNumber: this.state.fields.physicianPhoneNumber,
        });
      } else {
        this.setState({ physicianPhoneNumber: "" });
      }
    }
    // }
  };

//emergency-number
updateEmergencyNumber = (e) => {
  var regex = "^\\d+$";
  if (e.target.value.match(regex)) {
    if (e.target.value.length <= 10 && e.target.value != "") {
      this.state.fields.emergencyPhoneNumber = e.target.value;
      this.setState({ emergencyPhoneNumber: e.target.value });
    } else if (e.target.value.length == 0) {
      this.state.fields.emergencyPhoneNumber = e.target.value;
      this.setState({ emergencyPhoneNumber: e.target.value });
    }
  } else {
    if (
      this.state.fields.emergencyPhoneNumber &&
      this.state.fields.emergencyPhoneNumber.length > 0 &&
      e.target.value != ""
    ) {
      this.setState({
        emergencyPhoneNumber: this.state.fields.emergencyPhoneNumber,
      });
    } else {
      this.setState({ emergencyPhoneNumber: "" });
    }
  }
  // }
};

  resetError = (field) => {
    let errors = this.state.errors;
    errors[field] = "";
    this.setState({ errors });
  };
  handleChangeDate = (event, { name, value }) => {
    this.resetError("dob");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.dob = value;
      return { fields: fields };
    });
  };

  saveMedicalHistory = async (e) => {
    this.setState({ loading: true });
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.handleValidation()) {
      this.props.fetchUserHistory(this.state.fields);
    }
    this.setState({ loading: false });
  };

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    if (fields["dob"] === "") {
      formIsValid = false;
      errors["dob"] = "Date of Birth can't be blank";
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

  cancelInfo = () => {
    window.location.href = "/update-client-profile";
  };
  render() {
    const { submitting } = this.props;
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12 mb-5">
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
                      <Form
                        ref="form"
                        autocomplete="off"
                        onSubmit={this.saveMedicalHistory}
                        onError={this.handleValidation}
                      >
                        <div className="tab-pane " id="Personal">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                <p>Emergency contact</p>{" "}
                                <label for="usr" className="chkBox">
                                  Name{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "emergencyContactName"
                                  )}
                                  // value={
                                  //   this.state.fields.emergencyContactName
                                  // }
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .EmergencyContactName
                                      : this.state.fields.emergencyContactName
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Name",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Phone Number{" "}
                                </label>

                                 <Input
                                  className="form-control"
                                  id="number"
                                  name="number"
                                  fullwidth="true"
                                  type="text"
                                  maxLength={10}
                             
                                  onChange={this.updateEmergencyNumber}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .EmergencyPhoneNumber
                                      : this.state.fields.emergencyPhoneNumber
                                  }
                                  validators={["required"]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Phone Number",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <p>Physician contact </p>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Name{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "physicianContactName"
                                  )}
                                  // value={
                                  //   this.state.fields.physicianContactName
                                  // }
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .PhysicianContactName
                                      : this.state.fields.physicianContactName
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Name",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Phone Number{" "}
                                </label>

                                <Input
                                  className="form-control"
                                  id="number"
                                  name="number"
                                  fullwidth="true"
                                  type="text"
                                  maxLength={10}
                                  // onChange={this.setFormValue.bind(
                                  //   this,
                                  //   "physicianPhoneNumber"
                                  // )}
                                  onChange={this.updatePhone}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .PhysicianPhoneNumber
                                      : this.state.fields.physicianPhoneNumber
                                  }
                                  validators={["required"]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Phone Number",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Current medications{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  fullWidth={true}
                                  type="text"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "currentMedications"
                                  )}
                                  // value={
                                  //   this.state.fields.currentMedications
                                  // }
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .CurrentMedications
                                      : this.state.fields.currentMedications
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid medications",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Surgeries{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  fullWidth={true}
                                  type="text"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "surgeries"
                                  )}
                                  // value={this.state.fields.surgeries}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .Surgeries
                                      : this.state.fields.surgeries
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Surgeries",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Hobbies{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  fullWidth={true}
                                  type="text"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "hobbies"
                                  )}
                                  // value={this.state.fields.hobbies}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .Hobbies
                                      : this.state.fields.hobbies
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Name",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Dislocations{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  fullWidth={true}
                                  type="text"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "dislocations"
                                  )}
                                  // value={this.state.fields.dislocations}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .Dislocations
                                      : this.state.fields.dislocations
                                  }
                                  validators={[
                                    "required",
                                    "matchRegexp:^[a-zA-Z ]*$",
                                  ]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Dislocations",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Profession{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  fullWidth={true}
                                  type="text"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "profession"
                                  )}
                                  // value={this.state.fields.profession}
                                  value={
                                    this.props.saveMedicalData.data
                                      ? this.props.saveMedicalData.data.Data
                                          .Profession
                                      : this.state.fields.profession
                                  }
                                  validators={["required"]}
                                  errorMessages={[
                                    "this field is required",
                                    "Invalid Profession",
                                  ]}
                                  autoComplete="false"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-12">
                              <div className="text-right">
                                <Button
                                  type="submit"
                                  className="btn btn-primary mr-4"
                                  data-dismiss="modal"
                                  disabled={submitting}
                                  // onClick={this.saveProfile}
                                >
                                  Submit
                                </Button>
                                <Button
                                  type="button"
                                  className="btn btn-cancel"
                                  data-dismiss="modal"
                                  onClick={this.cancelInfo}
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
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    saveMedicalData: state.clientReducer.saveMedicalData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserHistory: (data) => dispatch(fetchUserHistory(data)),
    getUserHistory: (data) => dispatch(getUserHistory(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(History)
);
