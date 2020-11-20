import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

//resend-email
const getUserEmail = (data) => {
  var data1 = {
    userId: data,
  };
  return fetch("post", `${API_HOST}/AuthAPI/GetUserEmail`, data1);
};

const updateUserEmail = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/UpdateUserEmail`, data);
};

//get user phone number
const getUserPhone = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/GetUserPhoneNumber`, data);
};

//consent form
const ConsentFormApi = (data) => {
  return fetch("post", `${API_HOST}/ClientAPI/AddClientConsentForms`, data);
};

//personal info

const personalInfoApi = (data) => {
  return fetch("post", `${API_HOST}/ClientAPI/AddClientPersonalInfo`, data);
};

//medical-history api
const historyApi = (data) => {
  return fetch("post", `${API_HOST}/ClientAPI/AddClientMedicalHistory`, data);
};

//medical-conditions-api
const medicalConditionApi = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientAPI/AddClientMedicalConditions`,
    data
  );
};

//add-massage-preferences

const addMassageApi = (data) => {
  return fetch(
    "post",
    `${API_HOST}/ClientAPI/AddClientMassagePreferences`,
    data
  );
};

//get-medical-condition
const getMedicalCondition = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "post",
    `${API_HOST}/ClientAPI/GetClientMedicalConditions`,
    data1
  );
};


//get-massage-pref
const getMassageSelected = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "post",
    `${API_HOST}/ClientAPI/GetClientMassagePreferences`,
    data1
  );
};

//get info
const getUserInfo = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientPersonalInfo`, data1);
};

//get medical history
const getMedicalInfo = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientMedicalHistory`, data1);
};

//get consent form
const getConsentAgreement = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientConsentForms`, data1);
};

//client-loc
const addClientLoc = (data) => {
  return fetch("post", `${API_HOST}/ClientAPI/AddUpdateClientLocations`, data);
};
//get-loc
const getClientLoc = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientLocations`, data1);
};

//upload-image
const addImage = (data) => {
  console.log("user info------------", data);
  return fetch("post", `${API_HOST}/ClientAPI/AddClientIdentityImage`, data);
};


//get-uploaded-image
const getClientImage = (data) => {
  console.log("user info------------", data);
  return fetch("post", `${API_HOST}/ClientAPI/GetClientIdentityImage`, data);
};

export const ClientService = {
  getUserEmail,
  getMedicalInfo,
  addImage,
  getConsentAgreement,
  getClientLoc,
  addClientLoc,
  getClientImage, 
  getUserInfo,
  updateUserEmail,
  getUserPhone,
  ConsentFormApi,
  medicalConditionApi,
  historyApi,
  getMedicalCondition,
  addMassageApi,
  getMassageSelected, 
  personalInfoApi,
};
