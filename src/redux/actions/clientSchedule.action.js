import { ClientScheduleService } from "../Services/ClientScheduleService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";
import { dummy } from "./persist.action";

export const actionTypes = {
  SAVE_APPOINTMENTS: "SAVE_APPOINTMENTS",
  SERVICE_DETAIL_SUCCESS: "SERVICE_DETAIL_SUCCESS",
  SAVE_SERVICE_DETAIL: "SAVE_SERVICE_DETAIL",
  SAVE_SERVICE_STATUS:"SAVE_SERVICE_STATUS"
};

export function saveAppointment(data) {
  return {
    type: actionTypes.SAVE_APPOINTMENTS,
    data: data,
  };
}

export function saveServiceDetail(data) {
  return {
    type: actionTypes.SAVE_SERVICE_DETAIL,
    data: data,
  };
}


export function saveServiceStatus(data) {
  return {
    type: actionTypes.SAVE_SERVICE_STATUS,
    data: data,
  };
}

export function serviceSuccess(data) {
  console.log("USER", data);
  return {
    type: actionTypes.SERVICE_DETAIL_SUCCESS,
    data,
  };
}

//request-service
export function fetchClientAppointment(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.addAppointment(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
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
          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//get-scheduled-services

export function fetchScheduledAppointment(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.getClientAppointments(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })

      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveAppointment(data));
          // dispatch(serviceSuccess(data["data"]));
          dispatch(dummy({ token: data["data"] }));
          toast.success(data["data"]["Message"]);

          return true;
        } else {
          toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          //          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//add-payment-info
export function fetchPaymentDetails(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.addPaymentInfo(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
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
          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//delete-appointment-action
export function fetchDeleteAppointment(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.deleteAppointment(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
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
          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//get-service-details
export function fetchServiceDetails(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.getServiceDetails(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveServiceDetail(data.data));
      
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


//get-service-status



export function fetchServiceStatus(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.getServiceStatus(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveServiceStatus(data.data));
      
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

