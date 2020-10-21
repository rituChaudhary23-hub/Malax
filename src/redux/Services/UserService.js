import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

const register = (data) => {
  return fetch("post", `${API_HOST}/SignUp`, data);
  // return fetch("post","http://64.202.184.112:6500/api/AuthAPI/SignUp",data)
};
const login = (data) => {
  return fetch("post", `${API_HOST}/Login`, data);
};

//forgot-password-service
const forgotPassword=(data)=>{
  return fetch("post", `${API_HOST}/ForgotPassword`, data);
}

//reset-password-service
const resetPassword=(data)=>{
  debugger
  console.log("*******", data);
  return fetch("post", `${API_HOST}/ResetForgotPassword`, data);

}

//resend-email
const resendEmail=(data)=>{
  debugger
  console.log("*******", data);
  return fetch("post", `${API_HOST}/SendConfirmationEmail`, data);

}

export const UserService = {
  register,
  forgotPassword,
  resetPassword,
  login,
  resendEmail
};
