import { UserService } from "../Services/UserService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";
import { push } from "react-router-redux";
import { history } from "react-router";


export const actionTypes = {
  SUCCESS_REGISTER: "SUCCESS_REGISTER",
  FETCH_FORGOT_PASSWORD: "FETCH_FORGOT_PASSWORD",
  FETCH_RESET_PASSWORD: "FETCH_RESET_PASSWORD",
};

export function saveDetails(data) {
  return {
    type: actionTypes.SUCCESS_REGISTER,
    data: data,
  };
}

export function userPassword(data) {
  return {
    type: actionTypes.FETCH_FORGOT_PASSWORD,
    data: data,
  };
}

export function userResetPassword(data) {
  return {
    type: actionTypes.FETCH_RESET_PASSWORD,
    data: data,
  };
}

//register
export function userDetail(data, location) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return UserService.register(data, {
      jwt: state["persist"]["c_temp_user"]["token"]
    }).then(async (data) => {
      dispatch(stopLoading());
      if (data.data.Success) {
        dispatch(saveDetails(data));
        toast.success(data["data"]["message"]);

        return true;
      } else {
        toast.error(data.data.Message);
        return false;
      }
    });

  };
}

//forgot-password
export function userForgotPassword(data, history) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return UserService.forgotPassword(data, {})
      .then(async (data) => {
        if (data.data.Success) {
          dispatch(stopLoading());
          // history.push("/reset-password");
          dispatch(userPassword(data));
          toast.success(data.data.Message);
          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error(data.Data.Message));
        }
        dispatch(stopLoading());
      });
  };
}

//reset-password

export function fetchResetPassword(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return UserService.resetPassword(data, {})
      .then(async (data) => {
        if (data.data.Success) {

          dispatch(stopLoading());

          dispatch(userResetPassword(data));
          toast.success(data.data.Message);
          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error(data.Data.Message));
          // toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//resend-email
export function fetchResendEmail(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return UserService.resendEmail(data, {})
      .then(async (data) => {
        if (data.data.Success) {
          dispatch(stopLoading());
          toast.success(data.data.Message);
          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error(data.Data.Message));
        }
        dispatch(stopLoading());
      });
  };
}
