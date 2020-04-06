import { call, put, takeLatest } from 'redux-saga/effects';
import {
    loginUser,
    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,
    LOGIN_USER

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

function* user() {
  yield takeLatest(LOGIN_USER, userAuth)
}

export default user;