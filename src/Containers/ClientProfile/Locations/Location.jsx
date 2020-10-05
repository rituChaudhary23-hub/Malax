import React, { Component } from "react";
import { Radio, Button } from "semantic-ui-react";

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                        value="1"
                        id="radio1"
                        type="radio"
                        checked
                      />
                      <label for="radio1">In home</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input name="radio" value="2" id="radio2" type="radio" />
                      <label for="radio2">At work</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input name="radio" value="3" id="radio3" type="radio" />
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
                        value="1"
                        id="Yes"
                        type="radio"
                        checked
                      />
                      <label for="Yes">Yes</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input name="radio1" value="2" id="No" type="radio" />
                      <label for="No">No</label>
                    </div>
                  </div>

                  <div class="radiobuttons">
                    <h4 class="my-4">Presence of pets</h4>
                    <div class="rdio rdio-primary radio-inline">
                      <input
                        name="radio2"
                        value="1"
                        id="Yes1"
                        type="radio"
                        checked
                      />
                      <label for="Yes1">Yes</label>
                    </div>
                    <div class="rdio rdio-primary radio-inline">
                      <input name="radio2" value="2" id="No2" type="radio" />
                      <label for="No2">No</label>
                    </div>
                  </div>
                </div>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="text-right">
                        <Button
                          type="button"
                          className="btn btn-primary mr-4"
                          data-dismiss="modal"
                          onClick={this.back}
                        >
                          Save
                        </Button>
                        <Button
                          type="button"
                          className="btn btn-cancel"
                          data-dismiss="modal"
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

export default Location;
