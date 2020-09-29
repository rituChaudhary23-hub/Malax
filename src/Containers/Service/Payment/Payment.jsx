import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Button, Label } from "semantic-ui-react";
export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mainBlock">
        <Header />
        <div>
          <h2>Payment Details</h2>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tellus
            nulla volutpat risus id adipiscing leo tristique. Sollicitudin ac
            rhoncus posuere bibendum aliquet elementum viverra volutpat. Amet
            libero in eu, ut erat platea laoreet. Augue scelerisque nunc
            adipiscing ultrices orci, sollicitudin. Sit egestas ultricies ipsum,
            posuere ut bibendum semper. Non nibh nibh accumsan metus pharetra
            integer aliquam vitae.
          </p>
          <br></br>
          <Label>60minutes massage : $80</Label>
          <br></br>
          <Label>Theparist Tip : $15</Label>
          <br></br>
          <Label>Malax Service Charge : $20</Label>
          <br></br>
          <Label>Total : $115</Label>
          <br></br>
        </div>
        <Button
          color="blue"
          type="button"
          className="btn btn-sm del-btn"
          onClick={this.deleteUser}
        >
          Complete
        </Button>
        <Button
          color="grey"
          type="button"
          className="btn btn-sm del-btn"
          onClick={this.close}
        >
          Cancel
        </Button>
      </div>
    );
  }
}

export default Payment;
