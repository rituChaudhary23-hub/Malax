import React, { Component } from "react";
import { Field } from "redux-form";
import { Form, TextArea, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];
const FrequencyOptions = [
  { key: "m", text: "Daily", value: "daily" },
  { key: "k", text: "Weekly", value: "weekly" },
  { key: "k", text: "Monthky", value: "monthly" },
];

export class Massage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "male",
      frequency: "daily",
    };
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
        <div>
          <Form>
            <div class="form-check form-check-inline">
              <h3>Type perferred</h3>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  Relaxation
                </label>

                {""}
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  Sleep
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  Senior
                </label>
              </span>
            </div>
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

            <div class="form-check form-check-inline"></div>
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
          </Form>
        </div>
      </div>
    );
  }
}

export default Massage;
