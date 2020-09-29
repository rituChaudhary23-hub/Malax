import React, { Component } from "react";
import { Button, Form, Input, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: "m" };
  }

  render() {
    return (
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            sed turpis cras quam ac tortor tempus amet. Dolor eget enim ultrices
            dictum tempor pharetra. Id montes, non mattis viverra. Vel nibh arcu
            venenatis leo quis nunc, tempus maecenas enim.
          </p>
        </div>
        <br></br>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <Input
              className="login-form-textfield"
              id="name"
              fullWidth={true}
              name="name"
              type="name"
              //   margin={"normal"}
            />
          </Form.Field>

          <Form.Field>
            <label>Last Name</label>
            <Input
              className="login-form-textfield"
              id="name"
              fullWidth={true}
              name="name"
              type="name"
              //   margin={"normal"}
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Menu>
              <Dropdown options={options} selection value={this.state.gender} />
            </Menu>
          </Form.Field>
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
          <div className="form-button log-btns">
            <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
              Save
            </Button>
            <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default PersonalInfo;
