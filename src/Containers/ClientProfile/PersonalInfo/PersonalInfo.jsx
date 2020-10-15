import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import moment from "moment";

import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];

const currentdate = new Date();
const currentYear = currentdate.getFullYear();
const maxdate = new Date(currentdate.setYear(currentdate.getFullYear()));

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "m",
      fields: {
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
      },
      errors: {
        first_name: "",
        last_name: "",
        dob: "",
        gender: "",
      },
      loading: false,
    };
  }

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

    // this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.dob = value;
      return { fields: fields };
    });
  };

  saveProfile = (e) => {
    this.setState({ loading: true });
    if (this.handleValidation()) {
      const { first_name, last_name, dob } = this.state.fields;
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

  cancelInfo=()=>{
    window.location.href="/client-profile"
  }
  render() {
    const { submitting } = this.props;
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
                          // onNext={this.props.onNext(this.props.onNext)}
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
                                        "first_name"
                                      )}
                                      value={this.state.fields.first_name}
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
                                        "last_name"
                                      )}
                                      value={this.state.fields.last_name}
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

                                    <select className="form-control" id="sel1">
                                      <option>Male</option>
                                      <option>Female</option>
                                    </select>
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
                                      // type="date"
                                      value={this.state.fields.dob}
                                      dateFormat={"YYYY-MM-DD"}
                                      maxDate={maxdate}
                                      // maxDate={moment().subtract(1, "years")}
                                      // initialDate={moment().subtract(
                                      //   1,
                                      //   "years"
                                      // )}
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

export default PersonalInfo;
