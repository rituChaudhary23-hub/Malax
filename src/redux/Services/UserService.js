import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

const register = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/SignUp`, data);
  // return fetch("post","http://64.202.184.112:6500/api/AuthAPI/SignUp",data)
};
const login = (data) => {
  return fetch("post", `${API_HOST}/AuthAPI/Login`, data);
};

//forgot-password-service
const forgotPassword=(data)=>{
  return fetch("post", `${API_HOST}/AuthAPI/ForgotPassword`, data);
}

//reset-password-service
const resetPassword=(data)=>{
  return fetch("post", `${API_HOST}/AuthAPI/ResetForgotPassword`, data);

}

//resend-email
const resendEmail=(data)=>{
  var data1 = {
    email:data
  }
  return fetch("post", `${API_HOST}/AuthAPI/SendConfirmationEmail`, data1);

}

export const UserService = {
  register,
  forgotPassword,
  resetPassword,
  login,
  resendEmail
};
