import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";

const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];
const stateOptions = [
  { key: "om", text: "New York", value: "New York" },
  { key: "ok", text: "Texas", value: "Texas" },
];

class Licensure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        doc_type: "",
        doc_number: "",

        date: "",
        exp_date: "",

        gender: "",
        state: "",
        number: "",
      },
      errors: {
        date: "",
        gender: "",
        number: "",
        exp_date: "",
        zip_code: "",
      },
      loading: false,
    };
  }
  handleChangeDate = (event, { name, value }) => {
    this.resetError("date");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.date = value;
      return { fields: fields };
    });
  };
  handleExpDate = (event, { name, value }) => {
    this.resetError("exp_date");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.exp_date = value;
      return { fields: fields };
    });
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  submitDocument = (e) => {
    if (!this.validate()) {
      return;
    }

    const { doc_type, doc_number } = this.state.fields;
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
    if (fields["date"] === "") {
      formIsValid = false;
      errors["date"] = "Date can't be blank";
    }
    if (fields["exp_date"] === "") {
      formIsValid = false;
      errors["exp_date"] = "Date can't be blank";
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
                                  {/* <Dropdown
                                    options={stateOptions}
                                    selection
                                    name="state"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.state}
                                    validators={["required"]}
                                    errorMessages={["this field is required"]}
                                  />{" "} */}
                                  <Dropdown
                                    options={stateOptions}
                                    selection
                                    placeholder="Select State"
                                    onChange={this.selectState}
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
                                    value={this.state.fields.date}
                                    dateFormat={"YYYY-MM-DD"}
                                    onChange={this.handleChangeDate}
                                  />
                                  {this.hasError("date") && (
                                    <div className="ui pointing label">
                                      <div style={{ color: "red" }}>
                                        {this.state.errors["date"]}
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
                                    value={this.state.fields.exp_date}
                                    dateFormat={"YYYY-MM-DD"}
                                    onChange={this.handleExpDate}
                                  />
                                  {this.hasError("date") && (
                                    <div className="ui pointing label">
                                      <div style={{ color: "red" }}>
                                        {this.state.errors["date"]}
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
                                    margin={"normal"}
                                    onChange={this.setFormValue.bind(
                                      this,
                                      "number"
                                    )}
                                    value={this.state.fields.number}
                                    validators={["required"]}
                                    errorMessages={[
                                      "this field is required",
                                      "Invalid Code",
                                    ]}
                                    autoComplete="false"
                                  />{" "}
                                </div>

                                <div className="form-group">
                                  {" "}
                                  <label for="usr" className="chkBox">
                                    Gender{" "}
                                  </label>
                                  <Dropdown
                                    options={options}
                                    selection
                                    name="gender"
                                    onChange={this.dropdownChange}
                                    value={this.state.fields.gender}
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

export default Licensure;
