import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field } from "redux-form";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  fetchUserMedicalCondition,
  getConditionInfo,
} from "../../../redux/actions/client.action";
import { fetchGlobalCodes } from ".././../../redux/actions/global.action";

class Condition extends Component {
  dropVal: any;
  dropvalArea: any;
  _data: any;
  _areaData: any;
  medicalConditions = [];
  areasOfPain = [];
  constructor(props) {
    super(props);
    this.state = {
      myStatus: [],
      myAreaStatus: [],
      mycheckbox_data: [],
      areaCheckbox_data: [],
      tablename: "codes",
      fields: {
        id: "",
        healthConcerns: "",
        medicalConditions: [],
        areasOfPain: [],
      },
    };
  }

  // componentWillMount = async () => {
  //   //get-condition
  //   var data1 = this.props.user.Data.ClientId;
  //   this.state.clientId = data1;
  //   var res = await this.props.getConditionInfo(data1);

  //   //fields data
  //   var data1 = this.props.user.Data.ClientId;
  //   this.state.fields.clientId = data1;

  //   var data = await this.props.fetchCategoryName(this.state.name);

  //   if (data != false) {
  //     this.dropVal = data.data.Data.globalCodeData;
  //   }
  //   this._data = [];
  //   this.dropVal.forEach((element) => {
  //     this._data.push({
  //       checkBox: element.CodeName,
  //       GlobalCodeId: element.GlobalCodeId,
  //       status: false,
  //     });
  //   });
  //   var data_check = this._data;
  //   data_check.forEach((element) => {
  //     this.props.MedicalCondition.data.Data.ClientMedicalConditionResponses.forEach(
  //       (ele) => {
  //         if (ele.MedicalConditionId == element.GlobalCodeId) {
  //           element.status = true;
  //         }
  //       }
  //     );
  //   });
  //   this.setState({
  //     mycheckbox_data: data_check,
  //   });

  //   //areas checkbox
  //   var _areaCheck = await this.props.fetchCategoryName(this.state.globalConditions.name);
  //   if (_areaCheck) {
  //     this.dropvalArea = _areaCheck.data.Data.globalCodeData;
  //   }
  //   this._areaData = [];
  //   this.dropvalArea.forEach((element) => {
  //     this._areaData.push({
  //       checkBox: element.CodeName,
  //       GlobalCodeId: element.GlobalCodeId,
  //       status: false,
  //     });
  //   });

  //   var areaData_check = this._areaData;
  //   areaData_check.forEach((element) => {
  //     this.props.MedicalCondition.data.Data.ClientMedicalConditionResponses.forEach(
  //       (ele) => {
  //         if (ele.MedicalConditionId == element.GlobalCodeId) {
  //           element.status = true;
  //         }
  //       }
  //     );
  //   });

  //   this.setState({
  //     areaCheckbox_data: areaData_check,
  //   });
  // };

  componentWillMount = async () => {
    var medicalData = await this.props.fetchGlobalCodes(this.state.tablename);
    if (medicalData != false) {
      this.dropVal = medicalData.data.data[0].medicalConditions;
      this._data = [];
      const objectArray = Object.entries(this.dropVal);
      objectArray.forEach((element) => {
        this._data.push({
          checkBox: element[1],
          GlobalCodeId: element[1],
          status: false,
        });
      });
      var data_check = this._data;
      this.setState({
        mycheckbox_data: data_check,
      });
    }
    //areas-of-pain globally
    if (medicalData != false) {
      this.dropValArea = medicalData.data.data[0].areasOfPain;
      this._areaData = [];
      const objectArray = Object.entries(this.dropValArea);
      objectArray.forEach((element) => {
        this._areaData.push({
          checkBox: element[1],
          GlobalCodeId: element[1],
          status: false,
        });
      });
      var areaData_check = this._areaData;
      this.setState({
        areaCheckbox_data: areaData_check,
      });
    }
  

  };
  componentDidMount = async (data1) => {
   if (this.props.userData.data) {
     debugger
   }
 };
  back() {
    window.location.href = "/update-client-profile";
  }

