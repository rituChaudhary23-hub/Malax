import React, { Component } from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";

export class UpdateEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.modal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3> Update email address</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <label>
                A confirmation message will be sent to your new email address.
              </label>
              <h4>Current email ID :client@aol.com</h4>
              <h4>
                New email ID :
                <Form>
                  <Form.Field>
                    <Input
                      className="login-form-textfield"
                      id="email"
                      fullWidth={true}
                      name="email"
                      type="email"
                    />
                  </Form.Field>
                </Form>
              </h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="blue"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.deleteUser}
            >
              Update Email
            </Button>
            <Button
              color="grey"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.close}
            >
              Cancel
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default UpdateEmail;
