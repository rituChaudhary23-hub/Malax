export const actionTypes = {
  LOGIN_USER_SUCCESS_PERSIST: "LOGIN_USER_SUCCESS_PERSIST",
  LOGIN_USER_TEMP_PERSIST: "LOGIN_USER_TEMP_PERSIST",
  LOGOUT_USERS_PERSIST: "LOGOUT_USERS_PERSIST",
  SAVE_APPOINTMENTS:"SAVE_APPOINTMENTS"
};

/*
 * Action creators for login
 */

export function loginUserPersist(payload) {
  console.log("payload",payload)
  return {
    type: actionTypes.LOGIN_USER_SUCCESS_PERSIST,
    data: payload,
  };
}
export function dummy(payload) {
  console.log("payload",payload)
  return {
    type: actionTypes.SAVE_APPOINTMENTS,
    data: payload,
  };
}
export function loginUserTempPersist(payload) {
  return {
    type: actionTypes.LOGIN_USER_TEMP_PERSIST,
    data: payload,
  };
}

/** logout user */

export function logoutUserPersist() {
  return {
    type: actionTypes.LOGOUT_USERS_PERSIST,
    data: null,
  };
}
