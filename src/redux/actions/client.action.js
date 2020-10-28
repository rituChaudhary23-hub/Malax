import { ClientService } from "../Services/ClientService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_USER_ID: "SAVE_USER_ID",
  SAVE_USER_PHONE:"SAVE_USER_PHONE",
  GET_PHONE:"GET_PHONE"
};

export function saveUserId(data) {
  return {
    type: actionTypes.SAVE_USER_ID,
    data: data,
  };
}


export function getUserPhone(data) {
  return {
    type: actionTypes.GET_PHONE,
    data: data,
  };
}
export function saveUserPhone(data) {
  return {
    type: actionTypes.SAVE_USER_PHONE,
    data: data,
  };
}



export function saveAgreement(data) {
  return {
    type: actionTypes.SAVE_AGREEMENT,
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
        dispatch(stopLoading());
        if (data.data.Success) {
          debugger
          dispatch(saveUserPhone(data.data));
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
export function fetchUserPhone(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.getUserPhone(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(getUserPhone(data));
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


//consent agreement forms 
export function fetchConsentForm(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.ConsentFormApi(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveAgreement(data));
          toast.success(data["data"]["Message"]);

          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}
