import React, { Component } from "react";
import {getTherapistAppointments} from "../../../redux/actions/therapist.action"
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ScheduleService extends Component {
  constructor(props) {
    super(props);
    this.state = {

      fields:{
        ClientScheduleId:0,
        TherapistId:0,
        Page:"",
        Limit:"",
        OrderBy:"StreetAddress",
        OrderByDescending:"",
        AllRecords:""
      }
    };
  }

  componentDidMount = async () => {
    this.state.fields.TherapistId=this.props.user.Data.TherapistId;
    await this.props.getTherapistAppointments(this.state.fields)
  }

  render() {
    return (
      <section className="therapistProDes">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Scheduled Services ritu 2</h2>
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


const mapStateToProps = (state) => {
  console.log("sttate dekho--------", state);
  return {
    user: state.user.user,
    saveLicensure: state.therapistReducer.saveLicensure,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTherapistAppointments: (data) => dispatch(getTherapistAppointments(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleService)
);