import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

const register = (data) => {
  return fetch(
    "post",
    //  "https://malax-dev-api.azurewebsites.net/api/AddUser?code=dh/etlYuGvc6ViHICY7NWwSFKkIhd1sPIzbgw2HmYzutJD3tjWLh0Q==",

    `${API_HOST}/AddUser?code=dh/etlYuGvc6ViHICY7NWwSFKkIhd1sPIzbgw2HmYzutJD3tjWLh0Q==`,
    JSON.stringify(data)
  );
};

//login-api
const login = (data) => {
  debugger
  return fetch("get", `${API_HOST}UserLogin?code=J0aMZYXyIHfKaaPTwBm8GHSMHEF/OPqqs6/pAnEjPg2Up9Oyu9D2Jw==`,data);
};

const clientLogin = (data) => {
  return fetch(
    "post",
    `${API_HOST}/AddClient?code=EAsz9nhN1Y3mUJxZX7j8v/YjNt2IiVXLysashe/13GkZTLlHm9sIcA==`,
   data
  );
};
const therapistLogin = (data) => {
  return fetch(
    "post",
    `${API_HOST}/AddTherapist?code=lTTSKSHKNuxEx1SlcIYjaJy1Fujfq8QkgL7TN1V4UK6Ie2g020izfQ==`,
   data
  );
};
//forgot-password-service
const forgotPassword = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/ForgotPassword`, data);
};

//reset-password-service
const resetPassword = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/ResetForgotPassword`, data);
};

//resend-email
const resendEmail = (data) => {
  var data1 = {
    email: data,
  };
  return fetch("post", `${API_HOST}/AuthAPI/SendConfirmationEmail`, data1);
};

export const UserService = {
  register,
  forgotPassword,
  resetPassword,
  login,
  resendEmail,
  clientLogin,
  therapistLogin
};
