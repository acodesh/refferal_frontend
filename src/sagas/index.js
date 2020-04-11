import {all} from "redux-saga/effects";
import user from "./userSaga";
import dashboard from "./dashboardSaga";
import posts from "./postsSaga";

// import watchers from other files
export default function* rootSaga() {
  yield all([user(), dashboard(), posts()]);
}
