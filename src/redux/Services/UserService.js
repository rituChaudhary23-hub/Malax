import { fetch } from "./Fetch";
import { API_HOST } from "../_constants";

const login = data => {
  return fetch("post", `${API_HOST}/AuthAPI/Login`, data);
};

const SignUp = data =>{
    console.log("*******", data);
    return fetch("post", `${API_HOST}/AuthAPI/SignUp`,data)
}


export const UserService = {
  login,
  SignUp
 
};
