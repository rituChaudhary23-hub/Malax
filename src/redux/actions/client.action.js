import { ClientService } from "../Services/ClientService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SAVE_USER_ID: "SAVE_USER_ID",
  SAVE_USER_PHONE: "SAVE_USER_PHONE",
  GET_PHONE: "GET_PHONE",
  SAVE_INFO: "SAVE_INFO",
  SAVE_USER_HISTORY: "SAVE_USER_HISTORY",
  SAVE_PERSONAL_INFO: "SAVE_PERSONAL_INFO",
  SAVE_MEDICAL_INFO: "SAVE_MEDICAL_INFO",
  SAVE_CONSENT: "SAVE_CONSENT",
  SAVE_LOCATION: "SAVE_LOCATION",
  SAVE_USER_IMAGE: "SAVE_USER_IMAGE",
  SAVE_CONDITION_DATA:"SAVE_CONDITION_DATA",
  SAVE_MASSAGE_DATA:"SAVE_MASSAGE_DATA"
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

export function saveUserImage(data) {
  return {
    type: actionTypes.SAVE_USER_IMAGE,
    data: data,
  };
}
export function saveMedicalInfo(data) {
  return {
    type: actionTypes.SAVE_MEDICAL_INFO,
    data: data,
  };
}

export function saveLocation(data) {
  return {
    type: actionTypes.SAVE_LOCATION,
    data: data,
  };
}

export function saveConsent(data) {
  return {
    type: actionTypes.SAVE_CONSENT,
    data: data,
  };
}
export function saveInfo(data) {
  return {
    type: actionTypes.SAVE_INFO,
    data: data,
  };
}


export function saveConditionData(data) {
  return {
    type: actionTypes.SAVE_CONDITION_DATA,
    data: data,
  };
}

export function saveMassageData(data) {
  return {
    type: actionTypes.SAVE_MASSAGE_DATA,
    data: data,
  };
}

export function saveUserHistory(data) {
  return {
    type: actionTypes.SAVE_USER_HISTORY,
    data: data,
  };
}


//get email id
export function fetchUserEmail(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.getUserEmail(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
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
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.updateUserEmail(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.status) {
          // dispatch(saveUserPhone(data.data));
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
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getUserPhone(data, {
      
      jwt: state["persist"]["c_temp_user"]["token"],
    }).then(async (data) => {
      dispatch(stopLoading());
      if (data.data.Success) {
        dispatch(getUserPhone(data));
        // toast.success(data["data"]["Message"]);

        return true;
      } else {
        toast.error(data.data.Message);
        return false;
      }
    });
    // .catch((error) => {
    //   if (error) {
    //     toast.error(error["data"]["data"]["Message"]);
    //   }
    //   dispatch(stopLoading());
    // });
  };
}

//consent agreement forms
export function fetchConsentForm(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.ConsentFormApi(data, {
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

//get-consent-form
export function getConsentForm(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getConsentAgreement(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveConsent(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
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

//add personal info
export function fetchUserInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.personalInfoApi(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
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
    return ClientService.getUserInfo(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(savePersonalInfo(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
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
//add-medical-history
export function fetchUserHistory(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.historyApi(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
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

//get-medical-history
export function getUserHistory(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getMedicalInfo(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveMedicalInfo(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
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
//image-upload
export function fetchIdentityImage(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.addImage(data, {})
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveUserImage(data));
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
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.medicalConditionApi(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    }).then(async (data) => {
      dispatch(stopLoading());
      if (data.data.Success) {
        toast.success(data["data"]["Message"]);

        return true;
      } else {
        toast.error(data.data.Message);
        return false;
      }
    });
  };
}


//massage-prefernce
export function fetchUserMassagePrefernce(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.addMassageApi(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    }).then(async (data) => {
      dispatch(stopLoading());
      if (data.data.Success) {
        toast.success(data["data"]["Message"]);

        return true;
      } else {
        toast.error(data.data.Message);
        return false;
      }
    });
  };
}
//get-medical-conditions'
export function getConditionInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getMedicalCondition(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
           dispatch(saveConditionData(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
          return false;
        }
      })
      // .catch((error) => {
      //   if (error) {
      //     toast.error(error["data"]["Message"]);
      //   }
      //   dispatch(stopLoading());
      // });
  };
}

//get-massage-preferences

export function getMassageInfo(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getMassageSelected(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
        dispatch(saveMassageData(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
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

//client-loc
export function fetchClientLoc(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return ClientService.addClientLoc(data, {
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
          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

//get-client-loc
export function getLocation(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return ClientService.getClientLoc(data, {
      jwt: state["persist"]["c_temp_user"]["token"],
    })
      .then(async (data) => {
        dispatch(stopLoading());
        if (data.data.Success) {
          dispatch(saveLocation(data));
          // toast.success(data["data"]["Message"]);

          return true;
        } else {
          // toast.error(data.data.Message);
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

  if (data > 0) {
    return data;
  } else {
    return 0;
  }
}
