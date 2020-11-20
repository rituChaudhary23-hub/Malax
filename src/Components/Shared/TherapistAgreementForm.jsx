import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {fetchTherapistConsentForm} from "../../redux/actions/therapist.action"


export class TherapistAgreement extends Component {
  constructor(props) {
    super(props);
      this.state = {
      buttoncheck: false,
      fields: {
        therapistId: 0,
        userId: 0,
        malaxConsentForm: "MTAF",
        consentFormStatus: false,
        actionBy: "",
      },

      errors: {
        terms: "",
      },
    };
  }
  agreed = (e) => {
    this.state.fields.consentFormStatus = e.target.checked;
  };
  consentAgreed = (e) => {
    this.setState({
      buttoncheck: !this.state.buttoncheck,
    });
    e.preventDefault();
    var data = this.props.user.Data.UserId;
    this.state.fields.userId = data;
    var data1 = this.props.user.Data.TherapistId;
    this.state.fields.therapistId = data1;
    if (this.state.fields.consentFormStatus == true) {
      this.props.fetchTherapistConsentForm(this.state.fields);
      this.props.toggle();
    }
  };
  render() {
    return (
      <Fragment>
        <Modal
          show={this.props.agreemodal}
          onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Malax Massage Therapist Agreement</Modal.Title>
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
                  <label>
                  <input
                   className="input"
                    type="checkbox"
                    id="chk_red"
                    onChange={this.agreed}
                  />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTherapistConsentForm: (data) => dispatch(fetchTherapistConsentForm(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TherapistAgreement)
);