import { createAction } from "redux-actions";

export const FETCH_ROCKET = "FETCH_ROCKET";
export const fetchRocket = createAction(FETCH_ROCKET);

export const FETCH_ROCKET_REQUEST = "FETCH_ROCKET_REQUEST";
export const fetchRocketRequest = createAction(FETCH_ROCKET_REQUEST);

export const FETCH_ROCKET_SUCCESS = "FETCH_ROCKET_SUCCESS";
export const fetchRocketSuccess = createAction(FETCH_ROCKET_SUCCESS);

export const FETCH_ROCKET_FAILURE = "FETCH_ROCKET_FAILURE";
export const fetchRocketFailure = createAction(FETCH_ROCKET_FAILURE);