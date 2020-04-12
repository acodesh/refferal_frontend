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

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

function* searchUser() {
  const payload = {
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/search/${search}`,
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
