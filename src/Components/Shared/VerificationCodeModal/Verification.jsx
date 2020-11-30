import React, { Component, Fragment } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Button, Input, Form } from "semantic-ui-react";

import { fetchUpdateEmail } from "../../../redux/actions/client.action";

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        userId: 0,
        fieldType: "p",
        value: "",
      },
    };
  }
  verifyPhone = async () => {
    var data = this.props.user.Data.UserId;
    this.state.fields.userId = data;
    var res = await this.props.fetchUpdateEmail(this.state.fields);
    this.props.toggle();
  };

  setFormValue(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }
  close = () => {
    this.props.toggle();
  };
  render() {
    return (
      <Fragment>
        <Form autoComplete="off">
          <Modal
            show={this.props.Verifymodal}
            onHide={this.props.toggle}
            size="lg"
            className="custom-modal"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Confirm phone number</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="row">
                <div className="col-sm-12">
                  <p className="confirmation">
                    A text message containing a verification code will be sent
                    to this phone number for cofirmation.
                  </p>
                </div>

                <div className="col-lg-4 col-md-6 col-6">
                  <div className="modCon">
                    <h6> Phone Number</h6>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 col-6">
                  <input
                    className="login-form-textfield form-control"
                    id="number"
                    fullWidth={true}
                    onChange={this.setFormValue.bind(this, "value")}
                    name="number"
                    minLength="10"
                    maxLength="10"
                    type="tel"
                  />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button
                color="blue"
                className="btn btn-sm btn-primary"
                onClick={this.verifyPhone}
                type="submit"
                disabled={this.state.fields.value.length <= 9}
              >
                Verify{" "}
              </button>
              <button
                color="grey"
                type="button"
                className="btn btn-sm btn-white"
                onClick={this.props.toggle}
              >
                Cancel
              </button>
            </Modal.Footer>
          </Modal>{" "}
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
  connect(mapStateToProps, mapDispatchToProps)(Verification)
);
