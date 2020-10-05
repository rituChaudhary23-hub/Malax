import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Table, Modal, Label, Button } from "semantic-ui-react";
import CancelService from "../../../Components/Shared/CancelService/CancelService";
import ScheduledService from "../../../Components/Shared/ScheduledServiceModal/ScheduledService";

class ServiceDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { cancelModal: false, service: false };
  }
  back() {
    window.location.href = "/client-profile";
  }
  ShowServiceModal = () => {
    this.setState({ service: true });
  };
  closeServiceModal = () => {
    this.setState({ service: false });
  };
  ShowCancelModal = () => {
    this.setState({ cancelModal: true });
  };
  closeCancelModal = () => {
    this.setState({ cancelModal: false });
  };
  render() {
    return (
      <div>
        <Header />
        <section className="therapistProDes serDetScr">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Service Detail Screen </h2>
              <div className="row">
                <div className="col-sm-12">
                  <div className="serDetDes">
                    <p>
                      30 minutes Relaxation on 10th of september between 10 am -
                      12 am.
                    </p>
                    <p>Male client with therapist male only.</p>
                    <p>At home in the town - Heights area.</p>
                  </div>
                  {/* <div>
          <h2>Service Detail Screen</h2>
        </div> */}
                  <br></br>
                  <div>
                    <div>
                      {/* <div>
              <Label>
                30 minutes Relaxation on 10th of september between 10 am - 12
                am.
              </Label>
              <br></br>
              <Label>Male client with therapist male only.</Label>
              <br></br>
              <Label>At home in the town - Heights area.</Label>
            </div> */}
                      {/* <br></br>
                      <div>
                        <div>
                          <div>
                            <div classNameName="">
                              <h5>This service has not been scheduled yet.</h5>
                            </div>
                          </div>
                          <div>
                            <Button
                              color="blue"
                              type="button"
                              classNameName="btn btn-sm del-btn"
                              onClick={() => this.ShowServiceModal()}
                            >
                              Schedule Appointment
                            </Button>
                            <Button
                              color="grey"
                              type="button"
                              classNameName="btn btn-sm del-btn"
                              onClick={() => this.ShowCancelModal()}
                            >
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div> */}
                      <div className="serDetDes schYet">
                        <div className="row">
                          <div className="col-sm-8">
                            <div className="thisSer">
                              <h5>This service has not been scheduled yet.</h5>
                            </div>
                          </div>
                          <div className="col-sm-4 text-right">
                            <Button
                              className="btn btn-primary "
                              data-toggle="modal"
                              data-target="#canSer"
                              onClick={() => this.ShowServiceModal()}
                            >
                              Schedule service
                            </Button>
                          </div>
                        </div>
                      </div>
                      <section className="cltThrp serDetScr">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-6">
                              <h3 className="pb-2 pl-4">Client </h3>
                            </div>
                            <div className="col-sm-6">
                              <h3 className="pb-2">Therapist </h3>
                            </div>
                            <div className="col-sm-12">
                              <div className="cltThrpone">
                                <Table celled>
                                  <Table.Header>
                                    <Table.Row>
                                      <Table.HeaderCell>
                                        Client name
                                      </Table.HeaderCell>
                                      <Table.HeaderCell>
                                        Therapist name
                                      </Table.HeaderCell>
                                    </Table.Row>
                                  </Table.Header>
                                  <Table.Body>
                                    <Table.Row>
                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>Location street address</label>
                                        <br></br>
                                        <label>Client rating</label>
                                        <br></br>
                                        <label>Status</label>
                                      </Table.Cell>

                                      <Table.Cell>
                                        <label>Photo</label>
                                        <br></br>
                                        <label>Location street address</label>
                                        <br></br>
                                        <label>Client rating</label>
                                        <br></br>
                                        <label>Status</label>
                                      </Table.Cell>
                                    </Table.Row>
                                  </Table.Body>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>

                      <div>
                        <Button
                          classNameName="ui green button btn btn-primary btn-md w-40 mr-0"
                          onClick={this.back}
                        >
                          Back
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CancelService
                    cancelModal={this.state.cancelModal}
                    toggle={this.closeCancelModal}
                  />
                  <ScheduledService
                    scheduleModal={this.state.service}
                    toggle={this.closeServiceModal}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ServiceDetail;
