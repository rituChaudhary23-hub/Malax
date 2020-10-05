import React, { Component } from "react";
import { Button, Form, Input, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: "m", text: "Male", value: "m" },
  { key: "k", text: "Female", value: "f" },
];

class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { gender: "m" };
  }

  render() {
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <div className="col-sm-12 my-5">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis tempus sed turpis cras quam ac tortor tempus amet.
                      Dolor eget enim ultrices dictum tempor pharetra. Id
                      montes, non mattis viverra. Vel nibh arcu venenatis leo
                      quis nunc, tempus maecenas enim.
                    </p>
                  </div>
                  <div className="col-sm-12">
                    <div className="thrprofileDes">
                      <div className="tab-content">
                        <Form>
                          <div
                            className="tab-pane container-fluid active"
                            id="Personal"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="form-group">
                                    <Form.Field>
                                      {" "}
                                      <label for="usr" className="chkBox">
                                        First name{" "}
                                      </label>
                                      <Input
                                        className="form-control"
                                        id="name"
                                        fullWidth={true}
                                        name="name"
                                        type="name"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>
                                  </div>
                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Last name{" "}
                                      </label>

                                      <Input
                                        className="form-control"
                                        id="name"
                                        fullWidth={true}
                                        name="name"
                                        type="name"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>
                                  </div>
                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Gender{" "}
                                      </label>

                                      <select
                                        className="form-control"
                                        id="sel1"
                                      >
                                        <option>Male</option>
                                        <option>Female</option>
                                      </select>
                                    </Form.Field>
                                  </div>
                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Birth date{" "}
                                      </label>
                                      <Input
                                        className="form-control date"
                                        id="date"
                                        fullWidth={true}
                                        name="date"
                                        type="date"
                                        //   margin={"normal"}
                                      />{" "}
                                    </Form.Field>
                                  </div>{" "}
                                </div>
                              </div>
                            </div>
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-sm-12">
                                  <div className="text-right">
                                    <Button
                                      type="button"
                                      className="btn btn-primary mr-4"
                                      data-dismiss="modal"
                                    >
                                      Submit
                                    </Button>
                                    <Button
                                      type="button"
                                      className="btn btn-cancel"
                                      data-dismiss="modal"
                                    >
                                      Cancel
                                    </Button>
                                  </div>
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
          </div>
        </div>
      </section>
    );
  }
}

export default PersonalInfo;
