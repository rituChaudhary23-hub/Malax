import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

//upload-image
const addImage = (data) => {
  var imageData = {
    therapistIdentityId: data.therapistIdentityId,
    therapistId: data.therapistId,
    imageType: data.imagesType,
    therapistImage: data.therapistImage,
    therapistImageTypeId: data.therapistImageTypeId,
    actionBy: data.actionBy,
  };
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddUpdateTherapistIdentity`,
    imageData
  );
};

//get-image-api
const getTherapistImage = (data) => {
  var identity = {
    therapistId: data,
  };
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/GetTherapistIdentity`,
    identity
  );
};

//consent-form-api
const therapistConsentForm = (data) => {
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddTherapistConsentForms`,
    data
  );
};

//payment-api
const therapistPaymentDetails = (data) => {
  debugger;
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddTherapistPaymentInfo`,
    data
  );
};

//licensure-api
const addTherapistLicensure = (data) => {
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddUpdateTherapistLicensure`,
    data
  );
};

//get-licensure
const getTherapistLicensure = (data) => {
  return fetch("post", `${API_HOST}/TherapistAPI/GetTherapistLicensure`, data);
};

//modalities-api
const addTherapistModality = (data) => {
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddUpdateTherapistModalities`,
    data
  );
};

//get-modalities
const getTherapistModality = (data) => {
  var data1 = {
    therapistId: data,
  };
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/GetTherapistModalities`,
    data1
  );
};

//scheduled-appointments
const getScheduledAppointments = (data) => {
  debugger;
  var getDetails = {
    ClientScheduleId: data.ClientScheduleId,
    TherapistId: data.TherapistId,
    OrderBy: data.OrderBy,
    Page: data.Page,
    Limit: data.Limit,
    OrderByDescending: data.OrderByDescending,
    AllRecords: data.AllRecords,
  };
  debugger;
  return fetch(
    "get",
    `${API_HOST}/TherapistScheduleAPI/GetTherapistAppointments?ClientScheduleId=` +
      getDetails.ClientScheduleId +
      `&TherapistId=` +
      getDetails.TherapistId +
      `&OrderBy=` +
      getDetails.OrderBy
  );
};

export const TherapistService = {
  addImage,
  getTherapistImage,
  therapistConsentForm,
  therapistPaymentDetails,
  addTherapistModality,
  getTherapistModality,
  addTherapistLicensure,
  getScheduledAppointments,
  getTherapistLicensure,
};
