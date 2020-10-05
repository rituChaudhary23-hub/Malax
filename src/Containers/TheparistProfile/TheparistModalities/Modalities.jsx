import React, { Component } from "react";

import { Button, Form } from "semantic-ui-react";

export class Modalities extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back = () => {
    window.location.href = "/theparist-profile";
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

        <section class="therapistProDes">
          <div class="card">
            <div class="card-body">
              <div class="tab-pane container-fluid" id="Modalities">
                <div class="thrChkBox">
                  <form>
                    <div class="form-check form-check-inline">
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
                    </div>
                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_green"
                        />
                        <span class="form-check-label" for="chk_green">
                          Deep Tissue
                        </span>
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_blue"
                        />
                        <span class="form-check-label" for="chk_blue">
                          Sports
                        </span>
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_red1"
                        />
                        <span class="form-check-label" for="chk_red1">
                          Sleep
                        </span>
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_green1"
                        />
                        <span class="form-check-label" for="chk_green1">
                          Pregnancy
                        </span>
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_blue1"
                        />
                        <span class="form-check-label" for="chk_blue1">
                          Senior
                        </span>
                      </label>
                    </div>

                    <div class="form-check form-check-inline">
                      <label>
                        <input
                          class="form-check-input"
                          type="checkbox"
                          id="chk_red2"
                        />
                        <span class="form-check-label" for="chk_red2">
                          Therapeutic
                        </span>
                      </label>
                    </div>
                  </form>
                </div>
                <div class="text-right mt-5">
                  <Button
                    type="button"
                    class="btn btn-primary mr-4"
                    data-dismiss="modal"
                    onClick={this.back}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    class="btn btn-cancel"
                    data-dismiss="modal"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Modalities;
