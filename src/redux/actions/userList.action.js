import { UserService } from "../Services/UserService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";


export const actionTypes = {
  SUCCESS_REGISTER: "SUCCESS_REGISTER",
  FETCH_FORGOT_PASSWORD:"FETCH_FORGOT_PASSWORD",
  FETCH_RESET_PASSWORD:"FETCH_RESET_PASSWORD",
  
};


export function saveDetails(data) {
  return {
    type: actionTypes.SUCCESS_REGISTER,
    data: data,
  };
}

export function userPassword(data) {
  return {
    type: actionTypes.FETCH_FORGOT_PASSWORD,
    data: data,
  };
}


export function userResetPassword(data) {
  return {
    type: actionTypes.FETCH_RESET_PASSWORD,
    data: data,
  };
}

//register
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
        dispatch(saveDetails(data));
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




//forgot-password
export function userForgotPassword(data,history) {
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return UserService.forgotPassword(data, {
    })
      .then(async (data) => {
        if(data.data.Success){

        console.log("forgot Password", data);
        dispatch(stopLoading());
        // history.push("/reset-password");
        dispatch(userPassword(data));
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

//reset-password

export function fetchResetPassword(data) {
  debugger
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return UserService.resetPassword(data, {
    })
      .then(async (data) => {
        if(data.data.Success){

        console.log("Reset Password", data);
        // sessionStorage.getItem("savedUser", data.data.Data.Token);

        dispatch(stopLoading());
        // history.push('/login');

         dispatch(userResetPassword(data));
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

//resend-email
