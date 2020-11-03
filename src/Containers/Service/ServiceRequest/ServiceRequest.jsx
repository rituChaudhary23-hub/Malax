import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { Dropdown, Form, Input } from "semantic-ui-react-form-validator";
import { DateInput } from "semantic-ui-calendar-react";
import { withRouter } from "react-router";
import { fetchClientAppointment } from "../../../redux/actions/clientSchedule.action";
import {
  fetchCategoryName,
  fetchValidateZip,
} from "../../../redux/actions/global.action";
import { connect } from "react-redux";
import Header from "../../../Components/Shared/Header";
import { toast } from "../../../Components/Toast/Toast";

class ServiceRequest extends Component {
  golbalID = 0;
  dropVal: any;
  dropValcode: any;
  dropvalState: any;
  dropvaltime: any;
  dropvalMassage: any;
  dropvalLocation: any;
  dropvalLocType: any;
  datalist:[];
  constructor(props) {
    super(props);
    this.state = {

      str_code:'',
      name: "ZipCode",
      abcGender: {
        name: "Gender",
      },
      abc: {
        name: "LocationType",
      },
      abcMassage: {
        name: "MassageType",
      },
      abcLocation: {
        name: "GeneralLocation",
      },
      abcState: {
        name: "State",
      },
      abcTime: {
        name: "TimeLength",
      },
      zipCode: "",
      fields: {
        clientScheduleId: 0,
        clientId: 0,
        therapistId: 0,
        massageType: "",
        city: "",
        streetAddress: "",
        serviceDate: "",
        timelength: "",
        generallocation: "",
        from: "",
        to: "",
        therapistGender: "",
        state: "",
        locationType: "",
        zipCode: "",
      },
      errors: {
        serviceDate: "",
        city: "",
        locationType: "",
        streetAddress: "",
        zipCode: "",
      },
      loading: false,
    };
  }

  componentDidMount = async () => {
    debugger;
    var data = await this.props.fetchCategoryName(this.state.name);
    if (data != false) {
      this.dropValcode = data.data.Data.globalCodeData;
      this.datalist=data.data.Data.globalCodeData;
      console.log('myresponse_data++++++++++++++++++', this.datalist)
    //    for(var i=0;i<this.datalist.length;i++){
    //     this.state.str_code=this.datalist[i].CodeName
    //     // this.state.fields.zipCode=this.datalist[0].GlobalCodeId
    //     // this.state.fields.zipCode=this.datalist[1].GlobalCodeId
    //     // this.state.fields.zipCode=this.datalist[2].GlobalCodeId
    //     console.log('id inserted ======= ',this.state.fields.zipCode)
          
    // }
 
    }
    //state
    var _state = await this.props.fetchCategoryName(this.state.abcState.name);
    if (_state) {
      debugger;
      this.dropvalState = _state.data.Data.globalCodeData;
    }
    //gender
    var _gender = await this.props.fetchCategoryName(this.state.abcGender.name);
    if (_gender) {
      debugger;
      this.dropVal = _gender.data.Data.globalCodeData;
      console.log("dropVal", this.dropVal);
    }
    console.log("state", this.dropvalState);
    //time-length
    var _timeLength = await this.props.fetchCategoryName(
      this.state.abcTime.name
    );
    if (_timeLength) {
      debugger;
      this.dropvaltime = _timeLength.data.Data.globalCodeData;
      console.log("dropvaltime", this.dropvaltime);
    }

    //massage-type
    var _massageType = await this.props.fetchCategoryName(
      this.state.abcMassage.name
    );
    if (_massageType) {
      debugger;
      this.dropvalMassage = _massageType.data.Data.globalCodeData;
      console.log("dropvalMassage", this.dropvalMassage);
    }

    //general-location
    var _location = await this.props.fetchCategoryName(
      this.state.abcLocation.name
    );
    if (_location) {
      debugger;
      this.dropvalLocation = _location.data.Data.globalCodeData;
      console.log("dropvalLocation", this.dropvalLocation);
    }

    //loc-type

    var _locType = await this.props.fetchCategoryName(this.state.abc.name);
    if (_locType) {
      debugger;
      this.dropvalLocType = _locType.data.Data.globalCodeData;
      console.log("dropvalLocType", this.dropvalLocType);
    }
  };

  handleChangeDate = (event, { name, value }) => {
    this.resetError("serviceDate");

    this.setState({ [name]: value });
    this.setState((prevState) => {
      let fields = Object.assign({}, prevState.fields);
      fields.serviceDate = value;
      return { fields: fields };
    });
  };

   
  //zipcode
  abc =(e) => {
    debugger
    e.preventDefault()
    console.log("abc---value-----", e);
    console.log("-----ritu---------",this.state.str_code)
 if(e.target.value=== this.state.str_code){
alert('id mached done')
}else{
  alert('id not  mached done')
}

  };

  dropdownChange = (e, value) => {
    debugger;
    var InfoAs = e.target.outerText;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.therapistGender = globalId;
  };

