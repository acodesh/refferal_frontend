import { createAction } from "redux-actions";

export const LOGIN_USER = "LOGIN_USER";
export const loginUser = createAction(LOGIN_USER);

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const loginUserRequest = createAction(LOGIN_USER_REQUEST);

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = createAction(LOGIN_USER_SUCCESS);

export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const loginUserFailure = createAction(LOGIN_USER_FAILURE);