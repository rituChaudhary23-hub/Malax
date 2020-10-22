import { GlobalService } from "../Services/GlobalService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";


export const actionTypes = {
    GLOBAL_CATEGORY_NAME: "GLOBAL_CATEGORY_NAME",
};


export function globalCategoryName(data) {
  return {
    type: actionTypes.GLOBAL_CATEGORY_NAME,
    data: data,
  };
}




//forgot-password
export function fetchCategoryName(data) {
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return GlobalService.globalCategory(data, {
    })
      .then(async (data) => {
        if(data.data.Success){
        console.log("category", data);
        dispatch(stopLoading());
        dispatch(globalCategoryName(data));
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
        console.log("ERROR", data.Message);
        if (error) {
          console.log("ERROR", data.Message);
          toast.error(error(data.Data.Message));
          // toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}
