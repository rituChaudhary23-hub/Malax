import React, { Component } from "react";
import { Button, Modal, Form, Input, Label, TextArea } from "semantic-ui-react";

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.paymodal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Payment information</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Form>
                <Form.Field>
                  <Label>Card Holder's name</Label>
                  <Input
                    className="login-form-textfield"
                    id="name"
                    fullWidth={true}
                    name="name"
                    type="name"
                  />
                </Form.Field>
                <Form.Field>
                  <Label>Card number</Label>
                  <Input
                    className="login-form-textfield"
                    id="name"
                    fullWidth={true}
                    name="name"
                    type="name"
                  />
                </Form.Field>
                <Form.Field>
                  <Label>CVV Number</Label>
                  <Input
                    className="login-form-textfield"
                    id="name"
                    fullWidth={true}
                    name="name"
                    type="name"
                  />
                </Form.Field>
                <Form.Field>
                  <Label> Card Expiration</Label>
                  <Input
                    className="login-form-textfield"
                    id="date"
                    fullWidth={true}
                    name="date"
                    type="date"
                  />
                </Form.Field>

                <Form.Field>
                  <Label>Zip Code</Label>
                  <Input
                    className="login-form-textfield"
                    id="name"
                    fullWidth={true}
                    name="name"
                    type="name"
                  />
                </Form.Field>
                <Form.Field>
                  <Label>Address</Label>
                  <TextArea placeholder="" />
                </Form.Field>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="blue"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.deleteUser}
            >
              Connect with Stripe
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

export default Payment;