  saveCondition = () => {
    // this.state.fields.medicalConditionRequest = [];
    var clientId = this.props.userId;
    this.state.fields.id = clientId;
    var inputElems = document.getElementsByTagName("input"),
      count = 0;
    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;

        // this.state.fields.medicalConditionRequest.push({
        //   medicalConditionId: parseInt(inputElems[i].id),
        // });
      }
    }
    this.props.fetchUserMedicalCondition(this.state.fields);
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //medical-condition
  medicalCondition = (e) => {
    this.state.mycheckbox_data.filter(
      (x) => x.GlobalCodeId.toUpperCase() == e.target.value.toUpperCase()
    )[0].status = e.target.checked;
    this.setState({ myStatus: this.state.mycheckbox_data });
    if (e.target.checked == true) {
      this.medicalConditions.push(e.target.value);
      console.log("_checkedData", this.medicalConditions);
      this.state.fields.medicalConditions=this.medicalConditions
    } else {
      this.medicalConditions.pop(e.target.value);
    }
    if (e.target.checked == false) {
      document.getElementById(e.target.value).removeAttribute("checked");
    } else {
      document.getElementById(e.target.value).setAttribute("checked", "true");
    }
  };

  medicalAreaCondition = (e) => {
    // this._areaData.filter(
    //   (x) => x.GlobalCodeId == parseInt(e.target.id)
    // )[0].status = e.target.checked;
    // this.setState({ myAreaStatus: this._areaData });
    // if (e.target.checked == true) {
    //   this.state.fields.medicalConditionRequest.push({
    //     medicalConditionId: parseInt(e.target.id),
    //   });
    // }
    this.state.areaCheckbox_data.filter(
      (x) => x.GlobalCodeId.toUpperCase() == e.target.value.toUpperCase()
    )[0].status = e.target.checked;
    this.setState({ myAreaStatus: this.state.areaCheckbox_data });
    if (e.target.checked == true) {
      this.areasOfPain.push(e.target.value);
      console.log("pain", this.areasOfPain);
      this.state.fields.areasOfPain=this.areasOfPain
    } else {
      this.areasOfPain.pop(e.target.value);
    }
  };

  render() {
    const { submitting } = this.props;
    this._areaData = this.state.areaCheckbox_data;
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12 mb-5">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis tempus // sed turpis cras quam ac tortor tempus amet.
                    Dolor eget enim ultrices // dictum tempor pharetra. Id
                    montes, non mattis viverra. Vel nibh arcu // venenatis leo
                    quis nunc, tempus maecenas enim.
                  </p>
                </div>
                <div className="col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="tab-pane" id="conditions">
                        <div className="thrChkBox graybg">
                          <Form
                            ref="form"
                            autocomplete="off"
                            onError={this.handleValidation}
                          >
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
                                        value={item.GlobalCodeId}
                                        onChange={this.medicalCondition}
                                        checked={item.status}
                                      />

                                      <span
                                        className="form-check-label"
                                        for="chk_red"
                                      >
                                        {item.GlobalCodeId}
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
                                        checked={item.status}
                                      />
                                      <span
                                        className="form-check-label"
                                        for="chk_red"
                                      >
                                        {item.GlobalCodeId}
                                      </span>
                                    </label>
                                  </div>
                                );
                              })}
                          </Form>
                        </div>

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
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.persist.c_user.token,
    MedicalCondition: state.clientReducer.saveCondition,
    userData: state.globalReducer.clientData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserMedicalCondition: (data) =>
      dispatch(fetchUserMedicalCondition(data)),
    getConditionInfo: (data) => dispatch(getConditionInfo(data)),
    fetchGlobalCodes: (data) => dispatch(fetchGlobalCodes(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Condition)
);
