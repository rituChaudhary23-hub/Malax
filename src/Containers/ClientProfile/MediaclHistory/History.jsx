import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";

import { Form, Input, Dropdown } from "semantic-ui-react-form-validator";
const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        emergency_Contactname: "",
        emergency_phone: "",
        physician_Contactname: "",
        phone: "",
        hobbies: "",
        medications: "",
        Surgeries: "",
        Dislocations: "",
        Profession: "",
      },
      errors: {
        emergency_Contactname: "",
        emergency_phone: "",
        physician_Contactname: "",
        phone: "",
        hobbies: "",
        medications: "",
        Surgeries: "",
        Dislocations: "",
        Profession: "",
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
    window.location.href="/update-client-profile"
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
                          autocomplete="off"
                          onSubmit={this.saveProfile}
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
                                        "emergency_Contactname"
                                      )}
                                      value={
                                        this.state.fields.emergency_Contactname
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
                                      // type="number"
                                      onChange={this.setFormValue.bind(
                                        this,
                                        "emergency_phone"
                                      )}
                                      value={this.state.fields.emergency_phone}
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
                                        "physician_Contactname"
                                      )}
                                      value={
                                        this.state.fields.physician_Contactname
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
                                      // type="number"
                                      onChange={this.setFormValue.bind(
                                        this,
                                        "phone"
                                      )}
                                      value={this.state.fields.phone}
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
                                        "medications"
                                      )}
                                      value={this.state.fields.medications}
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
                                        "Surgeries"
                                      )}
                                      value={this.state.fields.Surgeries}
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
                                        "Dislocations"
                                      )}
                                      value={this.state.fields.Dislocations}
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
                                        "Profession"
                                      )}
                                      value={this.state.fields.Profession}
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

export default History;
