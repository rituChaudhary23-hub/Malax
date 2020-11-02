import React, { Component } from "react";
import { Radio, Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  fetchClientLoc,
  getLocation,
} from "../../../redux/actions/client.action";

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,
      fields: {
        clientLocationId: 0,
        clientId: 0,
        locationForMessage: "",
        spaceAvailability: "",
        presencePets: "",
        actionBy: "",
      },
    };
  }
  componentDidMount = async (data1) => {
    var data1 = this.props.user.Data.ClientId;
    this.state.clientId = data1;
    this.props.getLocation(data1);
  };

  updateLoc = (e) => {
    debugger;
    if (e.target.checked) {
      console.log("-------ritu----------", e.target.value);
      // this.setState({ locationForMessage: e.target.value });
      var data1 = e.target.value;
      this.state.fields.locationForMessage = data1;
    }
  };

  updateConfirm = (e) => {
    debugger;
    if (e.target.checked) {
      console.log("-------ritu-ashu---------", e.target.value);
      var space = e.target.value;
      this.state.fields.spaceAvailability = space;
    }
  };

  updatePets = (e) => {
    debugger;
    if (e.target.checked) {
      console.log("-------ritu-ashu---------", e.target.value);
      var petsdata=e.target.value
      this.state.fields.presencePets=petsdata;
    }
  };

  updateLocation = async () => {
    debugger;
    var data = this.props.user.Data.ClientId;
    this.state.fields.clientId = data;

    debugger;
    var res = await this.props.fetchClientLoc(this.state.fields);
    if (res == true) {
      console.log("res--------", res);
    } else {
    }
  };

  back() {
    window.location.href = "/client-profile";
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

        <section className="therapistProDes">
          <div className="card">
            <div className="card-body">
              <div class="tab-pane container-fluid" id="Locations">
                <h5 class="my-3">Where will you be receiving massages?</h5>
                <div class="thrChkBoxSec">
                  <div class="radiobuttons">
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio"
                        value="In home"
                        id="radio1"
                        type="radio"
                        onChange={this.updateLoc}
                      />
                      <label for="radio1">In home</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio"
                        value="At work"
                        id="radio2"
                        type="radio"
                        onChange={this.updateLoc}
                      />
                      <label for="radio2">At work</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio"
                        value="Other"
                        id="radio3"
                        type="radio"
                        onChange={this.updateLoc}
                      />
                      <label for="radio3">Other</label>
                    </div>
                  </div>
                </div>
                <div class="thrChkBoxSec whitebg">
                  <div class="radiobuttons">
                    <h4 class="my-4">Space available confirmation</h4>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio1"
                        value="Yes"
                        id="Yes"
                        type="radio"
                        onChange={this.updateConfirm}
                      />
                      <label for="Yes">Yes</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio1"
                        value="No"
                        id="No"
                        type="radio"
                        onChange={this.updateConfirm}
                      />
                      <label for="No">No</label>
                    </div>
                  </div>

                  <div class="radiobuttons">
                    <h4 class="my-4">Presence of pets</h4>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio2"
                        value="Yes"
                        id="Yes1"
                        type="radio"
                        onChange={this.updatePets}
                      />
                      <label for="Yes1">Yes</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio2"
                        value="No"
                        id="No2"
                        type="radio"
                        onChange={this.updatePets}
                      />
                      <label for="No2">No</label>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="text-right">
                        <Button
                          color="blue"
                          type="submit"
                          className="btn btn-sm btn-primary"
                          onClick={this.updateLocation}
                        >
                          Save
                        </Button>
                        <Button
                          type="submit"
                          className="btn btn-cancel"
                          data-dismiss="modal"
                          onClick={this.back}
                        >
                          Cancel
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    saveMedicalData: state.clientReducer.saveMedicalData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientLoc: (data) => dispatch(fetchClientLoc(data)),
    getLocation: (data) => dispatch(getLocation(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Location)
);
