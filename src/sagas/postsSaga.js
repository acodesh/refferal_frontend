import {call, put, takeLatest, all} from "redux-saga/effects";
import {
  fetchPostRequest,
  fetchPostSuccess,
  fetchPostFailure,
  FETCH_POST,
  fetchUserPostRequest,
  fetchUserPostSuccess,
  fetchUserPostFailure,
  FETCH_USER_POST,
  fetchSinglePostRequest,
  fetchSinglePostSuccess,
  fetchSinglePostFailure,
  FETCH_SINGLE_POST,
  fetchSingleUserPostRequest,
  fetchSingleUserPostSuccess,
  fetchSingleUserPostFailure,
  FETCH_SINGLE_USER_POST,
  addPostRequest,
  addPostSuccess,
  addPostFailure,
  ADD_POST,
} from "../actions/posts-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";
import User from "../utils/user";

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

const {getAccessToken} = new User();

export function* getPosts() {
  const payload = {
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/guestPostListing`,
  };

  yield put(fetchPostRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(fetchPostSuccess(data));
  } else {
    yield put(fetchPostFailure(error));
  }
}

export function* getUserPosts() {
  const accessToken = getAccessToken();
  const payload = {
    headers: {
      token: `${accessToken}`,
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/postListing`,
  };

  yield put(fetchUserPostRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(fetchUserPostSuccess(data));
  } else {
    yield put(fetchUserPostFailure(error));
  }
}

export function* getSinglePost({payload: id}) {
  const payload = {
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/guestGetPostById/${id}`,
  };

  yield put(fetchSinglePostRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(fetchSinglePostSuccess(data));
  } else {
    yield put(fetchSinglePostFailure(error));
  }
}

export function* getSingleUserPost({payload: id}) {
  const accessToken = getAccessToken();
  const payload = {
    headers: {
      token: `${accessToken}`,
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/getPostById/${id}`,
  };

  yield put(fetchSingleUserPostRequest());

  const {data, error} = yield call(getRequest, payload);

  if (data && !error) {
    yield put(fetchSingleUserPostSuccess(data));
  } else {
    yield put(fetchSingleUserPostFailure(error));
  }
}

export function* addNewPost({payload: postData}) {
  const accessToken = getAccessToken();
  var bodyFormData = new FormData();
  bodyFormData.set("title", postData.title);
  bodyFormData.set("description", postData.description);
  bodyFormData.set("desired_company", postData.desired_company);
  bodyFormData.set("post_anonymously", postData.post_anonymously);
  bodyFormData.set("number_of_professional", postData.number_of_professional);
  bodyFormData.set("pay_per_person", postData.pay_per_person);
  bodyFormData.set("dead_line", postData.dead_line);
  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/posts/createPost`,
  };

  yield put(addPostRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(addPostSuccess(data));
  } else {
    yield put(addPostFailure(error));
  }
}

function* posts() {
  yield all([
    takeLatest(FETCH_POST, getPosts),
    takeLatest(FETCH_USER_POST, getUserPosts),
    takeLatest(FETCH_SINGLE_POST, getSinglePost),
    takeLatest(FETCH_SINGLE_USER_POST, getSingleUserPost),
    takeLatest(ADD_POST, addNewPost),
  ]);
}

export default posts;
