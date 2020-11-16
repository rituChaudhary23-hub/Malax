import React, { Component } from "react";
import { Field } from "redux-form";
import { Form, TextArea, Dropdown, Menu, Button } from "semantic-ui-react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryName } from "../../../redux/actions/global.action";

import {
  fetchUserMassagePrefernce,
  getMassageInfo,
} from "../../../redux/actions/client.action";

class Massage extends Component {
  dropVal: any;
  _data: any;
  FrequencyOptions= [];
  dropvalFrequency: any;
  dropvalGender: any;
  constructor(props) {
    super(props);
    this.state = {
      clientId: 0,
      name: "TypePerferred",
      mycheckbox_data: [],
      myStatus: [],
      abc: {
        name: "Gender",
      },
      abcFrequency: {
        name: "Frequency",
      },
      selectedFreq:"",
      fields: {
        clientMassagePreferencesId: 0,
        clientId: 0,
        typePerferred: [],
        therapistGenderId: 0,
        frequencyId: 0,
        goals: "",
        informationForTherapist: "",
        actionBy: "",
      },
    };
  }

  componentWillMount = async () => {
    //debugger
    var data2 = this.props.user.Data.ClientId;
    this.state.clientId = data2;
    var res = await this.props.getMassageInfo(data2);

    //fields data
 
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;

    var data = await this.props.fetchCategoryName(this.state.name);

    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
    var _gender = await this.props.fetchCategoryName(this.state.abc.name);
    if (_gender != false) {
      this.dropvalGender = _gender.data.Data.globalCodeData;
    }

    var _frequency = await this.props.fetchCategoryName(
      this.state.abcFrequency.name
    );
    if (_frequency != false) {
      this.dropvalFrequency = _frequency.data.Data.globalCodeData;
      this.dropvalFrequency.forEach(element => {
        this.FrequencyOptions.push({
          text:element.CodeName,
          value:element.GlobalCodeId
        })
      });

   
      console.log("text-----",   this.FrequencyOptions)
    }

    console.log("dropVal condiiton", this.dropVal);
    this._data = [];
    this.dropVal.forEach((element) => {
      this._data.push({
        checkBox: element.CodeName,
        GlobalCodeId: element.GlobalCodeId,
        status: false,
      });
    });
   
    var data_check = this._data;
    data_check.forEach((element) => {
    
    });
    //debugger
    if(this.props.massageRes.data)
    this.setState({selectedFreq: this.props.massageRes.data.Data.FrequencyId});
    this.setState();
    this.setState({
      mycheckbox_data: data_check,
    });
  };

  back = () => {
    window.location.href = "/client-profile";
  };

  MassageSelected = (e) => {
    //debugger;
    console.log("check_value", e.target.checked);
    this.state.mycheckbox_data.filter(
      (x) => x.GlobalCodeId == parseInt(e.target.id)
    )[0].status = e.target.checked;
    this.setState({ myStatus: this.state.mycheckbox_data });
    if (e.target.checked == true) {
      this.state.fields.typePerferred.push({
        globalCodeId: parseInt(e.target.id),
      });
    }
    //  document.getElementById(e.target.id).checked = e.target.checked;
    if (e.target.checked == false) {
      document.getElementById(e.target.id).removeAttribute("checked");
    } else {
      document.getElementById(e.target.id).setAttribute("checked", "true");
    }
    console.log("asdsdadd", this.state.mycheckbox_data);
  };

  saveMassage = () => {
    //debugger;
    var inputElems = document.getElementsByTagName("input"),
      count = 0;
    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;
        this.props.fetchUserMassagePrefernce(this.state.fields);
      }
    }
  };
  dropdownChange = (e, value) => {
    //debugger;
    var InfoAs = e.target.outerText;
    var globalId = this.dropvalGender.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.therapistGenderId = globalId;
  };

  changeFrequency = (e, { value }) => {
    //debugger;
    var infoFrequency = value ;
    this.setState({
      selectedFreq:infoFrequency
     })
     console.log("selected drop down value===============",   this.state.selectedFreq)
    var globalFrequencyId = this.dropvalFrequency.filter(
      (y) => y.GlobalCodeId == infoFrequency
    )[0].GlobalCodeId;
    this.state.fields.frequencyId = globalFrequencyId;
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    console.log("Massage-info-----------",  this.props.massageRes.data);
    console.log("mycheckbox_data", this.state.mycheckbox_data);
    console.log('my state', this.state);
    const genderOptions = [
      { key: "u", text: "Male", value: "Male" },
      { key: "j", text: "Female", value: "Female" },
    ];

    // const FrequencyOptions = [
    //   { key: "m", text: "Daily", value: "4011" },
    //   { key: "k", text: "Weekly", value: "4010" },
    //   { key: "k", text: "Monthly", value: "4012" },
    // ];
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
                          options={genderOptions}
                          selection
                          placeholder="Select Gender"
                          onChange={this.dropdownChange}
                        />
                      </div>

                      <div>
                        <h5>Frequency</h5>
                        <Dropdown
                       className='abc'
                        //  defaultValue={this.state.selectedFreq}
                          options={this.FrequencyOptions}
                          selection
                          // selected={this.state.selectedFreq}
                           value={this.state.selectedFreq}
                          onChange={this.changeFrequency}
                        
                         
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
                          value={
                            this.props.massageRes.data
                              ? this.props.massageRes.data.Data
                                  .InformationForTherapist
                              : this.state.fields.informationForTherapist
                          }
                          onChange={this.setFormValue.bind(
                            this,
                            "informationForTherapist"
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
    user: state.user.user,
    massageRes: state.clientReducer.saveMassage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    getMassageInfo: (data) => dispatch(getMassageInfo(data)),
    fetchUserMassagePrefernce: (data) =>
      dispatch(fetchUserMassagePrefernce(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Massage)
);
