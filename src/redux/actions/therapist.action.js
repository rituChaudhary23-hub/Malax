import { TherapistService } from "../Services/TherapistService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_THERAPIST_IMAGE: "SAVE_THERAPIST_IMAGE",
  SAVE_PAYMENT_INFO: "SAVE_PAYMENT_INFO",
  SAVE_IDENTITY_IMAGE:"SAVE_IDENTITY_IMAGE"
};

export function saveTherapistImage(data) {
  return {
    type: actionTypes.SAVE_THERAPIST_IMAGE,
    data: data,
  };
}

export function saveIdentityImage(data) {
  return {
    type: actionTypes.SAVE_IDENTITY_IMAGE,
    data: data,
  };
}
export function saveTherapistPayInfo(data) {
  return {
    type: actionTypes.SAVE_PAYMENT_INFO,
    data: data,
  };
}

//image-upload
export function fetchTherapistIdentityImage(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return TherapistService.addImage(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveTherapistImage(data));
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

//get-identity-iamge
export function getIdentityImage(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return TherapistService.getTherapistImage(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveIdentityImage(data));
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
//consent-form-action
export function fetchTherapistConsentForm(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return TherapistService.therapistConsentForm(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
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
          toast.error(error["data"]["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//theparist-payment
export function fetchTherapistPaymentInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    debugger
    let state = getState();
    return TherapistService.therapistPaymentDetails(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          debugger
          dispatch(saveTherapistPayInfo(data));
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
