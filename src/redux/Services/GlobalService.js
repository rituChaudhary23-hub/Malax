import { fetch } from "./Fetch";
import { API_HOST, API_KEY } from "../../utils/config/constants/index";

//global-category
const globalCategory = (data) => {
  var data1 = {
    name: data,
  };
  return fetch(
    "post",
    `${API_HOST}/GlobalCodesAPI/GetGlobalCodeByCategoryName`,
    data1
  );
};
//validate-zip
const validateZip = (data) => {
  var zipData = {
    zipcode: data,
  };
  return fetch(
    "post",
    `${API_HOST}/GetZipCode?code=${API_KEY}`,
    JSON.stringify(zipData)
  );
};

//globally-data
const getGlobalCodes = (data) => {
  var globalData = {
    tablename: data,
  };
  let code = JSON.stringify(globalData);
  return fetch("post", `${API_HOST}/GetCodes?code=${API_KEY}`, code);
};

//client-data
const getClientCodes = (data) => {
  var idData = {
    id:data
  }
  var token = data;
  return fetch("post", `${API_HOST}/GetClientItems?code=${API_KEY}`,idData, {
    token,
  });
};

export const GlobalService = {
  globalCategory,
  validateZip,
  getGlobalCodes,
  getClientCodes,
};
