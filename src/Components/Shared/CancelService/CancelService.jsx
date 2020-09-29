import React, { Component } from "react";

import { Button, Modal, Form, Input } from "semantic-ui-react";

export class CancelService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.cancelModal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Cancel Service</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
    
             
              <label>
               Are you sure you want to cancel this service ?
              </label>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" type="button" className="btn btn-sm del-btn">
              Yes
            </Button>
            <Button
              color="grey"
              type="button"
              className="btn btn-sm del-btn"
              onClick={this.close}
            >
             No
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default CancelService;
