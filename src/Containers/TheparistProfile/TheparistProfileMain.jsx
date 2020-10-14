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
import icon6 from "../../assets/images/icon6.png";
import Payment from "../../Components/Shared/PayInfoModal/Payment";

class TheparistProfileMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      phoneModal: false,
      consentFormModal: false,
      agreementModal: false,
      imageModal: false,
      payModal: false,
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

  ShowPayModal = () => {
    this.setState({ payModal: true });
  };
  closePayModal = () => {
    this.setState({ payModal: false });
  };
  routeChange() {
    window.location.href = "/update-theparist-profile";
  }

  render() {
    return (
      <div className="tab-content pistPro">
        <div id="TherapistProfile1" className="tab-pane active">
          <br />
          <section className="therapistProDes">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">Therapist Profile</h2>
                <div className="therapistProDesInner">
                  <div className="row">
                    <div className="col-md-12">
                      <ul className="first-sec">
                        <li>
                          <div className="thr-img">
                            <img src={icon1} />
                          </div>
                          <div className="thr-des">
                            <h5>Email Address Confirmation</h5>
                            <span>Setup your email details</span>
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
                            <span>Confirm your phone number</span>
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
                            <span>Setup your profile </span>
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
                            <span>Verify your identity</span>
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
                            <span>Setup your consent details</span>
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
                            <img src={icon6} />
                          </div>
                          <div className="thr-des">
                            <h5>Payment Information</h5>
                            <span>Setup your payment details</span>
                          </div>
                        </li>

                        <li>
                          <p>Not yet entered</p>
                        </li>
                        <li>
                          <Button
                            type="button"
                            className="btn btn-sm"
                            onClick={() => this.ShowPayModal()}
                          >
                            Update Payment Information
                          </Button>
                        </li>
                        <li>
                          <div className="thr-img">
                            <img src="assets/images/icon4.png" />
                          </div>
                          <div className="thr-des">
                            <h5>Profile Approval</h5>
                            <span>Awaiting approval</span>
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
          <Payment paymodal={this.state.payModal} toggle={this.closePayModal} />
        </div>
      </div>
    );
  }
}

export default TheparistProfileMain;
