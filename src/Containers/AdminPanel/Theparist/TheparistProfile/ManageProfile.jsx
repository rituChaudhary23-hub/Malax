import React, { Component } from "react";
import { Button, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ManageTheparistProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back = () => {
    window.location.href = "/dashboard";
  };
  render() {
    return (
      <div>
        <div>
          <h2>Theparist Profile</h2>
        </div>
        <div>
          <Label>Email Address : </Label>
          <br></br>
          <Label>Telephone no : </Label>
          <br></br>
          <Label>Theparist Profile : </Label>
          <br></br>
          <Label>Licensure : </Label>
          <br></br>
          <Label>Modalities : </Label>
          <br></br>
          <Label>Identity : </Label>
          <br></br>
          <Label>Current Photo : </Label>
          <br></br>
          <Label>Consent Forms: </Label>
          <br></br>
          <Label>Massage Preferences : </Label>
          <br></br>
          <Label>Location : </Label>
          <br></br>
          <Label>Identity : </Label>
          <br></br>
          <Label>Current Photo: </Label>
          <br></br>
        </div>
        <Button
          color="grey"
          type="button"
          className="btn btn-sm del-btn"
          onClick={this.back}
        >
          Back
        </Button>
      </div>
    );
  }
}

export default ManageTheparistProfile;
