import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import { fetchUserHistory } from "../../../redux/actions/client.action";
import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
                          autocomplete="off"
                          onSubmit={this.saveMedicalHistory}
                          onError={this.handleValidation}
                        >
                          <div
                            className="tab-pane container-fluid"
                            id="Personal"
                          >
                            <div className="container">
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
                                      value={
                                        this.state.fields.emergencyContactName
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
                                      fullWidth={true}
                                      name="number"
                                     type="tel"
                                     minLength="10"
                                     maxLength="10"
                                      onChange={this.setFormValue.bind(
                                        this,
                                        "emergencyPhoneNumber"
                                      )}
                                      value={
                                        this.state.fields.emergencyPhoneNumber
                                      }
                                      validators={["required"]}
                                      errorMessages={[
                                        "this field is required",
                                        "Invalid Number",
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
                                      value={
                                        this.state.fields.physicianContactName
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
                                      fullWidth={true}
                                      name="number"
                                     type="tel"
                                      minLength="10"
                                      maxLength="10"
                                      onChange={this.setFormValue.bind(
                                        this,
                                        "physicianPhoneNumber"
                                      )}
                                      value={
                                        this.state.fields.physicianPhoneNumber
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
                                      value={
                                        this.state.fields.currentMedications
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
                                      value={this.state.fields.surgeries}
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
                                      value={this.state.fields.hobbies}
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
                                      value={this.state.fields.dislocations}
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
                                      value={this.state.fields.profession}
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
  return {
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserHistory: (data) => dispatch(fetchUserHistory(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(History)
);
