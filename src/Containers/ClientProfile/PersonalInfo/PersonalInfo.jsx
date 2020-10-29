import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../../redux/actions/global.action";

import { fetchUserInfo, getUserInfo } from "../../../redux/actions/client.action";

import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const maxdate = new Date(currentdate.setYear(currentdate.getFullYear()));

class PersonalInfo extends Component {
  golbalID = 0;
  dropVal: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "Gender",
      genderValue: "",
      
        clientId: 0,
   
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
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
    data1 = {
      userId: this.props.user.Data.UserId,
    };
    this.props.getUserInfo(data1)
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

  handleChanges = async (e, value) => {
    var InfoAs = e.target.outerText;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.genderId = globalId;
    this.setState({ genderValue: value });
  };
  saveProfile = async (e, data) => {
    e.preventDefault();
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.handleValidation()) {
      var res = await this.props.fetchUserInfo(this.state.fields);
      if (res == true) {
        console.log("res--------", res);
      } else {
      }
    }
  };

  render() {
    const { submitting } = this.props;
    const options = [
      { key: "m", text: "Male", value: "Male" },
      { key: "k", text: "Female", value: "Female" },
    ];
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-12 my-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis tempus sed turpis cras quam ac tortor tempus amet.
                      Dolor eget enim ultrices dictum tempor pharetra. Id
                      montes, non mattis viverra. Vel nibh arcu venenatis leo
                      quis nunc, tempus maecenas enim.
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
                          <div
                            className="tab-pane container-fluid active"
                            id="Personal"
                          >
                            <div className="container">
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
                                      value=
                                      
                                      {this.props.saveData.data
                                        ? this.props.saveashu.data.Data.FirstName
                                        : this.state.fields.firstName}

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
                                      value={this.state.fields.lastName}
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
                                      name="info"
                                      type="submit"
                                      disabled={submitting}
                                      className="dropNav"
                                      text="Please Select"
                                      options={options}
                                      value={this.state.genderValue}
                                      onChange={this.handleChanges}
                                      simple
                                      item
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
                                      value={this.state.fields.birthDate}
                                      dateFormat={"YYYY-MM-DD"}
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
  console.log("sttate dekho--------",state)
  return {
    user: state.user.user,
    saveData: state.clientReducer.saveData,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserInfo: (data) => dispatch(fetchUserInfo(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    getUserInfo:(data)=>dispatch(getUserInfo(data))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)
);
