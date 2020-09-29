import React, { Component } from "react";
import { Button, Modal, Form, Input } from "semantic-ui-react";

export class Agreement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.agreemodal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Malax Massage Therapist Agreement</h3>
          </Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tellus nulla volutpat risus id adipiscing leo tristique.
                Sollicitudin ac rhoncus posuere bibendum aliquet elementum
                viverra volutpat. Amet libero in eu, ut erat platea laoreet.
                Augue scelerisque nunc adipiscing ultrices orci, sollicitudin.
                Sit egestas ultricies ipsum, posuere ut bibendum semper. Non
                nibh nibh accumsan metus pharetra integer aliquam vitae.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                tellus nulla volutpat risus id adipiscing leo tristique.
                Sollicitudin ac rhoncus posuere bibendum aliquet elementum
                viverra volutpat. Amet libero in eu, ut erat platea laoreet.
                Augue scelerisque nunc adipiscing ultrices orci, sollicitudin.
                Sit egestas ultricies ipsum, posuere ut bibendum semper. Non
                nibh nibh accumsan metus pharetra integer aliquam vitae.
              </p>
              <br></br>
              <label>
                I confirm that I have read and agree to the terms above
              </label>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" type="button" className="btn btn-sm del-btn">
              I Agree
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
        </Modal>
      </div>
    );
  }
}

export default Agreement;
