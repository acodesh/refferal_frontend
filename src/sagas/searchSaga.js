import {call, put, takeLatest, all} from "redux-saga/effects";
import {
  searchActionRequest,
  searchActionSuccess,
  searchActionFailure,
  SEARCH_ACTION,
} from "../actions/search-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";
import User from "../utils/user";
const {getAccessToken, userInfo} = new User();
const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

function* searchUser({payload: search}) {
  const accessToken = getAccessToken();

  console.log("accessToken", accessToken, search);
  const payload = {
    headers: {
      token: `${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/searchByCompanyName/${search}`,
  };

  yield put(searchActionRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(searchActionSuccess(data));
  } else {
    yield put(searchActionFailure(error));
  }
}

function* search() {
  yield all([takeLatest(SEARCH_ACTION, searchUser)]);
}

export default search;