  //state
  selectState = (e) => {
    debugger;
    var InfoAs = e.target.outerText;
    debugger;
    var globalState = this.dropvalState.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.state = globalState;
  };

  //time-length
  selectTimeLength = (e, data) => {
    debugger;
    var InfoAs = e.target.outerText;
    debugger;
    var globaltimeLength = this.dropvaltime.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.timelength = globaltimeLength;
  };

  //massage-type
  selectMassageType = (e) => {
    debugger;
    var InfoAs = e.target.outerText;
    debugger;
    var globalMassageType = this.dropvalMassage.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.massageType = globalMassageType;
  };

  //general-location
  selectLocation = (e) => {
    debugger;
    var InfoAs = e.target.outerText;
    debugger;
    var globalLocation = this.dropvalLocation.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.generallocation = globalLocation;
  };

  //location-type
  selectLocType = (e) => {
    debugger;
    var InfoAs = e.target.outerText;
    debugger;
    var globalLocType = this.dropvalLocType.filter(
      (x) => x.CodeName == InfoAs
    )[0].GlobalCodeId;
    this.state.fields.locationType = globalLocType;
  };

  //location-type
  locType = (e, data) => {
    console.log(data.value);
    // this.state.fields.zipCode
    console.log("---------e-------", e);
    var InfoAs = e.target.outerText;
    debugger;
    var globalId = this.dropVal.filter((x) => x.CodeName == InfoAs)[0]
      .GlobalCodeId;
    this.state.fields.locationType = globalId;
    this.setState({ locationType: data.value }, () => {
      console.log("locationType----------", data.value);
    });
  };




  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  //appointment-submit
  submitRequest = async (e) => {
    e.preventDefault();
    debugger;
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    debugger;
    if (this.validate()) {
      var res = await this.props.fetchClientAppointment(this.state.fields);
      if (res == true) {
        console.log("res--------", res);
        this.props.history.push("/payment");
      } else {
      }
    }
  };

  resetError = (field) => {
    let errors = this.state.errors;
    errors[field] = "";
    this.setState({ errors });
  };
  hasError = (value) => {
    let errors = this.state.errors;
    if (errors[value] !== "") {
      return true;
    } else {
      return false;
    }
  };

  cancel = () => {
    window.location.href = "/client-profile";
  };
  validate = () => {
    // let errors = {};
    let fields = this.state.fields;
    let errors = this.state.errors;

    let formIsValid = true;
    if (fields["serviceDate"] === "") {
      formIsValid = false;
      errors["serviceDate"] = "Date of Birth can't be blank";
    }
    this.setState({ errors: errors });

    return formIsValid;
  };

  //time-to
  onChangeToTime = (time) => {
    debugger;
    // this.setState({ time });
    this.state.fields.to = time.target.value;
  };

  //time-from
  onChangeFromTime = (time) => {
    debugger;
    this.state.fields.from = time.target.value;
  };

