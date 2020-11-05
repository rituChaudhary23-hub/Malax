/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../../redux/actions/global.action";
import { fetchUserMedicalCondition } from "../../../redux/actions/client.action";

class Condition extends Component {
  dropVal: any;
  // _data=['rgerg','regergerg','ergerg'];
  _data: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "MedicalConditions",
      abc: {
        name: "MedicalConditionsAreas",
      },
      fields: {
        clientMedicalConditionId: 0,
        clientId: 0,
        healthConcerns: "",
        medicalConditionRequest: [
          {
            medicalConditionId: 0,
          },
        ],
        actionBy: "",
      },
    };
  }

  componentWillMount = async () => {
    debugger;
    var data = await this.props.fetchCategoryName(this.state.name);
    debugger;
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
    console.log("dropVal condiiton", this.dropVal);
    this._data = [];
    this.dropVal.forEach((element) => {
      this._data.push({ checkBox: element.CodeName });
    });
    console.log("Mydata", this._data);
  };


  back() {
    window.location.href = "/update-client-profile";
  }

  saveCondition = () => {
    debugger;
    var inputElems = document.getElementsByTagName("input"),
      count = 0;
    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;

        alert(count);
      }
    }
  };

  render() {
    debugger;
    const { submitting } = this.props;
    console.log("----Checkbox----",this._data)

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
                              {this._data &&
                                this._data.forEach((element) => {
                                debugger;
                                  <div className="form-check form-check-inline">
                                    <label>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="list"
                                        id="chk_red"
                                        // value={element.checkBox}
                                      />
                                      <span
                                        className="form-check-label"
                                        for="chk_red"
                                      >
                                        {element.checkBox}
                                      </span>
                                    </label>
                                  </div>;
                                })}
                            {/* <div className="form-check form-check-inline">
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
                                  id="chk_green1"
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
                                  id="chk_green2"
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
                                  id="chk_red3"
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
                                  id="chk_red4"
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
                                  id="chk_red5"
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
                                  id="chk_red6"
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
                                  id="chk_red7"
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
                                  id="chk_red8"
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
                                  id="chk_red9"
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
                                  id="chk_red12"
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
                                  id="chk_red22"
                                  name="list"
                                />
                                <span
                                  className="form-check-label"
                                  for="chk_red2"
                                >
                                  None of the above
                                </span>
                              </label>
                            </div> */}
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
                                  id="chk_redd"
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
                                  id="chk_green9"
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
                                  id="chk_blue9"
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
                                  id="chk_blue11"
                                />{" "}
                                <span
                                  className="form-check-label"
                                  for="chk_blue11"
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
                                  id="chk_bluee"
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
                                  id="chk_bluue"
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
                                  id="chk_bblue"
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
                                  id="chk_blue15"
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

const mapStateToProps = (state) => {
  return {
    saveConsent: state.clientReducer.saveConsent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserMedicalCondition: (data) =>
      dispatch(fetchUserMedicalCondition(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Condition)
);
