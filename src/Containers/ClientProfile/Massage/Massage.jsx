import React, { Component } from "react";
import { Field } from "redux-form";
import { Form, TextArea, Dropdown, Menu, Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchGlobalCodes } from ".././../../redux/actions/global.action";

import {
  fetchUserMassagePrefernce,
  getMassageInfo,
} from "../../../redux/actions/client.action";

class Massage extends Component {
  GenderOptions = [];
  dropVal: any;
  _data: any;
  typePerferred = [];
  constructor(props) {
    super(props);
    this.state = {
      mycheckbox_data: [],
      myStatus: [],
      selectedFreq: "",
      selectedGender: "",
      selectedMassage:"",
      fields: {
        id: "",
        typePerferred: [],
        genderPreference: "",
        frequency: "",
        lastMassage: "",
        goals: "",
        generalInfoTherapist: "",
      },
    };
  }

  // componentWillMount = async () => {
  //   var data2 = this.props.user.Data.ClientId;
  //   this.state.clientId = data2;
  //   var res = await this.props.getMassageInfo(data2);

  //   //fields data

  //   var data1 = this.props.user.Data.ClientId;
  //   this.state.fields.clientId = data1;

  //   var data = await this.props.fetchCategoryName(this.state.name);

  //   if (data != false) {
  //     this.dropVal = data.data.Data.globalCodeData;
  //   }
  //   // var _gender = await this.props.fetchCategoryName(this.state.abc.name);
  //   // if (_gender != false) {
  //   //   this.dropvalGender = _gender.data.Data.globalCodeData;
  //   // }

  // //gender-globally
  // var _gender = await this.props.fetchCategoryName
  //   (this.state.globalGender.name
  // );
  // if (_gender != false) {
  //   this.dropvalGender = _gender.data.Data.globalCodeData;
  //   this.dropvalGender.forEach((element) => {
  //     this.GenderOptions.push({
  //       text: element.CodeName,
  //       value: element.GlobalCodeId,
  //     });
  //   });
  // }
  //   var _frequency = await this.props.fetchCategoryName(
  //     this.state.globalFrequency.name
  //   );
  //   if (_frequency != false) {
  //     this.dropvalFrequency = _frequency.data.Data.globalCodeData;
  //     this.dropvalFrequency.forEach((element) => {
  //       this.FrequencyOptions.push({
  //         text: element.CodeName,
  //         value: element.GlobalCodeId,
  //       });
  //     });
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
  //   data_check.forEach((element) => {});
  //   if (this.props.massageRes.data)
  //     this.setState({
  //       selectedFreq: this.props.massageRes.data.Data.FrequencyId,
  //     });
  //   this.setState();
  //   this.setState({
  //     mycheckbox_data: data_check,
  //   });
  // };

