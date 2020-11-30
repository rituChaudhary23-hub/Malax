import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../../redux/actions/global.action";

import {
  fetchUserInfo,
  getUserInfo,
} from "../../../redux/actions/client.action";

import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const maxdate = new Date(currentdate.setYear(currentdate.getFullYear()));

class PersonalInfo extends Component {
  GenderOptions = [];
  dropvalGender: any;

  golbalID = 0;
  dropVal: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "Gender",
      genderValue: "",

      clientId: 0,
      selectedGender:"",
      fields: {
        clientPersonalInfoId: 0,
        clientId: 0,
        firstName: "",
        lastName: "",
        birthDate: "",
        genderId: "",
        actionBy: "",
      },

      errors: {
        firstName: "",
        lastName: "",
        birthDate: "",
        genderId: "",
      },
      loading: false,
    };
  }
  componentDidMount = async (data1) => {
    // var data = await this.props.fetchCategoryName(this.state.name);
    // if (data != false) {
    //   this.dropVal = data.data.Data.globalCodeData;
    // }
  

        //gender-globally
        var _clientGender = await this.props.fetchCategoryName(
          this.state.name
        );
        if (_clientGender != false) {
          this.dropvalGender = _clientGender.data.Data.globalCodeData;
          this.dropvalGender.forEach((element) => {
            this.GenderOptions.push({
              text: element.CodeName,
              value: element.GlobalCodeId,
            });
          });
        }
     //get-selected-gender
     var data1 = this.props.user.Data.ClientId;
     this.state.fields.clientId = data1;
    this.props.getUserInfo(data1);
    if (this.props.saveData.data) {
      this.setState({
        selectedGender: this.props.saveData.data.Data.GenderId,
      });
      this.state.fields.genderId = this.props.saveData.data.Data.GenderId;
      //    }
  
      // //if licnedeNumber is not updated
      this.setState({
        firstName: this.props.saveData.data.Data.FirstName,
      });
      this.state.fields.firstName = this.props.saveData.data.Data.FirstName;
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
    this.resetError("birthDate");

    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.birthDate = value;
      return { fields: fields };
    });
  };

  handleValidation = () => {
    let fields = this.state.fields;
    let errors = this.state.errors;
    let formIsValid = true;

    if (fields["birthDate"] === "") {
      formIsValid = false;
      errors["birthDate"] = "Date of Birth can't be blank";
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

  handleChanges = (e, { value })=> {
    // var InfoAs = e.target.outerText;
    // var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
    //   .GlobalCodeId;
    // this.state.fields.genderId = globalId;
    // this.setState({ genderValue: value });

      var infoGender = value;
    this.setState({
      selectedGender: infoGender,
    });
    debugger
    var globalGenderId = this.dropvalGender.filter(
      (y) => y.GlobalCodeId == infoGender
    )[0].GlobalCodeId;
    this.state.fields.genderId = globalGenderId;
  };


  saveProfile = async (e, data) => {
    e.preventDefault();
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.handleValidation()) {
      var res = await this.props.fetchUserInfo(this.state.fields);
      if (res == true) {
      } else {
      }
    }
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
                                  //   this.props.saveData.data
                                  //     ? this.props.saveData.data.Data.FirstName
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
                                  // value={
                                  //   this.props.saveData.data
                                  //     ? this.props.saveData.data.Data.LastName
                                  //     : this.state.fields.lastName
                                  // }
                                  value={ this.state.fields.lastName&& this.state.fields.lastName}
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
                                  options={this.GenderOptions}
                                  selection
                                  value={this.state.selectedGender}
                                  onChange={this.handleChanges}
                                  validators={["required"]}
                                  errorMessages={["this field is required"]}
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
                                      ? this.props.saveData.data.Data.BirthDate
                                      : this.state.fields.birthDate
                                  }
                                  // value={this.state.fields.birthDate}
                                  dateFormat={"MM-DD-YYYY"}
                                  maxDate={maxdate}
                                  onChange={this.handleChangeDate}
                                />
                                {this.hasError("birthDate") && (
                                  <div className="ui pointing label">
                                    <div style={{ color: "red" }}>
                                      {this.state.errors["birthDate"]}
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
    user: state.user.user,
    saveData: state.clientReducer.saveData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (data) => dispatch(fetchUserInfo(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    getUserInfo: (data) => dispatch(getUserInfo(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
);
