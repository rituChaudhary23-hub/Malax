import { fetch } from "./Fetch";
import { API_HOST, API_KEY } from "../../utils/config/constants/index";

//resend-email
const getUserEmail = (data) => {
  var data1 = {
    userId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/AuthAPI/GetUserEmail?UserId=` + data1.userId
  );
};

//update-email-api
const updateUserEmail = (data) => {
  debugger;
  return fetch("post", `${API_HOST}/UpdateClientEmail?code=${API_KEY}`, data);
};

//get user phone number
const getUserPhone = (data) => {
  return fetch(
    "get",
    `${API_HOST}/AuthAPI/GetUserPhoneNumber?UserId=` + data.UserId
  );
};

//consent form
const ConsentFormApi = (data) => {
  return fetch("post", `${API_HOST}/ClientAPI/AddClientConsentForms`, data);
};

//personal info

const personalInfoApi = (data,token) => {
  var token = data.id;
  return fetch("post", `${API_HOST}/UpdateClientPersonalInfo?code=${API_KEY}`, data,{
    token,
  });
};

//medical-history api
const medicalHistoryApi = (data) => {
  var token = data.id;
  return fetch("post", `${API_HOST}/UpdateClientMedicalHistory?code=${API_KEY}`, data,{
    token,
  });
};


//medical-conditions-api
const medicalConditionApi = (data) => {
  var token = data.id;
  return fetch(
    "post",
    `${API_HOST}/UpdateClientMedicalConditions?code=${API_KEY}`, data,{
      token,
    });
  };
  

//add-massage-preferences

const addMassageApi = (data) => {
  var token = data.id;
  return fetch(
    "post",
    `${API_HOST}/UpdateClientMassagePrefernces?code=${API_KEY}`, data,{
      token,
    });
  };

//get-medical-condition
const getMedicalCondition = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientMedicalConditions?ClientId=` +
      data1.clientId,
    data1
  );
};

//get-massage-pref
const getMassageSelected = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientMassagePreferences?ClientId=` +
      data1.clientId
  );
};

//get info
const getUserInfo = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientPersonalInfo?ClientId=` + data1.clientId
  );
};

//get medical history
const getMedicalInfo = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientMedicalHistory?ClientId=` + data1.clientId
  );
};

//get consent form
const getConsentAgreement = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientConsentForms?ClientId=` + data1.clientId
  );
};

//client-loc
const addClientLoc = (data) => {
  var token = data.id;
  return fetch("post", `${API_HOST}/UpdateClientLcations?code=${API_KEY}`, data,{
    token,
  });
};;

//get-loc
const getClientLoc = (data) => {
  var data1 = {
    clientId: data,
  };
  return fetch(
    "get",
    `${API_HOST}/ClientAPI/GetClientLocations?ClientId=` + data1.clientId
  );
};

//upload-image
const addImage = (data) => {
  var token = data.id;
  debugger
  return fetch("post", `${API_HOST}/UploadClientImage?code=${API_KEY}`, data,{
    token,
  });
};;

//get-uploaded-image
const getClientImage = (data) => {
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
  medicalHistoryApi,
  getMedicalCondition,
  addMassageApi,
  getMassageSelected,
  personalInfoApi,
};
