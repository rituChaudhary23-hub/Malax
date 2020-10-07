import React, { Component, Fragment } from "react";
import { Modal } from 'react-bootstrap';


export class UpdateEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      // <div class="modal custom-modal" id="email">
      //   <div class="modal-dialog modal- modal-centered">
      //     <div class="modal-content">
      <Fragment>
        <Modal show={this.props.modal} onHide={this.props.toggle}
          size="lg"
          className="custom-modal"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title >
             Update email address
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <div class="row">
              <div class="col-sm-12">
                <p class="confirmation">
                  A confirmation message will be sent to your new email address.</p>
              </div>
              <div class="col-lg-4 col-md-6 col-7 mb-4">
                <div class="modCon"><h6>Current email ID :</h6></div>
              </div>
              <div class="col-lg-8 col-md-6 col-5 mb-4">
                <div class="modCon">client@aol.com</div>
              </div>
              <div class="col-lg-4 col-md-6 col-6">
                <div class="modCon"><h6>New email ID :</h6></div>
              </div>
              <div class="col-lg-8 col-md-6 col-6">

                <input
                  className="login-form-textfield form-control"
                  id="email"
                  fullWidth={true}
                  name="email"
                  type="email"
                />
              </div>
            </div>

            {/* <label>
              A confirmation message will be sent to your new email
              address.
                  </label>
            <h4>Current email ID :client@aol.com</h4>
            <h4>
              New email ID :
                  <input
                    className="login-form-textfield"
                    id="email"
                    fullWidth={true}
                    name="email"
                    type="email"
                  />
              
            </h4> */}
          </Modal.Body>
          <Modal.Footer>
            <button
              color="blue"
              type="button"
              className="btn btn-sm btn-primary"
              onClick={this.deleteUser}
            >
              Update Email
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
        </Modal >
        {/* <Modal
          size={"small"}
          centered={true}
          dimmer={false}
          open={this.props.modal}
          closeIcon
          onClose={this.props.toggle}
        >
<h3> Update email address</h3>          <Modal.Header>
            <h3> Update email address</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <label>
                A confirmation message will be sent to your new email
                address.
                  </label>
              <h4>Current email ID :client@aol.com</h4>
              <h4>
                New email ID :
                    <Form>
                  <Form.Field>
                    <Input
                      className="login-form-textfield"
                      id="email"
                      fullWidth={true}
                      name="email"
                      type="email"
                    />
                  </Form.Field>
                </Form>
              </h4>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button
              color="blue"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.deleteUser}
            >
              Update Email
                </Button>
            <Button
              color="grey"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.close}
            >
              Cancel
                </Button>
          </Modal.Actions>
        </Modal> */}
      </Fragment >

      //   </div>
      // </div>
    );
  }
}

export default UpdateEmail;
