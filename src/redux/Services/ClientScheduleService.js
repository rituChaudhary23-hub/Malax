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

//payment-details
const addPaymentInfo = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientScheduleAPI/AddClientPaymentInfo`,
    data
  );
};

export const ClientScheduleService = {
  addAppointment,
  addPaymentInfo,
};
