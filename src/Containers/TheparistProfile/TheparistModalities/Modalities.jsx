import React, { Component } from "react";
import {
  fetchTherapistModality,
  getTherapistModalityInfo,
} from "../../../redux/actions/therapist.action";
import { Button, Form } from "semantic-ui-react";
import { withRouter } from "react-router";
import { fetchCategoryName } from ".././../../redux/actions/global.action";
import { connect } from "react-redux";

export class Modalities extends Component {
  _modalityData: any;
  dropVal: any;
  dropvalModality: any;
  _data: any;
  constructor(props) {
    super(props);
    this.state = {
      name: "Modalities",
      mycheckbox_data: [],
      myStatus: [],
      fields: {
        therapistModalityId: 0,
        therapistId: 0,
        modalityRequest: [],
        actionBy: "",
      },
      getModality: {
        therapistModalityId: 0,
        therapistId: 0,
      },
    };
  }

  componentWillMount = async () => {
    var data2 = this.props.user.Data.TherapistId;
    this.state.getModality.therapistId = data2;
    var res = await this.props.getTherapistModalityInfo(data2);
    //checkbox
    var data = await this.props.fetchCategoryName(this.state.name);

    if (data != false) {
      this.dropVal = data.data.Data.globalCodeData;
    }
    this._data = [];
    this.dropVal.forEach((element) => {
      this._data.push({
        checkBox: element.CodeName,
        GlobalCodeId: element.GlobalCodeId,
        status: false,
      });
    });
    var data_check = this._data;
    data_check.forEach((element) => {});

    var data_check = this._data;
    data_check.forEach((element) => {
      this.props.saveModality.data.Data.ModalitiesResponses.forEach((ele) => {
        if (ele.ModalityId == element.GlobalCodeId) {
          element.status = true;
        }
      });
    });
    this.setState({
      mycheckbox_data: data_check,
    });
  };

  MassageSelected = (e) => {
    this.state.mycheckbox_data.filter(
      (x) => x.GlobalCodeId == parseInt(e.target.id)
    )[0].status = e.target.checked;
    this.setState({ myStatus: this.state.mycheckbox_data });
    if (e.target.checked == true) {
      this.state.fields.modalityRequest.push({
        modalityId: parseInt(e.target.id),
      });
    }
    if (e.target.checked == false) {
      document.getElementById(e.target.id).removeAttribute("checked");
    } else {
      document.getElementById(e.target.id).setAttribute("checked", "true");
    }
  };

  back = () => {
    window.location.href = "/theparist-profile";
  };

  // saveMassage = () => {
  //   var saveId = this.props.user.Data.TherapistId;
  //   this.state.fields.therapistId = saveId;
  //   var inputElems = document.getElementsByTagName("input"),
  //     count = 0;
  //   for (var i = 0; i < inputElems.length; i++) {
  //     if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
  //       count++;
  //       this.props.fetchTherapistModality(this.state.fields);
  //     }
  //   }
  // };

  saveCondition = () => {
    var saveId = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = saveId;
    this.state.fields.modalityRequest = [];
    var inputElems = document.getElementsByTagName("input"),
      count = 0;
    for (var i = 0; i < inputElems.length; i++) {
      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
        count++;

        this.state.fields.modalityRequest.push({
          ModalityId: parseInt(inputElems[i].id),
        });
      }
    }
    this.props.fetchTherapistModality(this.state.fields);
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
                <div class="text-right mt-5">
                  <Button
                    type="button"
                    class="btn btn-primary mr-4"
                    data-dismiss="modal"
                    onClick={this.saveCondition}
                  >
                    Submit
                  </Button>
                  <Button
                    type="button"
                    class="btn btn-cancel"
                    data-dismiss="modal"
                    onClick={this.back}
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    saveModality: state.therapistReducer.saveModality,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryName: (data) => dispatch(fetchCategoryName(data)),
    fetchTherapistModality: (data) => dispatch(fetchTherapistModality(data)),
    getTherapistModalityInfo: (data) =>
      dispatch(getTherapistModalityInfo(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Modalities)
);
