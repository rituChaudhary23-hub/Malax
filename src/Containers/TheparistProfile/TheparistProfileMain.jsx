import React, { Component } from "react";
import { Table, Search, Pagination, Button, Modal } from "semantic-ui-react";
import Verification from "../../Components/Shared/VerificationCodeModal/Verification";
import UpdateEmail from "../../Components/Shared/UpdateEmailModal/UpdateEmail";
import Consent from "../../Components/Shared/ConsentFormModal/ConsentForm";
import Agreement from "../../Components/Shared/AgreementModal/Agreement";
import Image from "../../Components/Shared/ImageModal/Image";
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
      <div>
        <div>
          <h2>Therapist Profile</h2>
        </div>
        <div className="col-sm-6 text-sm-right"></div>
        <div>
          <Table celled>
            <Table.Header></Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Email Address Confirmation</Table.Cell>
                <Table.Cell>therapist@aol.com</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.showModal()}
                  >
                    Update email address
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Telephone Number Confirmation</Table.Cell>
                <Table.Cell>Not yet confirmed</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.showPhoneModal()}
                  >
                    Update phone number
                  </Button>
                </Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>Therapist Profile</Table.Cell>
                <Table.Cell>Not yet completed</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={this.routeChange}
                  >
                    Update profile
                  </Button>
                </Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>Identity Verification</Table.Cell>
                <Table.Cell>Not yet uploaded</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.ShowImageModal()}
                  >
                    Upload current photo
                  </Button>
                  <br></br>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.ShowImageModal()}
                  >
                    Upload ID photo
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Consent Forms</Table.Cell>
                <Table.Cell>Not yet reviewed</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.ShowconsentModal()}
                  >
                    Malax Consent Form
                  </Button>
                  <br></br>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.ShowagreeModal()}
                  >
                    Malax Therapist Agreement Form
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell> Payment Information</Table.Cell>
                <Table.Cell>Not yet reviewed</Table.Cell>
                <Table.Cell>
                  <Button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => this.ShowPayModal()}
                  >
                    Update Payment Information
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Profile Approval</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
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
    );
  }
}

export default TheparistProfileMain;
