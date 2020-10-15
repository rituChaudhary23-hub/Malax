import React, { Component } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

class LoaderComponent extends Component {
  render() {
    if (this.props.loading.loading) {
      return (
        <div>
          <Segment>
            <Dimmer active page>
              <Loader />
            </Dimmer>
          </Segment>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const mapStateToProps = state => {
    console.log("state",loader)
  return {
    loading: state.loading.meta
  };
};

export default connect(mapStateToProps)(LoaderComponent);
