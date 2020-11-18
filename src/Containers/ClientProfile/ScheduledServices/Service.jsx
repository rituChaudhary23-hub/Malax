import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import { listDateFormat } from "../../../utils/dateFormat";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchScheduledAppointment } from "../../../redux/actions/clientSchedule.action";
import EditAppointment from "../../../Components/Shared/AppointmentServiceModal/EditAppointment";
import DeleteAppointment from "../../../Components/Shared/AppointmentServiceModal/DeleteAppointment";

class ServiceAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        clientScheduleId: 0,
        clientId: 0,
      },
      editService: false,
      deleteService: false,
      editServiceId: "",
      deleteId: "",
      userInfo: {},
      userInfoDelete: {},
    };
  }

  componentDidMount = async (data) => {
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    this.props.fetchScheduledAppointment(this.state.fields);
  };

  editAppointment = (data) => {
    this.setState({ editServiceId: data.ClientScheduleId, editService: true });
    this.setState({ userInfo: data });
  };
  close = () => {
    this.setState({ editService: false });
    this.props.fetchScheduledAppointment(this.state.fields);
  };
  closee = async () => {
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    var ddd = await this.props.fetchScheduledAppointment(this.state.fields);
    this.setState({ deleteService: false });
  };
  deleteAppointment = (data) => {
    this.setState({ deleteId: data.ClientScheduleId, deleteService: true });
    this.setState({ userInfoDelete: data });
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
                        <Table.HeaderCell>THEPARIST</Table.HeaderCell>
                        <Table.HeaderCell>STATUS</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {this.props.getAppointment.token != null &&
                        this.props.getAppointment.token.Data
                          .AllClientAppointments &&
                        this.props.getAppointment.token.Data.AllClientAppointments.map(
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
                              <Table.Cell>None</Table.Cell>
                              <Table.Cell>
                                <Link
                                  to={
                                    "/theparist-detail?sid=" +
                                    item.ClientScheduleId
                                  }
                                >
                                  {" "}
                                  {item.Status.CodeName}
                                </Link>
                              </Table.Cell>
                              <Table.Cell>
                                <Button
                                  onClick={() => this.editAppointment(item)}
                                >
                                  Edit
                                </Button>
                              </Table.Cell>
                              <Table.Cell>
                                <Button
                                  onClick={() =>
                                    this.deleteAppointment(
                                      item.ClientScheduleId
                                    )
                                  }
                                >
                                  DELETE
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
              <EditAppointment
                editModal={this.state.editService}
                toggle={this.close}
                userDetail={this.state.userInfo}
              />
              <DeleteAppointment
                deleteModal={this.state.deleteService}
                toggle={this.closee}
                userDetail={this.state.userInfoDelete}
              />
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
    getAppointment: state.clientScheduleReducer.getAppointment,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScheduledAppointment: (data) =>
      dispatch(fetchScheduledAppointment(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceAppointment)
);
