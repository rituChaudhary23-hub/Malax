import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

export class History extends Component {
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
        <h2>Emergency Contact</h2>
        <br></br>
        <Form>
          <Form.Field>
            <label>Name</label>
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
            <label>Phone Number</label>
            <Input
              className="login-form-textfield"
              id="number"
              fullWidth={true}
              name="number"
              type="number"
              //   margin={"normal"}
            />
          </Form.Field>
          <br></br>
          <h2>Physician contact</h2>
          <br></br>
          <Form.Field>
            <label>Name</label>
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
            <label>Phone Number</label>
            <Input
              className="login-form-textfield"
              id="number"
              fullWidth={true}
              name="number"
              type="number"
              //   margin={"normal"}
            />
          </Form.Field>{" "}
          <Form.Field>
            <label>Current medications</label>
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
            <label>Surgeries</label>
            <Input
              className="login-form-textfield"
              id="number"
              fullWidth={true}
              name="number"
              type="number"
              //   margin={"normal"}
            />
          </Form.Field>{" "}
          <Form.Field>
            <label>Hobbies</label>
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
            <label>Dislocations</label>
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
            <label>Profession</label>
            <Input
              className="login-form-textfield"
              id="number"
              fullWidth={true}
              name="number"
              type="number"
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

export default History;
