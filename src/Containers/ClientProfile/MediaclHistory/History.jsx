import React, { Component } from "react";
import { Button, Form, Input } from "semantic-ui-react";

class History extends Component {
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
                            className="tab-pane container-fluid"
                            id="history"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-sm-12">
                                  <p>Emergency contact</p>
                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Name{" "}
                                      </label>
                                      <Input
                                        className="form-control"
                                        id="name"
                                        fullWidth={true}
                                        name="name"
                                        type="name"
                                        //   margin={"normal"}
                                      />{" "}
                                    </Form.Field>
                                  </div>
                                  <div className="form-group">
                                    {" "}
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Phone Number{" "}
                                      </label>

                                      <Input
                                        className="form-control"
                                        id="number"
                                        fullWidth={true}
                                        name="number"
                                        type="number"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>
                                  </div>
                                  <p>Physician contact </p>

                                  <div className="form-group">
                                    {" "}
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Name{" "}
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
                                    {" "}
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Phone Number{" "}
                                      </label>

                                      <Input
                                        className="form-control"
                                        id="number"
                                        fullWidth={true}
                                        name="number"
                                        type="number"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>{" "}
                                  </div>

                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Current medications{" "}
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
                                        Surgeries{" "}
                                      </label>

                                      <Input
                                        className="form-control"
                                        id="number"
                                        fullWidth={true}
                                        name="number"
                                        type="number"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>{" "}
                                  </div>

                                  <div className="form-group">
                                    <Form.Field>
                                      {" "}
                                      <label for="usr" className="chkBox">
                                        Hobbies{" "}
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
                                      {" "}
                                      <label for="usr" className="chkBox">
                                        Dislocations{" "}
                                      </label>
                                      <Input
                                        className="form-control"
                                        id="number"
                                        fullWidth={true}
                                        name="number"
                                        type="number"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>
                                  </div>

                                  <div className="form-group">
                                    <Form.Field>
                                      <label for="usr" className="chkBox">
                                        Profession{" "}
                                      </label>

                                      <Input
                                        className="form-control"
                                        id="number"
                                        fullWidth={true}
                                        name="number"
                                        type="number"
                                        //   margin={"normal"}
                                      />
                                    </Form.Field>
                                    {/* <input type="text" > */}
                                  </div>
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
                            </div>{" "}
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

export default History;
