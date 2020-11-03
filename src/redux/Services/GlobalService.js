import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

//global-category
const globalCategory = (data) => {
  ;
  console.log("*******", data);
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
  console.log("*******", data);
  // var zipData = {
  //   zipCode: data,
  // };
  return fetch("post", `${API_HOST}/GlobalCodesAPI/ValidateZipCode`, data);
};

export const GlobalService = {
  globalCategory,
  validateZip,
};
