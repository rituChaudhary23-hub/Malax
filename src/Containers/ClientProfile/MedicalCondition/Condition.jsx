import React, { Component } from "react";
import { Form, TextArea } from "semantic-ui-react";
import { Field } from "redux-form";

export class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Arthritis
                  </span>
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
                  <span class="form-check-label" for="chk_red">
                    Bursitis
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Fibromyalgia
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Headaches
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Swollen joints
                  </span>
                </label>
              </span>
            </div>
            <h2>Areas of pain, injury, tension, restricted movement</h2>
            <div class="form-check form-check-inline">
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Head / Neck
                  </span>
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
                  <span class="form-check-label" for="chk_red">
                    Arms
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Shoulders
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Elbows
                  </span>
                </label>
              </span>
              <span>
                <label>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id="chk_red"
                  />
                  <span class="form-check-label" for="chk_red">
                    Wrists
                  </span>
                </label>
              </span>
            </div>
            <div>
              {" "}
              <h3>Any other health concerns</h3>
              <TextArea placeholder="" />
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Condition;
