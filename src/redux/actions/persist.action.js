export const actionTypes = {
  LOGIN_USER_SUCCESS_PERSIST: "LOGIN_USER_SUCCESS_PERSIST",
  LOGIN_USER_TEMP_PERSIST: "LOGIN_USER_TEMP_PERSIST",
  LOGOUT_USERS_PERSIST: "LOGOUT_USERS_PERSIST",
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
