import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Button, Label, Form, Input, TextArea } from "semantic-ui-react";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  completeDetails = () => {
    window.location.href = "/client-profile";
  };

  render() {
    return (
      <section className="therapistProDes paymentDet">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Payment details </h2>
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="thrprofileDes">
                    <Form>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Card Holder's name{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                />
                              </Form.Field>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Card number{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                />
                              </Form.Field>
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  CVV number{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                <label for="usr" className="chkBox">
                                  Card Expiration{" "}
                                </label>

                                <Input
                                  className="form-control"
                                  id="date"
                                  fullWidth={true}
                                  name="date"
                                  type="date"
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  City{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  ZIP code{" "}
                                </label>
                                <Input
                                  className="form-control"
                                  id="name"
                                  fullWidth={true}
                                  name="name"
                                  type="name"
                                />
                              </Form.Field>
                            </div>
                          </div>

                          <div className="col-sm-12">
                            <div className="form-group">
                              <Form.Field>
                                {" "}
                                <label for="usr" className="chkBox">
                                  Address{" "}
                                </label>
                                <textarea
                                  className="form-control textArea"
                                  rows="6"
                                  id="comment"
                                ></textarea>{" "}
                              </Form.Field>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="text-right">
                              <Button
                                className="btn btn-primary mr-4"
                                data-dismiss="modal"
                                onClick={this.completeDetails}
                              >
                                Connect with stripe
                              </Button>
                              <Button
                                onClick={this.completeDetails}
                                className="btn btn-primary"
                                data-dismiss="modal"
                              >
                                Complete
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

export default Payment;
