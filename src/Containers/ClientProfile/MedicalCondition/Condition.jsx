import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field } from "redux-form";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back() {
    window.location.href = "/client-profile";
  }

  // saveCondition = () => {
  //   var fields = "input[name='list']".serializeArray();
  //   if (fields.length == 0) {
  //     alert("nothing selected");
  //     // cancel submit
  //     return false;
  //   } else {
  //     alert(fields.length + " items selected");
  //   }
  // };

  render() {
    const { submitting } = this.props;
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-12 my-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis tempus // sed turpis cras quam ac tortor tempus amet.
                      Dolor eget enim ultrices // dictum tempor pharetra. Id
                      montes, non mattis viverra. Vel nibh arcu // venenatis leo
                      quis nunc, tempus maecenas enim.
                    </p>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-pane container-fluid" id="conditions">
                        <div className="thrChkBox graybg">
                          <Form
                            ref="form"
                            autocomplete="off"
                            onSubmit={this.saveCondition}
                            onError={this.handleValidation}
                          >
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="list"
                                  id="chk_red"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red"
                                >
                                  Arthritis
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="list"
                                  id="chk_green"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_green"
                                >
                                  Bursitis
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_blue"
                                >
                                  Headaches
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
                                <span
                                  className="form-check-label"
                                  for="chk_red1"
                                >
                                  Swollen joints
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_green1"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_green1"
                                >
                                  Fibromyalgia
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue1"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_blue1"
                                >
                                  High blood pressure
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Low blood pressure
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Warts
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Stroke
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Chest pain
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Seizures / convulsions
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Constipation
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Vericose veins
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Cancer
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
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Skin conditions
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_red2"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  None of the above
                                </span>
                              </label>
                            </div>
                          </Form>
                        </div>

                        <h5 className="mt-5 mb-2">
                          Areas of pain, injury, tension, restricted movement
                        </h5>
                        <div className="thrChkBox graybg">
                          <Form>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_red"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red"
                                >
                                  Head / Neck
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_green"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_green"
                                >
                                  Arms
                                </span>
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_blue"
                                >
                                  Shoulders
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                />{" "}
                                <span
                                  className="form-check-label"
                                  for="chk_blue1"
                                >
                                  Hands
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Hips
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                />{" "}
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Legs
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                />{" "}
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  Knees
                                </span>
                              </label>
                            </div>

                            <div className="form-check form-check-inline">
                              <label>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="chk_blue"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  None of the above
                                </span>
                              </label>
                            </div>
                          </Form>
                        </div>

                        <div className="container">
                          <div className="row">
                            <div className="col-sm-12 mt-5">
                              <div className="form-group">
                                <label for="usr" className="chkBox">
                                  Any other health concerns{" "}
                                </label>
                                <textarea
                                  className="form-control textArea"
                                  rows="6"
                                  id="comment"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right mt-5">
                          <Button
                            type="submit"
                            className="btn btn-primary mr-4"
                            data-dismiss="modal"
                            disabled={submitting}
                            onClick={this.saveCondition}
                          >
                            Save
                          </Button>
                          <Button
                            type="button"
                            className="btn btn-cancel"
                            data-dismiss="modal"
                            onClick={this.back}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Condition;
