import {call, put, takeLatest, all} from "redux-saga/effects";
import {push} from "connected-react-router";
import {
  loginUser,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  LOGIN_USER,
  SIGN_UP_USER,
  userSignUpRequest,
  userSignUpSuccess,
  userSignUpFailure,
  FORGET_PASSWORD,
  forgetPasswordRequest,
  forgetPasswordSuccess,
  forgetPasswordFailure,
  LOGOUT_ACTION,
  logoutActionRequest,
  logoutActionSuccess,
  logoutActionFailure,
  FETCH_USER_DETAIL,
  getUserDetailsRequest,
  getUserDetailsSuccess,
  getUserDetailsFailure,
  UPDATE_USER_DATA,
  updateUserDataRequest,
  updateUserDataSuccess,
  updateUserDataFailure,
} from "../actions/user-action-type";
import Utils from "../utils";
import CONSTANTS from "../constants";
import User from "../utils/user";
import Storage from "../utils/storage";
import history from "../routes/history";

const {
  httpHelper: {getRequest, postRequest},
} = new Utils().getAll();

const {getAccessToken, removeUserDetailsToken, userInfo} = new User();

export function* userAuth({payload: userData}) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", userData.email);
  bodyFormData.set("password", userData.password);
  const payload = {
    headers: {
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/login`,
  };

  yield put(loginUserRequest());

  const {data, error, status} = yield call(postRequest, payload);

  if (data && !error) {
    const {response} = data;

    Storage.save("userDetails", {
      ...response,
    });
    yield put(loginUserSuccess(data));

    yield history.push("/user/dashboard");
  } else {
    yield put(
      loginUserFailure(
        "your username and password do not match. Please try again."
      )
    );
  }
}

export function* userSignUpSaga({payload: userData}) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", userData.email);
  bodyFormData.set("password", userData.password);
  bodyFormData.set("user_image", userData.user_image);
  bodyFormData.set("bio", userData.bio);
  bodyFormData.set("company_name", userData.company_name);
  bodyFormData.set("company_email", userData.company_email);
  bodyFormData.set("transaction_email", userData.transaction_email);
  bodyFormData.set("last_name", userData.last_name);
  bodyFormData.set("first_name", userData.first_name);

  const accessToken = getAccessToken();

  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/add`,
  };

  yield put(userSignUpRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(userSignUpSuccess(data));
  } else {
    yield put(userSignUpFailure(error));
  }
}

export function* userUpdateSaga({payload: userData}) {
  var bodyFormData = new FormData();
  bodyFormData.set("email", userData.email);
  bodyFormData.set("user_image", userData.user_image);
  bodyFormData.set("bio", userData.bio);
  bodyFormData.set("company_name", userData.company_name);
  bodyFormData.set("company_email", userData.company_email);
  bodyFormData.set("transaction_email", userData.transaction_email);
  bodyFormData.set("last_name", userData.last_name);
  bodyFormData.set("first_name", userData.first_name);
  bodyFormData.set("anonymous_name", userData.anonymous_name);

  const accessToken = getAccessToken();

  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/update`,
  };

  yield put(updateUserDataRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(updateUserDataSuccess(data));
  } else {
    yield put(updateUserDataFailure(error));
  }
}

export function* fetchUserDetailSaga() {
  const accessToken = getAccessToken();

  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/getuserdetailsbyId/${userInfo.userId}`,
  };

  yield put(getUserDetailsRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(getUserDetailsSuccess(data));
  } else {
    yield put(getUserDetailsFailure(error));
  }
}

export function* forgetPasswordSaga({payload: userData}) {
  const accessToken = getAccessToken();

  var bodyFormData = new FormData();
  bodyFormData.set("email", userData.email);
  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Access-Control-Request-Headers": "Content-Type, Authorization",
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
      Accept: "text/json",
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/forgotpassword`,
  };

  yield put(forgetPasswordRequest());

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    yield put(forgetPasswordSuccess(data));
  } else {
    yield put(forgetPasswordFailure(error));
  }
}

export function* logoutUserAction() {
  const accessToken = getAccessToken();
  const payload = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/logout`,
  };

  const {data, error} = yield call(postRequest, payload);

  if (data && !error) {
    removeUserDetailsToken();
    yield put(logoutActionSuccess());
  }

  yield history.push("/");
}

function* user() {
  yield all([
    takeLatest(LOGIN_USER, userAuth),
    takeLatest(SIGN_UP_USER, userSignUpSaga),
    takeLatest(FORGET_PASSWORD, forgetPasswordSaga),
    takeLatest(LOGOUT_ACTION, logoutUserAction),
    takeLatest(UPDATE_USER_DATA, userUpdateSaga),
    takeLatest(FETCH_USER_DETAIL, fetchUserDetailSaga),
  ]);
}

export default user;
