import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

const register = (data) => {
  return fetch(
    "post",
    "https://malax.azurewebsites.net/api/AddUser?code=fn4qrG7zceRw8BifC0HybIbMfxpk073NaZ4TR7JOzep3Jdy9KaK/lg==",
    JSON.stringify(data)
  );
};

//login-api
const login = (params, options) => {
  return fetch("get", `${API_HOST}/AuthAPI/Login`, {}, options, params);
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
};
