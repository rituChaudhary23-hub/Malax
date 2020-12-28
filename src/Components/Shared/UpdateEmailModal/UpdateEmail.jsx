import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router";

import { Button, Input, Form } from "semantic-ui-react";
import fire from "../../../utils/config/fire"
import { connect } from "react-redux";
import { fetchUpdateEmail } from "../../../redux/actions/client.action";

class UpdateEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        id: "",
        email:""
      },
    };
  }

  UpdateEmail = () => {
    // var data = this.props.user.Data.UserId;
    // this.state.fields.userId = data;
    // this.props.fetchUpdateEmail(this.state.fields);
    // var localId = u.user.uid;
    // this.state.fields.id = localId;
    // this.props.toggle();



    fire.auth()
    .signInWithEmailAndPassword('you@domain.com', 'correcthorsebatterystaple')
    .then(function(userCredential) {
      userCredential.user.updateEmail('newyou@domain.com')
      
      this.props.fetchUpdateEmail(this.state.fields);
    })
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    const { submitting } = this.props;

    return (
      <Fragment>
        <Form autoComplete="off">
          <Modal
            show={this.props.modal}
            onHide={this.props.toggle}
            size="lg"
            className="custom-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Update email address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12">
                  <p className="confirmation">
                    A confirmation message will be sent to your new email
                    address.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-7 mb-4">
                  <div className="modCon">
                    <h6>Current email ID :</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-5 mb-4">
                  <div className="modCon">
                    
                    {/* {this.props.user.Data.Email} */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-6">
                  <div className="modCon">
                    <h6>New email ID :</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <input
                    className="login-form-textfield form-control"
                    id="email"
                    fullWidth={true}
                    onChange={this.setFormValue.bind(this, "value")}
                    name="email"
                    type="email"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                // disabled={this.state.fields.value.length <= 5}
                className="btn btn-primary register mr-4"
                onClick={this.UpdateEmail}
              >
                Update Email
              </Button>
              <button
                color="gray"
                type="submit"
                className="btn btn-sm btn-white"
                onClick={this.props.toggle}
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal>
        </Form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    formVal: state.form,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUpdateEmail: (data) => dispatch(fetchUpdateEmail(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(UpdateEmail)
);
