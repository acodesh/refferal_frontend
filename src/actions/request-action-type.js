import {createAction} from "redux-actions";

export const ADD_REQUEST = "ADD_REQUEST";
export const addRequest = createAction(ADD_REQUEST);

export const ADD_REQUEST_REQUEST = "ADD_REQUEST_REQUEST";
export const addRequestRequest = createAction(ADD_REQUEST_REQUEST);

export const ADD_REQUEST_SUCCESS = "ADD_REQUEST_SUCCESS";
export const addRequestSuccess = createAction(ADD_REQUEST_SUCCESS);

export const ADD_REQUEST_FAILURE = "ADD_REQUEST_FAILURE";
export const addRequestFailure = createAction(ADD_REQUEST_FAILURE);

export const ADD_REQUEST_DATA = "ADD_REQUEST_DATA";
export const addRequestData = createAction(ADD_REQUEST_DATA);