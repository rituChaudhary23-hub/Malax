import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

const register = (data) => {
  debugger
  console.log("*******", data);
  return fetch("post", `${API_HOST}/SignUp`, data);
  // return fetch("post","http://64.202.184.112:6500/api/AuthAPI/SignUp",data)
};
const login = (data) => {
  debugger
  console.log("*******", data);
  return fetch("post", `${API_HOST}/Login`, data);
};


export const UserService = {
  register,
  login
};
