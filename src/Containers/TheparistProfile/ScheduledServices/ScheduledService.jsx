import React, { Component } from "react";
import Header from "../../../Components/Shared/Header";
import { Tab } from "semantic-ui-react";

import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ScheduleService extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Scheduled Services</h2>
            <div className="scheduledServices">
              <div className="row">
                <div className="col-sm-12">
                  <Table celled>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>DATE</Table.HeaderCell>
                        <Table.HeaderCell>TIME OF SERVICE</Table.HeaderCell>
                        <Table.HeaderCell>LOCATION</Table.HeaderCell>
                        <Table.HeaderCell>CLIENT</Table.HeaderCell>
                        <Table.HeaderCell>STATUS</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>07-20-2020</Table.Cell>
                        <Table.Cell>11:00 Am</Table.Cell>
                        <Table.Cell>New York, NY 10001</Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>07-20-2020</Table.Cell>
                        <Table.Cell>11:00 Am</Table.Cell>
                        <Table.Cell>New York, NY 10001</Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>07-20-2020</Table.Cell>
                        <Table.Cell>11:00 Am</Table.Cell>
                        <Table.Cell>New York, NY 10001</Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>07-20-2020</Table.Cell>
                        <Table.Cell>11:00 Am</Table.Cell>
                        <Table.Cell>New York, NY 10001</Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>07-20-2020</Table.Cell>
                        <Table.Cell>11:00 Am</Table.Cell>
                        <Table.Cell>New York, NY 10001</Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ScheduleService;
