import React, { Component } from "react";
import { getTherapistAppointments } from "../../../redux/actions/therapist.action";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { listDateFormat } from "../../../utils/dateFormat";
import { Table, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

class ScheduleService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        ClientScheduleId: 0,
        TherapistId: 0,
        Page: "",
        Limit: "",
        OrderBy: "CreatedOn",
        OrderByDescending: "",
        AllRecords: "",
      },
    };
  }

  componentDidMount = async () => {
    this.state.fields.TherapistId = this.props.user.Data.TherapistId;
    await this.props.getTherapistAppointments(this.state.fields);
  };

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
                      {this.props.saveAppointments.data != null &&
                        this.props.saveAppointments.data.Data
                          .AllClientAppointments &&
                        this.props.saveAppointments.data.Data.AllClientAppointments.map(
                          (item, index) => (
                            <Table.Row key={index}>
                              <Table.Cell>
                                {listDateFormat(item.ServiceDate)}

                                {/* {listDateFormat(item.ServiceDate).convertToDateTime} */}
                              </Table.Cell>
                              <Table.Cell>{item.From}</Table.Cell>
                              <Table.Cell>
                                {item.StreetAddress} ,{item.ZipCode}
                              </Table.Cell>
                              <Table.Cell>{item.ClientName}</Table.Cell>
                              <Table.Cell>
                                <Link
                                  to={
                                    "/scheduled-services?sid=" +
                                    item.ClientScheduleId
                                  }
                                >
                                  {" "}
                                  {item.Status.CodeName}
                                </Link>
                              </Table.Cell>

                              <Table.Cell>
                                <Button
                                  onClick={() =>
                                    this.deleteAppointment(
                                      item.ClientScheduleId
                                    )
                                  }
                                >
                                  Cancel
                                </Button>
                              </Table.Cell>
                            </Table.Row>
                          )
                        )}
                      {this.props.item == 0 && <td>No record</td>}
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
  return {
    user: state.user.user,
    saveAppointments: state.therapistReducer.saveAppointments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTherapistAppointments: (data) =>
      dispatch(getTherapistAppointments(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ScheduleService)
);
