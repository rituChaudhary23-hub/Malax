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
export class ServiceRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  requestAppoint = () => {
    window.location.href = "/payment";
  };
  render() {
    return (
      <div>
        <Header />
        <div>
          <h2>Service Request</h2>
        </div>
        <br></br>
        <div>
          <Form>
            <Form.Field>
              <label>Birth Date</label>
              <Input
                className="login-form-textfield"
                id="date"
                fullWidth={true}
                name="date"
                type="date"
                //   margin={"normal"}
              />
            </Form.Field>
            <Form.Field>
              <label> Time range</label>
              <Input
                className="login-form-textfield"
                id="time"
                fullWidth={true}
                name="time"
                type="time"
                //   margin={"normal"}
              />
            </Form.Field>
            <Form.Field>
              <label>Time length</label>
              <Menu>
                <Dropdown options={options} selection value={this.state.time} />
              </Menu>
            </Form.Field>{" "}
            <Form.Field>
              <label>Type of massage</label>
              <Menu>
                <Dropdown
                  options={massageOptions}
                  selection
                  value={this.state.massage}
                />
              </Menu>
            </Form.Field>{" "}
            <Form.Field>
              <label>Therapist gender preference</label>
              <Menu>
                <Dropdown
                  options={genderOptions}
                  selection
                  value={this.state.gender}
                />
              </Menu>
            </Form.Field>{" "}
            <Form.Field>
              <label>General location</label>
              <Menu>
                <Dropdown
                  options={locationOptions}
                  selection
                  value={this.state.location}
                />
              </Menu>
            </Form.Field>
            <Form.Field>
              <label>Street Address</label>
              <TextArea placeholder="" />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <Input
                className="login-form-textfield"
                id="city"
                fullWidth={true}
                name="city"
                margin={"normal"}
              />
            </Form.Field>
            <Form.Field>
              <label>State</label>
              <Menu>
                <Dropdown
                  options={stateOptions}
                  selection
                  value={this.state.states}
                />
              </Menu>
            </Form.Field>
            <Form.Field>
              <label>Zip Code</label>
              <Input
                className="login-form-textfield"
                id="zip code"
                fullWidth={true}
                name="zip_code"
                margin={"normal"}
              />
            </Form.Field>
            <Form.Field>
              <label>Location Type</label>
              <Menu>
                <Dropdown
                  options={typeOptions}
                  selection
                  value={this.state.type}
                />
              </Menu>
            </Form.Field>
            <div className="form-button log-btns">
              <Button
                className="ui green button btn btn-primary btn-md w-40 mr-0"
                onClick={this.requestAppoint}
              >
                Request Appointment
              </Button>
              <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default ServiceRequest;
