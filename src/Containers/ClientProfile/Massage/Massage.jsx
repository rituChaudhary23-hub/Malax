import React, { Component } from "react";
import { Field } from "redux-form";
import { Form, TextArea, Dropdown, Menu, Button } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "Male" },
  { key: "k", text: "Female", value: "f" },
];
const FrequencyOptions = [
  { key: "m", text: "Daily", value: "daily" },
  { key: "k", text: "Weekly", value: "weekly" },
  { key: "k", text: "Monthky", value: "monthly" },
];

class Massage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back = () => {
    window.location.href = "/client-profile";
  };
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
              <div className="tab-pane container-fluid" id="preferences">
                <h5 className="my-3">Type perferred</h5>
                <div className="thrChkBox graybg">
                  <form>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_red"
                        />
                        <span className="form-check-label" for="chk_red">
                          Relaxation
                        </span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_red"
                        />
                        <span className="form-check-label" for="chk_green">
                          Sleep
                        </span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="blue"
                        />{" "}
                        <span className="form-check-label" for="chk_blue">
                          Senior
                        </span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_red1"
                        />
                        <span className="form-check-label" for="chk_red1">
                          Therapeutic
                        </span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_green1"
                        />{" "}
                        <span className="form-check-label" for="chk_green1">
                          Pregnancy
                        </span>
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_red2"
                        />
                        <span className="form-check-label" for="chk_red2">
                          Deep Tissue
                        </span>
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <label>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="chk_red2"
                        />{" "}
                        <span className="form-check-label" for="chk_red2">
                          Sports
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 mt-5">
                      <div>
                        <h5>Therapist gender preference</h5>
                        <Menu>
                          <Dropdown
                            options={options}
                            selection
                            value={this.state.gender}
                          />
                        </Menu>{" "}
                      </div>

                      <div>
                        <h5>Frequency</h5>
                        <Menu>
                          <Dropdown
                            options={FrequencyOptions}
                            selection
                            value={this.state.frequency}
                          />
                        </Menu>
                      </div>

                      <div>
                        {" "}
                        <h5>Goals</h5>
                        <TextArea placeholder="" />
                      </div>
                      <div>
                        {" "}
                        <h5>General information for therapist</h5>
                        <TextArea placeholder="" />
                      </div>
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
              </div>{" "}
            </div>
          </div>
        </section>
        {/* </Form>
        </div> */}
      </div>
    );
  }
}

export default Massage;
