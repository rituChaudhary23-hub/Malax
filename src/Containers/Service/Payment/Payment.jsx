import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Button, Label, Form, Input, TextArea } from "semantic-ui-react";
export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  completeDetails = () => {
    window.location.href = "/client-profile";
  };

  render() {
    return (
      <div className="mainBlock">
        <Header />
        <h3>Payment information</h3>
        <div>
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
        </div>
        <Button
          color="blue"
          type="button"
          className="btn btn-sm del-btn"
          onClick={this.completeDetails}
        >
          Complete
        </Button>
        <Button
          color="grey"
          type="button"
          className="btn btn-sm del-btn"
          onClick={this.close}
        >
          Connect with Stripe
        </Button>
      </div>
    );
  }
}

export default Payment;
