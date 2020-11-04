import { ClientScheduleService } from "../Services/ClientScheduleService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_APPOINTMENTS: "SAVE_APPOINTMENTS",
};

export function saveAppointment(data) {
  return {
    type: actionTypes.SAVE_APPOINTMENTS,
    data: data,
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
        //   dispatch(saveAppointment(data));
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
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientScheduleService.getClientAppointments(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveAppointment(data));
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



//add-payment-info
export function fetchPaymentDetails(data) {
    return (dispatch, getState) => {
      dispatch(startLoading());
      let state = getState();
      return ClientScheduleService.addPaymentInfo(data, {})
        .then(async (data) => {
          dispatch(stopLoading());
          if (data.data.Success) {
          //   dispatch(saveAppointment(data));
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