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
    "get",
    `${API_HOST}/TherapistAPI/GetTherapistIdentity?TherapistId=` +
      identity.therapistId
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
  var licensure = {
    TherapistLicensureId: data.therapistId,
    TherapistId: data.therapistLicensureId,
  };
  return fetch(
    "get",
    `${API_HOST}/TherapistAPI/GetTherapistLicensure?TherapistLicensureId=` +
      licensure.TherapistLicensureId +
      `&TherapistId=` +
      licensure.TherapistId
  );
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
  var modalityData = {
    TherapistModalityId: data,
    TherapistId:data
  };
  return fetch(
    "get",
    `${API_HOST}/TherapistAPI/GetTherapistModalities?TherapistId=`+
    modalityData.TherapistId + `&TherapistModalityId=`+modalityData.TherapistModalityId
  );
};

//scheduled-appointments
const getScheduledAppointments = (data) => {
  var getDetails = {
    ClientScheduleId: data.ClientScheduleId,
    TherapistId: data.TherapistId,
    OrderBy: data.OrderBy,
    Page: data.Page,
    Limit: data.Limit,
    OrderByDescending: data.OrderByDescending,
    AllRecords: data.AllRecords,
  };
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

//scheduled-service-details
const getScheduledServices = (data) => {
  var getTime = {
    ClientScheduleId: data.ClientScheduleId,
    TherapistId: data.TherapistId,
    Status: data.Status,
    From: data.From,
    ActionBy: "",
  };
  return fetch(
    "put",
    `${API_HOST}/TherapistScheduleAPI/ScheduledServiceDetail?ClientScheduleId=` +
      getTime.ClientScheduleId
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
  getScheduledServices,
};
