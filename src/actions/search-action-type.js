import {createAction} from "redux-actions";

export const SEARCH_ACTION = "SEARCH_ACTION";
export const searchAction = createAction(SEARCH_ACTION);

export const SEARCH_ACTION_REQUEST = "SEARCH_ACTION_REQUEST";
export const searchActionRequest = createAction(SEARCH_ACTION_REQUEST);

export const SEARCH_ACTION_SUCCESS = "SEARCH_ACTION_SUCCESS";
export const searchActionSuccess = createAction(SEARCH_ACTION_SUCCESS);

export const SEARCH_ACTION_FAILURE = "SEARCH_ACTION_FAILURE";
export const searchActionFailure = createAction(SEARCH_ACTION_FAILURE);
