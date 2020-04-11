import {createAction} from "redux-actions";

export const LOGIN_USER = "LOGIN_USER";
export const loginUser = createAction(LOGIN_USER);

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const loginUserRequest = createAction(LOGIN_USER_REQUEST);

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS);

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const loginUserFailure = createAction(LOGIN_USER_FAILURE);

export const SIGN_UP_USER = "SIGN_UP_USER";
export const userSignUp = createAction(SIGN_UP_USER);

export const SIGN_UP_USER_REQUEST = "SIGN_UP_USER_REQUEST";
export const userSignUpRequest = createAction(SIGN_UP_USER_REQUEST);

export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const userSignUpSuccess = createAction(SIGN_UP_USER_SUCCESS);

export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";
export const userSignUpFailure = createAction(SIGN_UP_USER_FAILURE);

export const FORGET_PASSWORD = "FORGET_PASSWORD";
export const forgetPassword = createAction(FORGET_PASSWORD);

export const FORGET_PASSWORD_REQUEST = "FORGET_PASSWORD_REQUEST";
export const forgetPasswordRequest = createAction(FORGET_PASSWORD_REQUEST);

export const FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS";
export const forgetPasswordSuccess = createAction(FORGET_PASSWORD_SUCCESS);

export const FORGET_PASSWORD_FAILURE = "FORGET_PASSWORD_FAILURE";
export const forgetPasswordFailure = createAction(FORGET_PASSWORD_FAILURE);

export const LOGOUT_ACTION = "LOGOUT_ACTION";
export const logoutAction = createAction(LOGOUT_ACTION);

// export const LOGOUT_ACTION_REQUEST = "LOGOUT_ACTION_REQUEST";
// export const logoutActionRequest = createAction(LOGOUT_ACTION_REQUEST);

export const LOGOUT_ACTION_SUCCESS = "LOGOUT_ACTION_SUCCESS";
export const logoutActionSuccess = createAction(LOGOUT_ACTION_SUCCESS);

// export const LOGOUT_ACTION_FAILURE = "LOGOUT_ACTION_FAILURE";
// export const logoutActionFailure = createAction(FORGET_PASSWORD_FAILURE);
