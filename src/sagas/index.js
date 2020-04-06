import { all } from 'redux-saga/effects';
import user from './userSaga';

// import watchers from other files
export default function* rootSaga() {
  yield all([
    user(),
  ]);
}