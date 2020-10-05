import React, { Component } from "react";
import { Label, Button } from "semantic-ui-react";

export class ConfirmEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  loginClientRoute = () => {
    window.location.href = "/";
  };

  render() {
    return (
      <section className="log-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="conEmail d-none">
                <h3>Confirm your email address</h3>
                <p>
                  We sent a confirmation email to:<br></br>email@gmail.com
                </p>
                <p>
                  Check your email and click on the confirmation link to
                  continue.
                </p>
                <Button type="submit" className="btn btn-primary mr-4">
                  Resend Mail
                </Button>
                <Button
                  type="submit"
                  className="btn btn-cancel back"
                  onClick={this.loginClientRoute}
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ConfirmEmail;
