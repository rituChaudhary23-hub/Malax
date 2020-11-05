import React, { Component } from "react";
import { Table, Search, Pagination, Button, Modal, ItemMeta } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchScheduledAppointment } from "../../../redux/actions/clientSchedule.action";

class ServiceAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        clientScheduleId: 0,
        clientId: 0,
      },
    };
  }

  componentDidMount = async (data) => {
    var data1 = this.props.user.Data.ClientId;
    this.state.fields.clientId = data1;
    this.props.fetchScheduledAppointment(this.state.fields);
  };

  render() {
    console.log("----------ritu------",this.props.getAppointment.data);
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
                    {this.props.getAppointment.data && this.props.getAppointment.data.Data.AllClientAppointments.map((item, index) => (
                      <Table.Row key={index}>                     
                        <Table.Cell>
                          {item.ServiceDate}
                        </Table.Cell>
                        <Table.Cell>{item.From}</Table.Cell>
                        <Table.Cell>
                       {item.StreetAddress} ,{item.ZipCode}
                        </Table.Cell>
                        <Table.Cell>John Warner</Table.Cell>
                        <Table.Cell>
                          <Link to="/theparist-detail"> Requested</Link>
                        </Table.Cell>
                        <Table.Cell>EDIT/DELETE</Table.Cell>
                      </Table.Row>
                       ))}
                     
             
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
  console.log("--------------state",state)
  return {
    user: state.user.user,
    getAppointment:state.clientScheduleReducer.getAppointment

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchScheduledAppointment: (data) => dispatch(fetchScheduledAppointment(data)),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ServiceAppointment)
);
