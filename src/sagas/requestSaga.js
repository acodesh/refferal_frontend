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

const {getAccessToken, removeUserDetailsToken, userInfo} = new User();

function* addRequestAction({payload: requestData}) {
  var bodyFormData = new FormData();
  bodyFormData.set("user_id", requestData.user_id);
  bodyFormData.set("title", requestData.title);
  bodyFormData.set("description", requestData.description);
  bodyFormData.set("linkedin_url", requestData.linkedin_url);
  bodyFormData.set("desired_company", requestData.desired_company);
  bodyFormData.set("question_1", requestData.question_1);
  bodyFormData.set("question_2", requestData.question_2);
  bodyFormData.set("post_anonymously", requestData.post_anonymously);
  bodyFormData.set(
    "number_of_professional",
    requestData.number_of_professional
  );
  bodyFormData.set("pay_each_person", requestData.pay_each_person);
  bodyFormData.set("dead_line", requestData.dead_line);

  const accessToken = getAccessToken();

  const payload = {
    headers: {
      token: `${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/createPost`,
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
