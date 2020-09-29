import React, { Component } from "react";

import { Button, Modal, Label, Input } from "semantic-ui-react";

export class ScheduledService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal
          size={"small"}
          open={this.props.scheduleModal}
          closeIcon
          onClose={this.props.toggle}
        >
          <Modal.Header>
            <h3>Schedule Service</h3>
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
              <Label>
                Scheduled Service Time :
                <Input
                  id="time"
                  fullWidth={true}
                  name="time"
                  type="time"
                  //   margin={"normal"}
                />
              </Label>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color="blue" type="button" className="btn btn-sm del-btn">
              Schedule
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
export default ScheduledService;
