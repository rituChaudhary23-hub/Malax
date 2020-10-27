import { ClientService } from "../Services/ClientService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_USER_ID: "SAVE_USER_ID",
};

export function saveUserId(data) {
  return {
    type: actionTypes.SAVE_USER_ID,
    data: data,
  };
}

//get email id
export function fetchUserEmail(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.getUserEmail(data, {})
      .then(async (data) => {
        console.log("getUserEmail", data);
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveUserId(data));
          toast.success(data["data"]["message"]);

          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error["data"]["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}


//update email
export function fetchUpdateEmail(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.updateUserEmail(data, {})
      .then(async (data) => {
        console.log("getUserEmail", data);
        dispatch(stopLoading());
        console.log("^^^^^^^^^^^^^^^^",data.data)
        if (data.data.Success) {
          toast.success(data["data"]["Message"]);

          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error["data"]["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}


//get user phone

//update email
export function fetchUserPhone(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.getUserPhone(data, {})
      .then(async (data) => {
        console.log("getUserPhone", data);
        dispatch(stopLoading());
        console.log("^^^^^^^^^^^^^^^^",data.data)
        if (data.data.Success) {
          toast.success(data["data"]["Message"]);

          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error["data"]["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}
