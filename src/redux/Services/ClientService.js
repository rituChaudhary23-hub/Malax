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
  console.log("user phone------------", data);
  debugger;
  return fetch("post", `${API_HOST}/AuthAPI/GetUserPhoneNumber`, data);
};


export const ClientService = {
  getUserEmail,
  updateUserEmail,
  getUserPhone
};
