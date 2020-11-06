/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../../redux/actions/global.action";
import {
  fetchUserMedicalCondition,
  getConditionInfo,
} from "../../../redux/actions/client.action";

class Condition extends Component {
  dropVal: any;
  dropvalArea: any;
  _data: any;
  _areaData: any;
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,

      name: "MedicalConditions",
      mycheckbox_data: [],
      areaCheckbox_data: [],
      abc: {
        name: "MedicalConditionsAreas",
      },
      fields: {
        clientMedicalConditionId: 0,
        clientId: 0,
        healthConcerns: "",
        medicalConditionRequest: [],
        actionBy: "",
      },
    };
  }

  componentWillMount = async () => {
//get-condition
var data1 = this.props.user.Data.ClientId;
this.state.clientId = data1;
this.props.getConditionInfo(data1);


    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    debugger;
    var data = await this.props.fetchCategoryName(this.state.name);
    debugger;
    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
    this._data = [];
    this.dropVal.forEach((element) => {
      this._data.push({
        checkBox: element.CodeName,
        GlobalCodeId: element.GlobalCodeId,
      });
    });
    var data_check = this._data;
    this.setState({
      mycheckbox_data: data_check,
    });

    //areas checkbox
    var _areaCheck = await this.props.fetchCategoryName(this.state.abc.name);
    if (_areaCheck) {
      this.dropvalArea = _areaCheck.data.Data.globalCodeData;
    }
    this._areaData = [];
    this.dropvalArea.forEach((element) => {
      this._areaData.push({
        checkBox: element.CodeName,
        GlobalCodeId: element.GlobalCodeId,
      });
    });
    var areaData_check = this._areaData;
    this.setState({
      areaCheckbox_data: areaData_check,
    });


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
        this.props.fetchUserMedicalCondition(this.state.fields);
      }
    }
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //medical-condition
  medicalCondition = (e) => {
    this.state.fields.medicalConditionRequest.push({
      medicalConditionId: parseInt(e.target.id),
    });
  };

  medicalAreaCondition = (e) => {
    this.state.fields.medicalConditionRequest.push({
      medicalConditionId: parseInt(e.target.id),
    });
  };

  render() {
    const { submitting } = this.props;
    this._areaData = this.state.areaCheckbox_data;
  console.log("get-condition",this.props.MedicalCondition)

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
                            // onSubmit={this.saveCondition}
                            onError={this.handleValidation}
                          >
                            {/* {this.props.MedicalCondition.data && this.props.MedicalCondition.data.Data.ClientMedicalConditionResponses || this.state.mycheckbox_data && */}
                           
                            {this.state.mycheckbox_data &&
                           
                              this.state.mycheckbox_data.map((item, index) => {
                                return (
                                  <div
                                    key={index}
                                    className="form-check form-check-inline"
                                  >
                                    <label>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="list"
                                        id={item.GlobalCodeId}
                                        value={item.checkBox}
                                        onChange={this.medicalCondition}
                                      />
                                      <span
                                        className="form-check-label"
                                        for="chk_red"
                                      >
                                        {item.checkBox}
                                      </span>
                                    </label>
                                  </div>
                                );
                              })}
                          </Form>
                        </div>

                        <h5 className="mt-5 mb-2">
                          Areas of pain, injury, tension, restricted movement
                        </h5>
                        <div className="thrChkBox graybg">
                          <Form>
                            {this._areaData &&
                              this._areaData.map((item, index) => {
                                return (
                                  <div className="form-check form-check-inline">
                                    <label>
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={item.GlobalCodeId}
                                        value={item.checkBox}
                                        onChange={this.medicalAreaCondition}
                                      />
                                      <span
                                        className="form-check-label"
                                        for="chk_red"
                                      >
                                        {item.checkBox}
                                      </span>
                                    </label>
                                  </div>
                                );
                              })}
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
                                  value={this.state.fields.healthConcerns}
                                  placeholder=" Any other health concerns"
                                  onChange={this.setFormValue.bind(
                                    this,
                                    "healthConcerns"
                                  )}
                                  autoComplete="false"
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
    user: state.user.user,
    MedicalCondition:state.clientReducer.saveCondition
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserMedicalCondition: (data) =>
      dispatch(fetchUserMedicalCondition(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    getConditionInfo: (data) => dispatch(getConditionInfo(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Condition)
);
