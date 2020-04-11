import {createAction} from "redux-actions";

export const FETCH_USER_DASHBOARD = "FETCH_USER_DASHBOARD";
export const fetchUserDashboard = createAction(FETCH_USER_DASHBOARD);

export const FETCH_USER_DASHBOARD_REQUEST = "FETCH_USER_DASHBOARD_REQUEST";
export const fetchUserDashboardRequest = createAction(
  FETCH_USER_DASHBOARD_REQUEST
);

export const FETCH_USER_DASHBOARD_SUCCESS = "FETCH_USER_DASHBOARD_SUCCESS";
export const fetchUserDashboardSuccess = createAction(
  FETCH_USER_DASHBOARD_SUCCESS
);

export const FETCH_USER_DASHBOARD_FAILURE = "FETCH_USER_DASHBOARD_FAILURE";
export const fetchUserDashboardFailure = createAction(
  FETCH_USER_DASHBOARD_FAILURE
);
