import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  fetchConsentForm,
  getConsentForm,
} from "../../../redux/actions/client.action";

class Consent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttoncheck: false,
      clientId: 0,
      fields: {
        clientId: 0,
        userId: 0,
        malaxConsentForm: "MCF",
        consentFormStatus: false,
        actionBy: "",
      },

      errors: {
        terms: "",
      },
    };
  }

  componentDidMount = async (e, data1) => {
    //debugger;
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    // this.state.fields.consentFormStatus = e.target.checked;

    var res = await this.props.getConsentForm(data1);

    // this.props.saveConsent.data
    //   ? this.props.saveConsent.data.Data.MCF
    //   : consentFormStatus;
    if (this.state.fields.consentFormStatus==true) {
      //debugger;
      this.state.fields.consentFormStatus = this.props.saveConsent.data.Data.MCF;
      //  if(this.props.saveConsent.data.Data.MCF==true)
      // document.getElementById("abc123").checked = true;
    }
  };

  agreed = (e) => {
    //debugger;
    // eslint-disable-next-line react/no-direct-mutation-state
    // e.preventDefault();
    // if(e.target.checked==true){
    //   document.getElementById('chk_red').checked = true;
    // } else {
    //   document.getElementById('chk_red').checked = false;

    // }
    this.state.fields.consentFormStatus = e.target.checked;
  };

  consentAgreed = (e) => {
    this.setState({
      buttoncheck: !this.state.buttoncheck,
    });
    e.preventDefault();
    var data = this.props.user.Data.UserId;
    this.state.fields.userId = data;
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    if (this.state.fields.consentFormStatus == true) {
      // ({
      //   this.props.saveConsent.data
      //     ? this.props.saveConsent.data.Data.MCF
      //     : this.props.fetchConsentForm(this.state.fields);
      // })
      this.props.fetchConsentForm(this.state.fields);
      this.props.toggle();
    }
  };

  render() {
    console.log("ashu--------", this.props.saveConsent.data);
    return (
      <Fragment>
        <Modal
          show={this.props.consentmodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Malax Massage Conset Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-12">
                <p className="confirmation">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  tellus nulla volutpat risus id adipiscing leo tristique.
                  Sollicitudin ac rhoncus posuere bibendum aliquet elementum
                  viverra volutpat. Amet libero in eu, ut erat platea laoreet.
                  Augue scelerisque nunc adipiscing ultrices orci, sollicitudin.
                  Sit egestas ultricies ipsum, posuere ut bibendum semper. Non
                  nibh nibh accumsan metus pharetra integer aliquam vitae.{" "}
                </p>
              </div>

              <div className="col-sm-12 mt-4">
                <div className="form-check form-check-inline">
                  
                  
                  
                  <input
                    // className="form-check-input"
                    className="input"
                    type="CheckBox"
                    id="abc123"
                    //  value={ this.state.fields.consentFormStatus}
                    onChange={this.agreed}
                    //  defaultChecked={this.state.fields.consentFormStatus}

                    /// checked={this.state.fields.consentFormStatus}
                    // value={
                    //   //  this.props.saveConsent.data
                    //   //    ? this.props.saveConsent.data.Data.MCF
                    //   //    : ""
                    // }
                    // onChange={
                    //   this.props.saveConsent.data
                    //     ? this.props.saveConsent.data.Data.MCF
                    //     : this.agreed
                    // }
                  />
                  <label>
                    <span className="form-check-label" for="chk_red">
                      I confirm that I have read and agree to the terms above
                    </span>
                    <span style={{ color: "red" }}>
                      {this.state.buttoncheck &&
                      this.state.fields.consentFormStatus == false
                        ? ["Please accept term and condtions"]
                        : [""]}
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="submit"
              className="btn btn-sm btn-primary"
              //  disabled={this.state.fields.consentFormStatus}
              onClick={this.consentAgreed}
            >
              I Agree
            </button>
            <button
              color="grey"
              type="button"
              className="btn btn-sm btn-white"
              onClick={this.close}
            >
              Cancel
            </button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formVal: state.form,
    user: state.user.user,
    saveConsent: state.clientReducer.saveConsent,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchConsentForm: (data) => dispatch(fetchConsentForm(data)),
    getConsentForm: (data) => dispatch(getConsentForm(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Consent)
);
