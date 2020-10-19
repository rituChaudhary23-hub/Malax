import { UserService } from "../Services/UserService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

import {
  loginUserPersist,
  logoutUserPersist,
  loginUserTempPersist,
} from "./persist.action";
/** seting action types */
export const actionTypes = {
  LOGIN_USER_REQUEST: "LOGIN_USER_REQUEST",
  LOGIN_USER_SUCCESS: "LOGIN_USER_SUCCESS",
  LOGIN_USER_ERROR: "LOGIN_USER_ERROR",
  LOGIN_USER_RESET: "LOGIN_USER_RESET",

};

/*
 * Action creators for login
 */

export function loginUserRequest() {
  return {
    type: actionTypes.LOGIN_USER_REQUEST,
  };
}

export function loginUserError(error) {
  return {
    type: actionTypes.LOGIN_USER_ERROR,
    error,
  };
}

export function loginUserSuccess(user) {
  console.log("USER", user);
  return {
    type: actionTypes.LOGIN_USER_SUCCESS,
    user,
  };
}


/** logout user */
export function logoutUser() {
  return (dispatch) => {
    // localStorage.clear();
    return dispatch(logoutUserPersist());
  };
}

export function loginUser(data, history) {
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());
    return UserService.login(data)
      .then(async (user) => {
        console.log("Ritu", user);
        dispatch(
          loginUserTempPersist({ token: user["data"]["data"]["access_token"] })
        );
     
          sessionStorage.setItem("savedUser", JSON.stringify(data));
        
        dispatch(stopLoading());
        console.log("DDD", user["data"]);
        toast.success(user["data"]["message"]);
        dispatch(loginUserSuccess(user["data"]["data"]));
        
          // history.push("client-profile");    
      })
      .catch((error) => {
        console.log("ERROR", error);
        if (error) {
          toast.error(error["data"]["message"]);
        }
        dispatch(stopLoading());
      });
  };
}
