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
  var identity={
    therapistId: data
  }
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
  debugger
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI​/AddTherapistPaymentInfo`,
    data
  );
};



export const TherapistService = {
  addImage,
  getTherapistImage,
  therapistConsentForm,
  therapistPaymentDetails,
};
