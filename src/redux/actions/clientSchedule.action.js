import { ClientScheduleService } from "../Services/ClientScheduleService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_APPOINTMENTS: "SAVE_APPOINTMENTS",
  SERVICE_DETAIL_SUCCESS:"SERVICE_DETAIL_SUCCESS"
};

export function saveAppointment(data) {
  debugger
  return {
    type: actionTypes.SAVE_APPOINTMENTS,
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
    return ClientScheduleService.getClientAppointments(data, {
      jwt: state["persist"]["c_temp_user"]["token"]  

    })

  
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          debugger
          dispatch(saveAppointment(data));
          // dispatch(serviceSuccess(data["data"]));
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


  //delete-appointment-action
  export function fetchDeleteAppointment(data) {
    return (dispatch, getState) => {
      dispatch(startLoading());
      let state = getState();
      return ClientScheduleService.deleteAppointment(data, {})
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



  //get-service-details
  
  export function fetchServiceDetails(data) {
    return (dispatch, getState) => {
      dispatch(startLoading());
      let state = getState();
      return ClientScheduleService.getServiceDetails(data, {})
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
