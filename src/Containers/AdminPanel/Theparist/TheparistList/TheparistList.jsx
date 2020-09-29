import React, { Component } from "react";
import { Table, Search, Pagination, Button, Modal } from "semantic-ui-react";
import { Link } from "react-router-dom";

class TheparistList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h2>Theparist List</h2>
        </div>
        <div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>THEPARIST NAME</Table.HeaderCell>

                <Table.HeaderCell>
                  DATE MOST RECENT SERVICE RECEIVED
                </Table.HeaderCell>

                <Table.HeaderCell>PROFILE STATUS</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>{" "}
              <Table.Row>
                <Table.Cell>John Warner</Table.Cell>
                <Table.Cell>07-20-2020</Table.Cell>
                <Table.Cell>
                  <Link to="/manage-theparist-profile"> Approved</Link>
                </Table.Cell>
                <Table.Cell>View</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    );
  }
}

export default TheparistList;
