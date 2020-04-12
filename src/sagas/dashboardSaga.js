import {call, put, takeLatest, all} from "redux-saga/effects";
import {
  fetchUserDashboardRequest,
  fetchUserDashboardSuccess,
  fetchUserDashboardFailure,
  FETCH_USER_DASHBOARD,
} from "../actions/user-dashboard-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";
import User from "../utils/user";

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

const {getAccessToken} = new User();

function* fetchDashboardDetails() {
  const accessToken = getAccessToken();
  const payload = {
    Authorization: `Bearer ${accessToken}`,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/dashboard`,
  };

  yield put(fetchUserDashboardRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(fetchUserDashboardSuccess(data));
  } else {
    yield put(fetchUserDashboardFailure(error));
  }
}

function* dashboard() {
  yield all([takeLatest(FETCH_USER_DASHBOARD, fetchDashboardDetails)]);
}

export default dashboard;
