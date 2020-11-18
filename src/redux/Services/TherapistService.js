import { fetch } from "./Fetch";
import { API_HOST } from "../../utils/config/constants/index";

//upload-image
const addImage = (data) => {
  console.log("image info------------", data);
  debugger;
  return fetch(
    "post",
    `${API_HOST}/TherapistAPI​/AddUpdateTherapistIdentity`,
    data
  );
};

export const TherapistService = {
  addImage,
};
