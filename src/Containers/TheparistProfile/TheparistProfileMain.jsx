import React, { Component } from "react";
import { Table, Search, Pagination, Button, Modal } from "semantic-ui-react";
import Verification from "../../Components/Shared/VerificationCodeModal/Verification";
import UpdateEmail from "../../Components/Shared/UpdateEmailModal/UpdateEmail";
import Consent from "../../Components/Shared/ConsentFormModal/ConsentForm";
import Agreement from "../../Components/Shared/AgreementModal/Agreement";
import TherapistCurrentImage from "../../Components/Shared/TherapistCurrentImage";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import icon4 from "../../assets/images/icon4.png";
import icon5 from "../../assets/images/icon5.png";
import icon6 from "../../assets/images/icon6.png";
import Payment from "../../Components/Shared/PayInfoModal/Payment";
import { fetchUserPhone } from "../../redux/actions/client.action";


class TheparistProfileMain extends Component {
  phone;
  constructor(props) {
    
    super(props);
    this.state = {
      phone:"",
      modal1: false,
      phoneModal: false,
      consentFormModal: false,
      agreementModal: false,
      imageModal: false,
      payModal: false,
    };
  }
  componentDidMount =  (data) => {
    data = {
      userId: this.props.user.Data.UserId,
    };
    // var data1 = this.props.user.Data.ClientId;
    // this.state.fields.clientId = data1;
    this.props.fetchUserPhone(data);
    // this.phone = sessionStorage.getItem("value");
  };
  showModal = () => {
    this.setState({ modal1: true });
  };
  closeModal = () => {
    this.setState({ modal1: false });
  };

  showPhoneModal = () => {
    this.setState({ phoneModal: true });
  };


  closePhoneModal = async () => {
    debugger
    var data = {
      userId: this.props.user.Data.UserId,
    };
    var res = await this.props.fetchUserPhone(data);
    debugger
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
                        <p> {this.props.user.Data.Email}</p>
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
                          <p>
                             {this.props.saveashu.data && this.props.saveashu.data.Data
                              ? this.props.saveashu.data.Data.PhoneNumber
                              : "Not Yet Confirmed"}
                              </p>
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
          <TherapistCurrentImage
            imagemodal={this.state.imageModal}
            toggle={this.closeImageModal}
          />
          <Payment paymodal={this.state.payModal} toggle={this.closePayModal} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("phone state----",state)
  return {
    formVal: state.form,
    user: state.user.user,
    saveashu: state.clientReducer.saveashu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserPhone: (data) => dispatch(fetchUserPhone(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TheparistProfileMain)
);
