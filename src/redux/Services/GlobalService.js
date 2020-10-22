import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";


//resend-email
const globalCategory=(data)=>{
  debugger
  console.log("*******", data);
  return fetch("post", `${API_HOST}/GlobalCodesAPI/GetGlobalCodeByCategoryName`, data);

}

export const GlobalService = {
    globalCategory,

};
