import React, { Component } from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";

export class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.imagemodal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Upload Photo ID</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <label>
                Please upload a photo of your current ID card (e.g., driver's
                license). This will be used by Malax staff when reviewing your
                profile but will not be shared with clients.
              </label>
              <div className="form_half">
                <label>Image</label>
                <input
                  type="file"
                  multiple
                  ref="fileInput"
                  onChange={this.onFileUploadChange}
                />
                <img src="" width="100" height="100" />
              </div>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" type="button" className="btn btn-sm del-btn">
              Upload Image from Computer
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}
export default Image;
