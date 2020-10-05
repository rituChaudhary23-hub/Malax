import React, { Component } from "react";
import { Form, TextArea, Button } from "semantic-ui-react";
import { Field } from "redux-form";

class Condition extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  back() {
    window.location.href = "/client-profile";
  }
  render() {
    return (
      // <div>
      //   <div>
      //     <p>
      //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
      //       sed turpis cras quam ac tortor tempus amet. Dolor eget enim ultrices
      //       dictum tempor pharetra. Id montes, non mattis viverra. Vel nibh arcu
      //       venenatis leo quis nunc, tempus maecenas enim.
      //     </p>
      //   </div>
      //   <br></br>
      //   <div>
      //     <Form>
      //       <div className="form-check form-check-inline">
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Arthritis
      //             </span>
      //           </label>

      //           {""}
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Bursitis
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Fibromyalgia
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Headaches
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Swollen joints
      //             </span>
      //           </label>
      //         </span>
      //       </div>
      //       <h2>Areas of pain, injury, tension, restricted movement</h2>
      //       <div className="form-check form-check-inline">
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Head / Neck
      //             </span>
      //           </label>

      //           {""}
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Arms
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Shoulders
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Elbows
      //             </span>
      //           </label>
      //         </span>
      //         <span>
      //           <label>
      //             <input
      //               className="form-check-input"
      //               type="checkbox"
      //               id="chk_red"
      //             />
      //             <span className="form-check-label" for="chk_red">
      //               Wrists
      //             </span>
      //           </label>
      //         </span>
      //       </div>
      //       <div>
      //         {" "}
      //         <h3>Any other health concerns</h3>
      //         <TextArea placeholder="" />
      //       </div>
      //     </Form>
      //   </div>
      // </div>

      <section className="therapistProDes">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            // sed turpis cras quam ac tortor tempus amet. Dolor eget enim
            ultrices // dictum tempor pharetra. Id montes, non mattis viverra.
            Vel nibh arcu // venenatis leo quis nunc, tempus maecenas enim.
          </p>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="tab-pane container-fluid fade" id="conditions">
              <div className="thrChkBox graybg">
                <Form>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red"
                      />
                      <span className="form-check-label" for="chk_red">
                        Arthritis
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_green"
                      />
                      <span className="form-check-label" for="chk_green">
                        Bursitis
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />
                      <span className="form-check-label" for="chk_blue">
                        Headaches
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red1"
                      />
                      <span className="form-check-label" for="chk_red1">
                        Swollen joints
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_green1"
                      />
                      <span className="form-check-label" for="chk_green1">
                        Fibromyalgia
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue1"
                      />
                      <span className="form-check-label" for="chk_blue1">
                        High blood pressure
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Low blood pressure
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Warts
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Stroke
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Chest pain
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Seizures / convulsions
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Constipation
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Vericose veins
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />{" "}
                      <span className="form-check-label" for="chk_red2">
                        Cancer
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />{" "}
                      <span className="form-check-label" for="chk_red2">
                        Skin conditions
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red2"
                      />
                      <span className="form-check-label" for="chk_red2">
                        None of the above
                      </span>
                    </label>
                  </div>
                </Form>
              </div>

              <h5 className="mt-5 mb-2">
                Areas of pain, injury, tension, restricted movement
              </h5>
              <div className="thrChkBox graybg">
                <Form>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_red"
                      />
                      <span className="form-check-label" for="chk_red">
                        Head / Neck
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_green"
                      />
                      <span className="form-check-label" for="chk_green">
                        Arms
                      </span>
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />
                      <span className="form-check-label" for="chk_blue">
                        Shoulders
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />{" "}
                      <span className="form-check-label" for="chk_blue1">
                        Hands
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />
                      <span className="form-check-label" for="chk_red2">
                        Hips
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />{" "}
                      <span className="form-check-label" for="chk_red2">
                        Legs
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />{" "}
                      <span className="form-check-label" for="chk_red2">
                        Knees
                      </span>
                    </label>
                  </div>

                  <div className="form-check form-check-inline">
                    <label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="chk_blue"
                      />
                      <span className="form-check-label" for="chk_red2">
                        None of the above
                      </span>
                    </label>
                  </div>
                </Form>
              </div>

              <div className="container">
                <div className="row">
                  <div className="col-sm-12 mt-5">
                    <div className="form-group">
                      <label for="usr" className="chkBox">
                        Any other health concerns{" "}
                      </label>
                      <textarea
                        className="form-control textArea"
                        rows="6"
                        id="comment"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-right mt-5">
                <Button
                  type="button"
                  className="btn btn-primary mr-4"
                  data-dismiss="modal"
                  onClick={this.back}
                >
                  Save
                </Button>
                <Button
                  type="button"
                  className="btn btn-cancel"
                  data-dismiss="modal"
                  onClick={this.back}
                >
                  Cancel
                </Button>
              </div>
            </div>{" "}
          </div>
        </div>
      </section>
    );
  }
}

export default Condition;
