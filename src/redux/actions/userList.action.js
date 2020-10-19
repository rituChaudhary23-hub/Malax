import { UserService } from "../Services/UserService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  SUCCESS_REGISTER: "SUCCESS_REGISTER",
  
};


export function userKycStatus(data) {
  return {
    type: actionTypes.CHANGE_KYC_STATUS,
    data: data,
  };
}



export function userDetail(data) {
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());

    let state = getState();
    return UserService.register(data, {
    })
      .then(async (data) => {
        console.log("Userlist", data);
        dispatch(stopLoading());
        // history.push('/login');
        // dispatch(userDetailId(data.data.data));
        console.log("susces",data.data.Message)
        toast.success(data["data"]["message"]);
        


      })
      .catch((error) => {
        console.log("ERROR", data.Message);
        if (error) {
          console.log("ERROR", data.Message);

          toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}


