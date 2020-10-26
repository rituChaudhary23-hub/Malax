import { GlobalService } from "../Services/GlobalService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";


export const actionTypes = {
  GLOBAL_CATEGORY_NAME: "GLOBAL_CATEGORY_NAME",
    GLOBAL_ZIP_CODE:"GLOBAL_ZIP_CODE"
};


export function globalCategoryName(data) {
  return {
    type: actionTypes.GLOBAL_CATEGORY_NAME,
    data: data,
  };
}
export function globalZipCode(data) {
  return {
    type: actionTypes.GLOBAL_ZIP_CODE,
    data: data,
  };
}


//global-category
export function fetchCategoryName(data) {
  
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return GlobalService.globalCategory(data, {
    })
      .then(async (data) => {
        if(data.data.Success){
        dispatch(stopLoading());
        
        dispatch(globalCategoryName(data.data.Data.globalCodeData));
        toast.success(data.data.Message);
        return true;
        }
        else {
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



//global-zip
export function fetchValidateZip(data) {
  
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return GlobalService.validateZip(data, {
    })
      .then(async (data) => {
        if(data.data.Success){
        console.log("zip", data);
        dispatch(stopLoading());
        dispatch(globalZipCode(data))
        console.log("susces",data.data.Message)
        toast.success(data.data.Message);
        return true;
        }
        else {
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
