import React, { Component } from "react";

import { Button, Modal, Form, Input } from "semantic-ui-react";

export class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.Verifymodal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Confirm phone number</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <label>
                A text message containing a verification code will be sent to
                this phone number for cofirmation.
              </label>
              <h4>
                Phone Number
                <Form>
                  <Form.Field>
                    <Input
                      className="login-form-textfield"
                      id="number"
                      fullWidth={true}
                      name="number"
                      type="number"
                    />
                  </Form.Field>
                </Form>
              </h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" type="button" className="btn btn-sm del-btn">
              Verify
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

export default Verification;
