import { TherapistService } from "../Services/TherapistService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_THERAPIST_IMAGE: "SAVE_THERAPIST_IMAGE",
};

export function saveTherapistImage(data) {
  return {
    type: actionTypes.SAVE_THERAPIST_IMAGE,
    data: data,
  };
}

//image-upload
export function fetchTherapistIdentityImage(data) {
  debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return TherapistService.addImage(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          debugger
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


//consent-form-action

export function fetchTherapistConsentForm(data) {
debugger;
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return TherapistService.therapistConsentForm(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
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