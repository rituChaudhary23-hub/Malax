import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
// import "../src/assets/scss/style.scss";
import { toast, ToastContainer } from "react-toastify";
import { PrivateRoute, PublicRoute } from "./Routes";
import HomePage from "./Components/HomePage";
import Login from "./Containers/Login/Login";
import Register from "./Containers/Register/ClientRegister/Register";
import ClientRegister from "./Containers/Register/ClientRegister/ClientRegister"
import TheparistRegister from "./Containers/Register/TheparistRegister/TheparistRegister"
import ForgotPassword from "./Containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./Containers/ResetPassword/ResetPassword";
import ClientProfile from "./Containers/ClientProfile/ClientProfile";
import ServiceDetail from "./Containers/Service/ServiceDetail/ServiceDetail";
import ScheduleServiceDetail from "./Containers/TheparistProfile/ScheduledServices/ScheduleServiceDetail/ScheduleServiceDetail"
import UpdateClientProfile from "./Containers/ClientProfile/UpdateClientProfile";
import ServiceRequest from "./Containers/Service/ServiceRequest/ServiceRequest";
import Profile from "./Containers/TheparistProfile/TheparistProfile";
import UpdateTheparistProfile from "./Containers/TheparistProfile/UpdateTheparistProfile";
import ConfirmEmail from "./Containers/Register/ConfirmEmail/ConfirmEmail";
// import TheparistRegister from "./Containers/Register/TheparistRegister/TheparistRegister";
import Payment from "./Containers/Service/Payment/Payment";

//admin
import Index from "./Containers/AdminPanel/index";
import ManageClientProfile from "./Containers/AdminPanel/Client/ClientProfile/ClientProfile";
import ManageTheparistProfile from "./Containers/AdminPanel/Theparist/TheparistProfile/ManageProfile";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route component={Register} path="/register" />
            <Route exact component={Login} path="/" />
            <Route component={ForgotPassword} path="/forgot-password" />

            <Route component={ResetPassword} path="/reset-password" />
            
            <Route component={ClientRegister} path="/client-register" />
           
            <Route component={TheparistRegister} path="/therapist-register" />

            <Route
              path="/client-profile"
              component={ClientProfile}
              // isAuthenticated={isAuthenticated}
              // isLoading={loading} 
            />

            <Route path="/confirm-email" component={ConfirmEmail} />
            <Route
              path="/update-client-profile"
              component={UpdateClientProfile}
            />
            <Route path="/client-service-request" component={ServiceRequest} />

            <Route path="/theparist-register" component={TheparistRegister} />
            <Route
              path="/update-theparist-profile"
              component={UpdateTheparistProfile}
            />
            <Route path="/theparist-profile" component={Profile} />
            <Route path="/dashboard" component={Index} />

            <Route
              path="/manage-client-profile"
              component={ManageClientProfile}
            />

            <Route
              path="/manage-theparist-profile"
              component={ManageTheparistProfile}
            />
            <Route path="/payment" component={Payment} />
            <Route component={ServiceDetail} path="/theparist-detail" />
            
            <Route component={ScheduleServiceDetail} path="/scheduled-services" />

          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
