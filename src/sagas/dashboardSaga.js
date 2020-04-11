import {call, put, takeLatest} from "redux-saga/effects";
import {
  fetchUserDashboardRequest,
  fetchUserDashboardSuccess,
  fetchUserDashboardFailure,
  FETCH_USER_DASHBOARD,
} from "../actions/user-dashboard-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

export function* fetchDashboardDetails() {
  const payload = {
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
  yield [takeLatest(FETCH_USER_DASHBOARD, fetchDashboardDetails)];
}

export default dashboard;
