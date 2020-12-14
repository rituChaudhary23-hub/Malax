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

export function loginUser(data, value) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    return UserService.login(data)
      .then(async (user) => {
        if (user.data.Success) {
          dispatch(
            loginUserTempPersist({ token: user["data"]["Data"]["Token"] })
          );

          sessionStorage.setItem("savedUser", user.data.Data.Token);

          dispatch(stopLoading());

          toast.success(user.data.Message);
          dispatch(loginUserSuccess(user["data"]));

          dispatch(loginUserPersist({ token: user["data"]["Token"] }));

          dispatch(loginUserPersist({ token: user["data"]["Token"] }));

          return true;
        } else {
          toast.error(user.data.Message);
          dispatch(stopLoading());
          return false;
        }
      })
      .catch((error) => {
        return false;
       
        if (error) {
          // toast.error(error["data"]["Message"]);
          // toast.error(data.Message)
          toast.error(error.Message);
        }
        dispatch(stopLoading());
      });
  };
}
