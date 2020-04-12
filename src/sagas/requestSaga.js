import {call, put, takeLatest, all} from "redux-saga/effects";
import {
  addRequestRequest,
  addRequestSuccess,
  addRequestFailure,
  ADD_REQUEST,
} from "../actions/request-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";
import User from "../utils/user";

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

function* addRequestAction({payload: requestData}) {
  var bodyFormData = new FormData();
  bodyFormData.set("user_id", requestData.user_id);
  bodyFormData.set("title", requestData.title);
  bodyFormData.set("description", requestData.description);
  bodyFormData.set("linkedin_url", requestData.linkedin_url);
  bodyFormData.set("desired_company", requestData.desired_company);
  bodyFormData.set("question_1", requestData.question_1);
  bodyFormData.set("question_2", requestData.question_2);
  const payload = {
    headers: {
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/request`,
  };

  yield put(addRequestRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(addRequestSuccess(data));
  } else {
    yield put(addRequestFailure(error));
  }
}

function* request() {
  yield all([takeLatest(ADD_REQUEST, addRequestAction)]);
}

export default request;
