import React, { Component } from "react";
import { Button, Form, Input, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];
const stateOptions = [
  { key: "om", text: "New York", value: "New York" },
  { key: "ok", text: "Texas", value: "Texas" },
];

export class Licensure extends Component {
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
              <label>Licensed Since</label>
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
              <label>Expiration Date</label>
              <Input
                className="login-form-textfield"
                id="date"
                fullWidth={true}
                name="date"
                type="date"
                //   margin={"normal"}
              />
            </Form.Field>
            <label>Number</label>
            <Input
              className="login-form-textfield"
              id="number"
              fullWidth={true}
              name="number"
              type="number"
              //   margin={"normal"}
            />
          </Form.Field>

          <Form.Field>
            <label>Gender</label>
            <Menu>
              <Dropdown options={options} selection value={this.state.gender} />
            </Menu>
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

export default Licensure;
