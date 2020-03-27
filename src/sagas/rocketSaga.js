import { call, put, takeLatest } from 'redux-saga/effects';
import {
    fetchRocket,
    fetchRocketRequest,
    fetchRocketSuccess,
    fetchRocketFailure,
    FETCH_ROCKET

} from '../actions/rockets-action-type';
import Utils from '../utils';
import CONSTANTS from '../constants';

const {
  httpHelper: {
    getRequest,
  },
} = new Utils().getAll();

export function* rocketListing({ payload: rocketData }) {

  const payload = {
    headers: {
      Authorization: `Bearer ${CONSTANTS.API_KEY}`,
    },
    url: `${CONSTANTS.CONTACT_SERVICE_URL}/launches?page=1&key=${CONSTANTS.API_KEY}`,
};

  yield put(fetchRocketRequest());

  const { data, error } = yield call(getRequest, payload );
  console.log(data, error);
  if (data && !error) {
    yield put(fetchRocketSuccess(data));
  } else {
    yield put(fetchRocketFailure(error));
  }
}

function* rocket() {
  yield takeLatest(FETCH_ROCKET, rocketListing)
}

export default rocket;