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

//consent-form-api
const therapistConsentForm = (data) => {
  debugger
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI/AddTherapistConsentForms`,
    data
  );
};

export const TherapistService = {
  addImage,
  therapistConsentForm,
};
