import { call, put, takeLatest } from 'redux-saga/effects';
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

} from '../actions/user-action-type';
import Utils from '../utils';
import CONSTANTS from '../constants';

const {
  httpHelper: {
    getRequest,
    postRequest
  },
} = new Utils().getAll();

export function* userAuth({ payload: userData }) {
  var bodyFormData = new FormData();
  bodyFormData.set('email', userData.email);
  bodyFormData.set('password', userData.password);
  const payload = {
    headers: {
      'Access-Control-Request-Headers': 'Content-Type, Authorization',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin' :'*',
      'Accept': 'text/json'
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/login`,
};

  yield put(loginUserRequest());

  const { data, error } = yield call(postRequest, payload );

  if (data && !error) {
    yield put(loginUserSuccess(data));
  } else {
    yield put(loginUserFailure(error));
  }
}

export function* userSignUpSaga({ payload: userData }) {
  var bodyFormData = new FormData();
  bodyFormData.set('email', userData.email);
  bodyFormData.set('password', userData.password);
  bodyFormData.set('user_image', userData.user_image);
  bodyFormData.set('bio', userData.bio);
  bodyFormData.set('company_name', userData.company_name);
  bodyFormData.set('company_email', userData.company_email);
  bodyFormData.set('transaction_email', userData.transaction_email);
  bodyFormData.set('last_name', userData.last_name);
  bodyFormData.set('first_name', userData.first_name);
  const payload = {
    headers: {
      'Access-Control-Request-Headers': 'Content-Type, Authorization',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin' :'*',
      'Accept': 'text/json'
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/add`,
};

  yield put(userSignUpRequest());

  const { data, error } = yield call(postRequest, payload );

  if (data && !error) {
    yield put(userSignUpSuccess(data));
  } else {
    yield put(userSignUpFailure(error));
  }
}

export function* forgetPasswordSaga({ payload: userData }) {
  var bodyFormData = new FormData();
  bodyFormData.set('email', userData.email);
  const payload = {
    headers: {
      'Access-Control-Request-Headers': 'Content-Type, Authorization',
      'Content-Type': 'multipart/form-data',
      'Access-Control-Allow-Origin' :'*',
      'Accept': 'text/json'
    },
    data: bodyFormData,
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/users/forgotpassword`,
};

  yield put(forgetPasswordRequest());

  const { data, error } = yield call(postRequest, payload );

  if (data && !error) {
    yield put(forgetPasswordSuccess(data));
  } else {
    yield put(forgetPasswordFailure(error));
  }
}


function* user() {
  yield [takeLatest(LOGIN_USER, userAuth),
   takeLatest(SIGN_UP_USER, userSignUpSaga),
   takeLatest(FORGET_PASSWORD, forgetPasswordSaga)
  ]
}

export default user;