  componentWillMount = async () => {
    var massageData = await this.props.fetchGlobalCodes(this.state.tablename);
    if (massageData != false) {
      this.dropVal = massageData.data.data[0].typePerferred;
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
  };

  back = () => {
    window.location.href = "/client-profile";
  };

  MassageSelected = (e) => {
    // this.state.mycheckbox_data.filter(
    //   (x) => x.GlobalCodeId == parseInt(e.target.id)
    // )[0].status = e.target.checked;
    // this.setState({ myStatus: this.state.mycheckbox_data });
    // if (e.target.checked == true) {
    //   this.state.fields.typePerferred.push({
    //     globalCodeId: parseInt(e.target.id),
    //   });
    // }
    // //  document.getElementById(e.target.id).checked = e.target.checked;
    // if (e.target.checked == false) {
    //   document.getElementById(e.target.id).removeAttribute("checked");
    // } else {
    //   document.getElementById(e.target.id).setAttribute("checked", "true");
    // }
    this.state.mycheckbox_data.filter(
      (x) => x.GlobalCodeId.toUpperCase() == e.target.value.toUpperCase()
    )[0].status = e.target.checked;
    this.setState({ myStatus: this.state.mycheckbox_data });
    if (e.target.checked == true) {
      this.typePerferred.push(e.target.value);
      console.log("_checkedData", this.typePerferred);
      this.state.fields.typePerferred = this.typePerferred;
    } else {
      this.typePerferred.pop(e.target.value);
    }
    // if (e.target.checked == false) {
    //   document.getElementById(e.target.value).removeAttribute("checked");
    // } else {
    //   document.getElementById(e.target.value).setAttribute("checked", "true");
    // }
  };

  saveMassage = () => {
    var clientId = this.props.userId;
    this.state.fields.id = clientId;
    var inputElems = document.getElementsByTagName("input"),
      count = 0;
    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;
        this.props.fetchUserMassagePrefernce(this.state.fields);
       
      }
    }
  };
  // dropdownChange = (e, value) => {
  //   var InfoAs = e.target.outerText;
  //   var globalId = this.dropvalGender.filter((x) => x.CodeName == InfoAs)[0]
  //     .GlobalCodeId;
  //   this.state.fields.therapistGenderId = globalId;
  // };

  changeFrequency = (e, { value }) => {
    // var infoFrequency = value;
    // this.setState({
    //   selectedFreq: infoFrequency,
    // });
    // var globalFrequencyId = this.dropvalFrequency.filter(
    //   (y) => y.GlobalCodeId == infoFrequency
    // )[0].GlobalCodeId;
    // this.state.fields.therapistGenderId = globalFrequencyId;

    var selectedFreq = e.target.outerText;
    this.state.fields.frequency = selectedFreq;
    value = this.state.fields.frequency;
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  handleChanges = (e, { value }) => {
    var selectedGender = e.target.outerText;
    this.state.fields.genderPreference = selectedGender;
    value = this.state.fields.genderPreference;
  };
  updateMassage = (e, { value }) => {
    var selectedMassage = e.target.outerText;
    this.state.fields.lastMassage = selectedMassage;
    value = this.state.fields.lastMassage;
  };

  render() {
    var GenderOptions = [
      { key: 2, text: "Male", value: "Male" },
      { key: 4, text: "Female", value: "Female" },
    ];

    var FrequencyOptions = [
      { key: 2, text: "Monthly", value: "Monthly" },
      { key: 4, text: "Weekly", value: "Weekly" },
    ];
    
    
    var MassageOptions = [
      { key: 2, text: "More than 1 month ago", value: "More than 1 month ago" },
      { key: 4, text: "More than 1 week ago", value: "More than 1 week ago" },
    ];
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
                    {this.state.mycheckbox_data &&
                      this.state.mycheckbox_data.map((item, index) => {
                        return (
                          <div className="form-check form-check-inline">
                            <label>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={item.GlobalCodeId}
                                value={item.checkBox}
                                onChange={this.MassageSelected}
                                checked={item.status}
                              />
                              <span className="form-check-label" for="chk_red">
                                {item.checkBox}
                              </span>
                            </label>
                          </div>
                        );
                      })}
                  </form>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 mt-5">
                      <div>
                        <h5>Therapist gender preference</h5>

                        <Dropdown
                          className="dropNav"
                          options={GenderOptions}
                          selection
                          // value={this.state.fields.gender}
                          onChange={this.handleChanges}
                          // validators={["required"]}
                          // errorMessages={["this field is required"]}
                        />
                      </div>

                      <div>
                        <h5>Frequency</h5>

                        <Dropdown
                          className="dropNav"
                          options={FrequencyOptions}
                          selection
                          // value={this.state.selectedFreq}
                          onChange={this.changeFrequency}
                        />
                      </div>
                      <div>
                        <h5>Last Massage</h5>

                        <Dropdown
                          className="dropNav"
                          options={MassageOptions}
                          selection
                          // value={this.state.selectedFreq}
                          onChange={this.updateMassage}
                        />
                      </div>

                      <div>
                        {" "}
                        <h5>Goals</h5>
                        <TextArea
                          placeholder="Write your Goals"
                          type="Text"
                          // value={
                          //   this.props.massageRes.data &&
                          //   this.props.massageRes.data.Data
                          //     ? this.props.massageRes.data.Data.Goals
                          //     : this.state.fields.goals
                          // }
                          value={this.state.fields.goals}
                          onChange={this.setFormValue.bind(this, "goals")}
                        />
                      </div>
                      <div>
                        {" "}
                        <h5>General information for therapist</h5>
                        <TextArea
                          placeholder=""
                          // value={
                          //   this.props.massageRes.data
                          //     ? this.props.massageRes.data.Data
                          //         .InformationForTherapist
                          //     : this.state.fields.generalInfoTherapist
                          // }
                          value={this.state.fields.generalInfoTherapist}
                          onChange={this.setFormValue.bind(
                            this,
                            "generalInfoTherapist"
                            
                          )}
                        />
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
                          onClick={this.saveMassage}
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

const mapStateToProps = (state) => {
  return {
    userId: state.persist.c_user.token,
    massageRes: state.clientReducer.saveMassage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMassageInfo: (data) => dispatch(getMassageInfo(data)),
    fetchUserMassagePrefernce: (data) =>
      dispatch(fetchUserMassagePrefernce(data)),
    fetchGlobalCodes: (data) => dispatch(fetchGlobalCodes(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Massage)
);
