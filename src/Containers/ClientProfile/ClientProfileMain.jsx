import React, { Component } from "react";
import { Table, Search, Pagination, Button, Modal } from "semantic-ui-react";
import Verification from "../../Components/Shared/VerificationCodeModal/Verification";
import UpdateEmail from "../../Components/Shared/UpdateEmailModal/UpdateEmail";
import Consent from "../../Components/Shared/ConsentFormModal/ConsentForm";
import Agreement from "../../Components/Shared/AgreementModal/Agreement";
import Image from "../../Components/Shared/ImageModal/Image";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";

class ProfileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      phoneModal: false,
      consentFormModal: false,
      agreementModal: false,
      imageModal: false,
    };
  }

  showModal = () => {
    this.setState({ modal1: true });
  };
  showPhoneModal = () => {
    this.setState({ phoneModal: true });
  };
  closeModal = () => {
    this.setState({ modal1: false });
  };
  closePhoneModal = () => {
    this.setState({ phoneModal: false });
  };
  ShowconsentModal = () => {
    this.setState({ consentFormModal: true });
  };
  closeConsentModal = () => {
    this.setState({ consentFormModal: false });
  };

  ShowagreeModal = () => {
    this.setState({ agreementModal: true });
  };
  closeagreeModal = () => {
    this.setState({ agreementModal: false });
  };

  ShowImageModal = () => {
    this.setState({ imageModal: true });
  };
  closeImageModal = () => {
    this.setState({ imageModal: false });
  };

  routeChange() {
    window.location.href = "/update-client-profile";
  }
  serviceRequest() {
    window.location.href = "client-service-request";
  }
  render() {
    return (
      <div className="tab-content pistPro">
        <div id="TherapistProfile1" className="tab-pane active">
          <br />
          <section className="therapistProDes">
            <div className="card">
              <div className="card-body">
                <div className="row pb-3">
                  <div className="col-sm-6">
                    <h2 className="card-title pb-0">Client Profile</h2>
                  </div>
                  <div className="col-sm-6 text-md-right">
                    <Button
                      className="btn btn-primary"
                      onClick={this.serviceRequest}
                    >
                      Schedule A New Service
                    </Button>
                  </div>
                </div>

                <div className="therapistProDesInner">
                  <div className="row">
                    <div className="col-sm-12">
                      <ul className="first-sec">
                        <li>
                          <div className="thr-img">
                            <img src={icon1} />
                          </div>
                          <div className="thr-des">
                            <h5>Email Address Confirmation</h5>
                            <p>Setup your email details</p>
                          </div>
                        </li>
                        <li>
                          <p>therapist@aol.com</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.showModal()}
                          >
                            Update email address
                          </Button>
                        </li>
                        <li>
                          <div className="thr-img">
                            <img src={icon2} />
                          </div>
                          <div className="thr-des">
                            <h5>Telephone Number Confirmation</h5>
                            <p>Confirm your phone number</p>
                          </div>
                        </li>
                        <li>
                          <p>Not yet confirmed</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.showPhoneModal()}
                          >
                            Update phone number
                          </Button>
                        </li>
                        <li>
                          <div className="thr-img">
                            <img src={icon3} />
                          </div>
                          <div className="thr-des">
                            <h5>Therapist Profile</h5>
                            <p>Setup your profile </p>
                          </div>
                        </li>
                        <li>
                          <p>Not yet completed</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={this.routeChange}
                          >
                            Update profile
                          </Button>
                        </li>
                        <li>
                          <div className="thr-img">
                            <img src={icon4} />
                          </div>
                          <div className="thr-des">
                            <h5>Identity Verification</h5>
                            <p>Verify your identity</p>
                          </div>
                        </li>
                        <li>
                          <p>Not yet uploaded</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.ShowImageModal()}
                          >
                            Upload current photo
                          </Button>
                          <br />
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.ShowImageModal()}
                          >
                            Upload ID photo
                          </Button>
                        </li>
                        <li>
                          <div className="thr-img">
                            <img src={icon5} />
                          </div>
                          <div className="thr-des">
                            <h5>Consent Forms</h5>
                            <p>Setup your consent details</p>
                          </div>
                        </li>
                        <li>
                          <p>Not yet reviewed</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.ShowconsentModal()}
                          >
                            Malax Consent Form
                          </Button>
                          <br />
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.ShowagreeModal()}
                          >
                            Malax Therapist Agreement Form
                          </Button>
                        </li>

                        <li>
                          <div className="thr-img">
                            <img src={icon4} />
                          </div>
                          <div className="thr-des">
                            <h5>Profile Approval</h5>
                            <p>Awaiting approval</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <UpdateEmail modal={this.state.modal1} toggle={this.closeModal} />
          <Verification
            Verifymodal={this.state.phoneModal}
            toggle={this.closePhoneModal}
          />
          <Consent
            consentmodal={this.state.consentFormModal}
            toggle={this.closeConsentModal}
          />
          <Agreement
            agreemodal={this.state.agreementModal}
            toggle={this.closeagreeModal}
          />
          <Image
            imagemodal={this.state.imageModal}
            toggle={this.closeImageModal}
          />
        </div>
      </div>
    );
  }
}

export default ProfileMain;
