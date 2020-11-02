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
  // var data1={
    
  //     userId: data
    
  // }
  return fetch("post", `${API_HOST}/AuthAPI/GetUserPhoneNumber`, data);
};

//consent form
const ConsentFormApi = (data) => {
  console.log("user consent------------", data);
  debugger;
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
  console.log("user info------------", data);
  debugger;
  return fetch(
    "post",
    `${API_HOST}/ClientAPI/AddClientMedicalConditions`,
    data
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
  console.log("user info------------", data);
  debugger;
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientConsentForms`, data1);
};

//client-loc
const addClientLoc = (data) => {
  console.log("user info------------", data);
  debugger;
  return fetch("post", `${API_HOST}/ClientAPI/AddUpdateClientLocations`, data);
};
//get-loc
const getClientLoc = (data) => {
  console.log("user info------------", data);
  debugger;
  var data1 = {
    clientId: data,
  };
  return fetch("post", `${API_HOST}/ClientAPI/GetClientLocations`, data1);
};


//upload-image

const addImage = (data) => {
  console.log("user info------------", data);
  debugger;
  return fetch("post", `${API_HOST}/ClientAPI/AddClientIdentityImage`, data);
};
export const ClientService = {
  getUserEmail,
  getMedicalInfo,addImage,
  getConsentAgreement,
  getClientLoc,
  addClientLoc,
  getUserInfo,
  updateUserEmail,
  getUserPhone,
  ConsentFormApi,
  medicalConditionApi,
  historyApi,
  personalInfoApi,
};
