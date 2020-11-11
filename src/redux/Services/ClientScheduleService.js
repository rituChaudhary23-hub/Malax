import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

//request-appointment
const addAppointment = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/RequestForAppointment`,
    data
  );
};

//get-scheduled-services
const getClientAppointments = (data) => {
  debugger;
  return fetch("post", `${API_HOST}/ClientScheduleAPI/GetAppointments`, data);
};

//payment-details
const addPaymentInfo = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/AddClientPaymentInfo`,
    data
  );
};

//delete appointment
const deleteAppointment = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/DeleteAppointments`,
    data
  );
};

const getServiceDetails = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/GetServiceDetail`,
    data
  );
};



export const ClientScheduleService = {
  addAppointment,
  addPaymentInfo,getServiceDetails,
  getClientAppointments,
  deleteAppointment
};
