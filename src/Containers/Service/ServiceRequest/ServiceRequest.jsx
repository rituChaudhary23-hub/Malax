import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Dropdown,
  Menu,
  TextArea,
} from "semantic-ui-react";
import Header from "../../../Components/Shared/Header";
const options = [
  { key: "m", text: "20 minutes", value: "20 minutes" },
  { key: "k", text: "40 minutes", value: "40 minutes" },
  { key: "k", text: "60 minutes", value: "60 minutes" },
];
const massageOptions = [{ key: "r", text: "Relaxation", value: "relaxation" }];

const locationOptions = [
  { key: "g", text: "Town-Heights", value: "Town-Heights" },
  { key: "s", text: "Location 2", value: "Location 2" },
  { key: "s", text: "Location 3", value: "Location 3" },
];
const stateOptions = [
  { key: "g", text: "New York", value: "New York" },
  { key: "s", text: "Texas", value: "Texas" },
];
const typeOptions = [
  { key: "g", text: "At Home", value: "At Home" },
  { key: "s", text: "At Work", value: "At Work" },
  { key: "s", text: "Other", value: "Other" },
];
const genderOptions = [
  { key: "u", text: "Male Only", value: "m" },
  { key: "j", text: "Female Only", value: "f" },
];
class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  requestAppoint = () => {
    window.location.href = "/payment";
  };
  render() {
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
                    <Form>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                <label for="usr" className="chkBox">
                                  Date{" "}
                                </label>

                                <Input
                                  id="date"
                                  fullWidth={true}
                                  name="date"
                                  type="date"
                                  //   margin={"normal"}
                                />
                              </Form.Field>
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
                              <Form.Field>
                                <Input
                                  className="form-control date"
                                  value="11:00"
                                  step="900"
                                  id="time"
                                  fullWidth={true}
                                  name="time"
                                  type="time"
                                  //   margin={"normal"}
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              {/* <input type="time" className="form-control date" value="13:00" step="900"> */}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Time length{" "}
                                </label>
                                <Dropdown
                                  options={options}
                                  selection
                                  value={this.state.time}
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Type of massage{" "}
                                </label>
                                <Dropdown
                                  options={massageOptions}
                                  selection
                                  value={this.state.massage}
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Therapist gender preference{" "}
                                </label>
                                <Dropdown
                                  options={genderOptions}
                                  selection
                                  value={this.state.gender}
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                <label for="usr" className="chkBox">
                                  General location{" "}
                                </label>

                                <Dropdown
                                  className="form-control"
                                  options={locationOptions}
                                  selection
                                  value={this.state.location}
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                <label for="usr" className="chkBox">
                                  Street Address{" "}
                                </label>
                                <textarea
                                  className="form-control textArea"
                                  rows="4"
                                  id="comment"
                                ></textarea>
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  City{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="city"
                                  fullWidth={true}
                                  name="city"
                                  margin={"normal"}
                                />{" "}
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  State{" "}
                                </label>
                                <Dropdown
                                  options={stateOptions}
                                  selection
                                  value={this.state.states}
                                />{" "}
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Zip Code
                                </label>
                                <Input
                                  className="login-form-textfield"
                                  id="zip code"
                                  fullWidth={true}
                                  name="zip_code"
                                  margin={"normal"}
                                />{" "}
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                <label for="usr" className="chkBox">
                                  Location Type{" "}
                                </label>

                                <Dropdown
                                  options={typeOptions}
                                  selection
                                  value={this.state.type}
                                />
                              </Form.Field>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="text-right">
                              <Button
                                type="button"
                                className="btn btn-primary mr-4 reqApp"
                                data-dismiss="modal"
                                onClick={this.requestAppoint}
                              >
                                Request Appointment
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-cancel"
                                data-dismiss="modal"
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

export default ServiceRequest;
