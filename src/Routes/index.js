import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { Dimmer, Loader } from "semantic-ui-react";

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  warn() {
    alert("Your session has expired!");
  }

  render() {
    const { isAuthenticated, isLoading, ...props } = this.props;

    if (isLoading) {
      return (
        <Dimmer active>
          <Loader content="Loading..." />
        </Dimmer>
      );
    }

    if (!isLoading && !isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <Route {...props} />;
  }
}

const PublicRoute = ({ isAuthenticated, isLoading, ...props }) => {
  if (isLoading) {
    return (
      <Dimmer active>
        <Loader content="Loading..." />
      </Dimmer>
    );
  }

  if (!isLoading && isAuthenticated) {
    return <Redirect to="/user-profile" />;
  }
  return <Route {...props} />;
};

export { PrivateRoute, PublicRoute };
