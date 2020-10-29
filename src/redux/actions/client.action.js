import { ClientService } from "../Services/ClientService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_USER_ID: "SAVE_USER_ID",
  SAVE_USER_PHONE: "SAVE_USER_PHONE",
  GET_PHONE: "GET_PHONE",
  SAVE_INFO: "SAVE_INFO",
  SAVE_USER_HISTORY: "SAVE_USER_HISTORY",
  SAVE_PERSONAL_INFO:"SAVE_PERSONAL_INFO"
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

export function savePersonalInfo(data) {
  return {
    type: actionTypes.SAVE_PERSONAL_INFO,
    data: data,
  };
}

export function saveInfo(data) {
  return {
    type: actionTypes.SAVE_INFO,
    data: data,
  };
}

export function saveUserHistory(data) {
  return {
    type: actionTypes.SAVE_USER_HISTORY,
    data: data,
  };
}

export function saveUserCondition(data) {
  return {
    type: actionTypes.SAVE_USER_CONDITION,
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
          debugger;
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
        debugger;
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

//add personal info
export function fetchUserInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.personalInfoApi(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveInfo(data));
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


//get-personal info

export function getUserInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getUserInfo(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(savePersonalInfo(data));
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
//medical-history
export function fetchUserHistory(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.historyApi(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveUserHistory(data));
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


//medical-conditions

export function fetchUserMedicalCondition(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.medicalConditionApi(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveUserCondition(data));
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


//tab change
export function tabIndex(data) {
  debugger;

  if (data > 0) {
    return data;
  } else {
    return 0;
  }
}
