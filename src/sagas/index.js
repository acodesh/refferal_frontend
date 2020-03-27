import { all } from 'redux-saga/effects';
import rocket from './rocketSaga';

// import watchers from other files
export default function* rootSaga() {
  yield all([
    rocket(),
  ]);
}