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
const login = (token) => {
  var data1 = {
    id: token
  };
  var res = JSON.stringify(data1);
  
    return fetch
      ("post",`${API_HOST}/UserLogin?code=J0aMZYXyIHfKaaPTwBm8GHSMHEF/OPqqs6/pAnEjPg2Up9Oyu9D2Jw==`,res, { token })
     
  }



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
};
