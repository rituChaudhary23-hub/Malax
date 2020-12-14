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
  var Details = {
    ClientScheduleId: data.clientScheduleId,
    ClientId: data.clientId,
  
  };
  return fetch("get", `${API_HOST}/ClientScheduleAPI/GetAppointments?ClientScheduleId=` +Details.ClientScheduleId+
  `&ClientId=` +
  Details.ClientId);
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
  var scheduledDetails = {
    ClientScheduleId: data.clientScheduleId,
    ClientId: data.clientId,
  
  }
  return fetch("get", `${API_HOST}/ClientScheduleAPI/GetServiceDetail`, data);
};

const getServiceStatus = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/GetServiceDetailStatus`,
    data
  );
};


//service-detail
const getClientTherapistDetail = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/GetClientAndTherapistOfServiceDetail`,
    data
  );
};

export const ClientScheduleService = {
  addAppointment,
  addPaymentInfo,
  getClientTherapistDetail,
  getServiceDetails,
  getClientAppointments,
  deleteAppointment,
  getServiceStatus,
};
