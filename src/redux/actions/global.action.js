import { GlobalService } from "../Services/GlobalService";
import { toast } from "../../Components/Toast/Toast";
import { startLoading, stopLoading } from "./loading.action";

export const actionTypes = {
  GLOBAL_CATEGORY_NAME: "GLOBAL_CATEGORY_NAME",
  GLOBAL_CODES: "GLOBAL_CODES",
  GLOBAL_DATA_CODES:"GLOBAL_DATA_CODES"
};

export function globalCategoryName(data) {
  return {
    type: actionTypes.GLOBAL_CATEGORY_NAME,
    data: data,
  };
}
export function globalCodes(data) {
  return {
    type: actionTypes.GLOBAL_CODES,
    data: data,
  };
}

export function globalDataCodes(data) {
  return {
    type: actionTypes.GLOBAL_DATA_CODES,
    data: data,
  };
}
//global-category
export function fetchCategoryName(data) {
  return (dispatch, getState) => {
    dispatch(startLoading());
    let state = getState();
    return GlobalService.globalCategory(data, {})
      .then(async (data) => {
        if (data.data.Success) {
          dispatch(stopLoading());

          dispatch(globalCategoryName(data.data.Data.globalCodeData));
          // toast.success(data.data.Message);
          return data;
        } else {
          // toast.error(data.data.Message);
          return false;
        }
      })
      .catch((error) => {
        if (error) {
          // toast.error(error(data.Data.Message));
          // toast.error(error["data"]["Message"]);
        }
        dispatch(stopLoading());
      });
  };
}

// //global-zip
// export function fetchValidateZip(data) {
//   return (dispatch, getState) => {
//     // dispatch(startLoading());
//     let state = getState();
//     return GlobalService.validateZip(data, {}).then(async (data) => {
//       if (data.data.status) {
//         dispatch(stopLoading());
//         dispatch(globalZipCode(data));
//         return data;
//       } else {
//         toast.error(data.data.Message);
//         return false;
//       }
//     });
//     // .catch((error) => {
//     //   if (error) {
//     //     toast.error(error(data.Data.Message));
//     //     // toast.error(error["data"]["Message"]);
//     //   }
//     //   dispatch(stopLoading());
//     // });
//   };
// }



export function fetchGlobalCodes(data) {
  return (dispatch, getState) => {
    // dispatch(startLoading());
    let state = getState();
    return GlobalService.getGlobalCodes(data, {}).then(async (data) => {
      if (data.data.status) {
        dispatch(stopLoading());
         dispatch(globalCodes(data));
        return data;
      } else {
        toast.error(data.data.message);
        return false;
      }
    });
    // .catch((error) => {
    //   if (error) {
    //     toast.error(error(data.Data.Message));
    //     // toast.error(error["data"]["Message"]);
    //   }
    //   dispatch(stopLoading());
    // });
  };
}

//get-client-info
export function fetchClientData(data) {
  return (dispatch, getState) => {
    // dispatch(startLoading());
    let state = getState();
    return GlobalService.getClientCodes(data, {}).then(async (data) => {
      if (data.data.status) {
        dispatch(stopLoading());
         dispatch(globalDataCodes(data));
        return data;
      } else {
        toast.error(data.data.message);
        return false;
      }
    });
    // .catch((error) => {
    //   if (error) {
    //     toast.error(error(data.Data.Message));
    //     // toast.error(error["data"]["Message"]);
    //   }
    //   dispatch(stopLoading());
    // });
  };
}
