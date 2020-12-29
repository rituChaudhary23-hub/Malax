import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchClientData } from "../../../redux/actions/global.action";
import { fetchUserInfo } from "../../../redux/actions/client.action";

import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const maxdate = new Date(currentdate.setYear(currentdate.getFullYear()));

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,
      fields: {
        id: "",
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
        modifiedBy: "",
      },

      errors: {
        firstName: "",
        lastName: "",
        dob: "",
        gender: "",
      },
      loading: false,
    };
  }
  componentWillMount = async () => {
    var clientId = this.props.userId;
    this.state.fields.id = clientId;
    var _clientData = await this.props.fetchClientData(clientId);
    console.log("_clientData");
  };

  componentDidMount = async (data1) => {

     //get-selected-gender
    //  var data1 = this.props.user.Data.ClientId;
    //  this.state.fields.clientId = data1;
    // this.props.getUserInfo(data1);

    // this.props.userData.data.data[0].firstName

    if (this.props.userData.data) {
      debugger
      // this.setState({
      //   firstName: this.props.userData.data.data[0].firstName,
      // });
      this.state.fields.firstName = this.props.userData.data.data[0].firstName;
      this.state.fields.lastName = this.props.userData.data.data[0].lastName;
      
      //    }
    }
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  resetError = (field) => {
    let errors = this.state.errors;
    errors[field] = "";
    this.setState({ errors });
  };
  handleChangeDate = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
    this.resetError("dob");

    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.dob = value;
      return { fields: fields };
    });
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
    window.location.href = "/client-profile";
  };

  handleChanges = (e, { value }) => {
    //   var infoGender = value;
    // this.setState({
    //   selectedGender: infoGender,
    // });
    // var globalGenderId = this.dropvalGender.filter(
    //   (y) => y.GlobalCodeId == infoGender
    // )[0].GlobalCodeId;
    // this.state.fields.gender = globalGenderId;
    console.log("e.target", e.target.outerText);
    var selectedGender = e.target.outerText;
    this.state.fields.gender = selectedGender;
    value = this.state.fields.gender;
  };

  saveProfile = async (e, data) => {
    e.preventDefault();

    var clientId = this.props.userId;
    this.state.fields.id = clientId;
    var userName = this.state.fields.firstName;
    this.state.fields.modifiedBy = userName;
    if (this.handleValidation()) {
      var res = await this.props.fetchUserInfo(this.state.fields);
      if (res == true) {
      } else {
      }
    }
  };

  render() {
    var GenderOptions = [
      { key: 2, text: "Male", value: "Male" },
      { key: 4, text: "Female", value: "Female" },
    ];

    console.log("userData", this.props.userData.data.data[0].firstName);
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
                        autoComplete="off"
                        onSubmit={this.saveProfile}
                        onError={this.handleValidation}
                      >
                        <div className="tab-pane active" id="Personal">
                          <div className="row">
                            <div className="col-sm-12">
                              <div className="form-group">
                                {" "}
                                <label for="usr" className="chkBox">
                                  First name{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "firstName"
                                  )}
                                  // value={
                                  //   this.props.userData.data
                                  //     ? this.props.userData.data.data[0]
                                  //         .firstName
                                  //     : this.state.fields.firstName
                                  // }
                               value={this.state.fields.firstName&&this.state.fields.firstName}
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
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Last name{" "}
                                </label>

                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "lastName"
                                  )}
                                  // value= {
                                  //   this.props.userData.data
                                  //     ? this.props.userData.data.data[0]
                                  //         .lastName
                                  //     : this.state.fields.lastName
                                  // }
                                  value={
                                    this.state.fields.lastName &&
                                    this.state.fields.lastName
                                  }
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
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Gender{" "}
                                </label>

                                <Dropdown
                                  className="dropNav"
                                  options={GenderOptions}
                                  selection
                                  // value={this.state.fields.gender}
                                  
                                  onChange={this.handleChanges}
                                  // validators={["required"]}
                                  // errorMessages={["this field is required"]}
                                />
                              </div>
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Birth date{" "}
                                </label>
                                <DateInput
                                  className="form-control date"
                                  id="date"
                                  fullWidth={true}
                                  name="date"
                                  closable="true"
                                  value={
                                    this.props.saveData.data
                                      ? this.props.saveData.data.Data.dob
                                      : this.state.fields.dob
                                  }
                                  dateFormat={"MM-DD-YYYY"}
                                  maxDate={maxdate}
                                  onChange={this.handleChangeDate}
                                />
                                {this.hasError("dob") && (
                                  <div className="ui pointing label">
                                    <div style={{ color: "red" }}>
                                      {this.state.errors["dob"]}
                                    </div>
                                  </div>
                                )}
                              </div>{" "}
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
    userId: state.persist.c_user.token,
    userData: state.globalReducer.clientData,
    saveData: state.clientReducer.saveData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (data) => dispatch(fetchUserInfo(data)),
    fetchClientData: (data) => dispatch(fetchClientData(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
);
