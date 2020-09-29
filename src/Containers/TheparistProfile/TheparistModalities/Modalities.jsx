import React, { Component } from "react";

import { Button, Form } from "semantic-ui-react";

export class Modalities extends Component {
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
                    Relaxation
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
                    Deep Tissue
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
                    Sports
                  </span>
                </label>
              </span>
            </div>
            <div className="form-button log-btns">
              <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
                Save
              </Button>
              <Button className="ui green button btn btn-primary btn-md w-40 mr-0">
                Cancel
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default Modalities;
