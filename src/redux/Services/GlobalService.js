import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

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
    `${API_HOST}/GetZipCode?code=eKxInUHXYWvgpDsNgc7Bqe0v3aq65aZFSZqWn2U7Ck0JevDniCUD5Q==`,
    JSON.stringify(zipData)
  );
};

//globally-data
const getGlobalCodes = (data) => {
  var globalData = {
    tablename: data
  }
  let code =  JSON.stringify(globalData)
  return fetch(
    "post",
    `${API_HOST}/GetCodes?code=aF2XYacnPXqRddqPkLKyBIvPrMU2IfVQ2EMWU/KV2WzqJk8rCaQSqg==`,
   code
  );
};

export const GlobalService = {
  globalCategory,
  validateZip,getGlobalCodes
};