  render() {
    const { submitting } = this.props;
    console.log("$$$$$$$$eeeeee$$",this.state.zipCode)
    console.log("$$$$$$!!!!$$eeeeee$$",this.state.fields.city)



    const timeLengthOptions = [
      { key: "m", text: "20 minutes", value: "20 minutes" },
      { key: "k", text: "40 minutes", value: "40 minutes" },
      { key: "k", text: "60 minutes", value: "60 minutes" },
    ];
    const massageOptions = [
      { key: "r", text: "Relaxation", value: "Relaxation" },
    ];

    const locationOptions = [
      { key: "g", text: " Town - Heights", value: " Town - Heights" },
      { key: "s", text: "Location 2", value: "Location 2" },
      { key: "s", text: "Location 3", value: "Location 3" },
    ];
    const stateOptions = [
      { key: "g", text: "New York", value: "New York" },
      { key: "s", text: "North Carolina 3", value: "North Carolina 3" },
      { key: "t", text: "Ohio", value: "Ohio" },
      { key: "w", text: "Texas", value: "Texas" },
    ];
    const typeOptions = [
      { key: "g", text: "At home", value: "At home" },
      { key: "s", text: "At work", value: "At work" },
      { key: "s", text: "Other", value: "Other" },
    ];
    const genderOptions = [
      { key: "u", text: "Male", value: "Male" },
      { key: "j", text: "Female", value: "Female" },
    ];
    return (
      //

      <section className="therapistProDes serviceReq">
        <Header />
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Service Request</h2>
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="thrprofileDes">
                    <Form
                      ref="form"
                      onSubmit={this.submitRequest}
                      onError={this.validate}
                    >
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Date ashu{" "}
                              </label>

                              <DateInput
                                className="form-control date"
                                id="date"
                                fullWidth={true}
                                name="date"
                                value={this.state.fields.serviceDate}
                                dateFormat={"YYYY-MM-DD"}
                                minDate={new Date()}
                                closable="true"
                                onChange={this.handleChangeDate}
                              />
                              {this.hasError("serviceDate") && (
                                <div className="ui pointing label">
                                  <div style={{ color: "red" }}>
                                    {this.state.errors["serviceDate"]}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group mb-0">
                              <label for="usr" className="chkBox">
                                Time range{" "}
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-group">
                              <Input
                                className="form-control date"
                                step="900"
                                id="time"
                                fullWidth={true}
                                name="time"
                                type="time"
                                onChange={this.onChangeToTime}
                              />
                            </div>
                          </div>

                          <div className="col-sm-6">
                            <div className="form-group">
                              <input
                                type="time"
                                className="form-control date"
                                step="900"
                                id="time"
                                fullWidth={true}
                                name="time"
                                onChange={this.onChangeFromTime}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Time length{" "}
                              </label>
                              <Dropdown
                                options={timeLengthOptions}
                                selection
                                placeholder="Select TimeLength"
                                onChange={this.selectTimeLength}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["timelength"]}
                              </span>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Type of massage{" "}
                              </label>
                              <Dropdown
                                options={massageOptions}
                                selection
                                onChange={this.selectMassageType}
                                // validators={["required"]}
                                // errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Therapist gender preference{" "}
                              </label>
                              {/*                          
                              <Dropdown
                                name="info"
                                type="submit"
                                disabled={submitting}
                                className="dropNav"
                                text="Please Select"
                                options={genderOptions}
                                // value={this.state.genderValue}
                                onChange={this.dropdownChange}
                                simple
                                item
                              /> */}
                              <Dropdown
                                options={genderOptions}
                                selection
                                placeholder="Select"
                                onChange={this.dropdownChange}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                General location{" "}
                              </label>

                              <Dropdown
                                className="form-control"
                                options={locationOptions}
                                selection
                                onChange={this.selectLocation}
                                // value={this.state.fields.generallocation}
                                // validators={["required"]}
                                // errorMessages={["this field is required"]}
                              />
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Street Address{" "}
                              </label>
                              <textarea
                                className="form-control textArea"
                                rows="4"
                                id="comment"
                                name="address"
                                onChange={this.setFormValue.bind(
                                  this,
                                  "streetAddress"
                                )}
                                value={this.state.fields.streetAddress}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Address",
                                ]}
                                autoComplete="false"
                              ></textarea>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                City{" "}
                              </label>
                              <Input
                                className="form-control"
                                id="city"
                                fullWidth={true}
                                name="city"
                                margin={"normal"}
                                type="city"
                                onChange={this.setFormValue.bind(this, "city")}
                                value={this.state.fields.city}
                                validators={[
                                  "required",
                                  "matchRegexp:^[a-zA-Z ]*$",
                                ]}
                                errorMessages={[
                                  "this field is required",
                                  "Invalid Name",
                                ]}
                                autoComplete="false"
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                State{" "}
                              </label>
                                  
                           {/* <Dropdown
                                name="info"
                                type="submit"
                                disabled={submitting}
                                className="dropNav"
                                text="Please Select"
                                options={stateOptions}
                                // value={this.state.genderValue}
                                onChange={this.selectState}
                                simple
                                item
                              /> */}
                                <Dropdown
                                options={stateOptions}
                                selection
                                placeholder="Select"
                                onChange={this.selectState}
                              />
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div className="form-group">
                              {" "}
                              <label for="usr" className="chkBox">
                                Zip Code
                              </label>
                              <Input
                                className="login-form-textfield"
                                id="zip code"
                                fullWidth={true}
                                name="zipCode"
                                margin={"normal"}
                            //  onChange={this.abc}
                                // onChange={this.setFormValue.bind(this, "zipCode")}
                                // value={this.state.zipCode}
                                // onChange={this.setFormValue.bind(
                                //   this,
                                //   "zipCode"
                                // )}

                                onChange={(e) => {
                                  this.abc(e);
                                }}
                                // onKeyUp={this.setFormValue.bind(
                                //   this,
                                //   "zipCode"
                                // )}
                                // value={this.state.fields.zipCode}
                                // validators={["required"]}
                                // errorMessages={[
                                //   "this field is required",
                                //   "Invalid Code",
                                // ]}
                                autoComplete="false"
                              />{" "}
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <label for="usr" className="chkBox">
                                Location Type{" "}
                              </label>

                              <Dropdown
                                options={typeOptions}
                                selection
                                placeholder="Select Location Type"
                                name="locationType"
                                onChange={this.selectLocType}

                                //  value={this.state.fields.locationType}
                                // validators={["required"]}
                                // errorMessages={["this field is required"]}
                              />
                              <span style={{ color: "red" }}>
                                {this.state.errors["locationType"]}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="text-right">
                              <Button
                                type="submit"
                                disabled={submitting}
                                className="btn btn-primary mr-4 reqApp"
                                data-dismiss="modal"
                              >
                                Request Appointment
                              </Button>
                              <Button
                                type="button"
                                className="btn btn-cancel"
                                data-dismiss="modal"
                                onClick={this.cancel}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
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
    saveashu: state.clientReducer.saveashu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchClientAppointment: (data) => dispatch(fetchClientAppointment(data)),
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchValidateZip: (data) => dispatch(fetchValidateZip(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceRequest)
);
