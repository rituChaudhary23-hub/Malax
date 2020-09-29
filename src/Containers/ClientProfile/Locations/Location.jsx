import React, { Component } from "react";
import { Radio } from "semantic-ui-react";

export class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus
            sed turpis cras quam ac tortor tempus amet. Dolor eget enim ultrices
            dictum tempor pharetra. Id montes, non mattis viverra. Vel nibh arcu
            venenatis leo quis nunc, tempus maecenas enim.
          </p>
        </div>
        <br></br>
        <div>
          <h5>Where will you be receiving massages?</h5>
          <Radio label="In home" />
          <Radio label="At Work" />
          <Radio label="Other" />
        </div>
        <br></br>
        <div>
          <h5>Space available confirmation</h5>
          <Radio label="Yes" />
          <Radio label="No" />
        </div>
        <br></br>
        <div>
          <h5>Presence of pets</h5>
          <Radio label="Yes" />
          <Radio label="No" />
        </div>
      </div>
    );
  }
}

export default Location;
