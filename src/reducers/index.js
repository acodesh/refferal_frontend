import {combineReducers} from "redux";
import User from "./user";
import Dashboard from "./dashboard";
import Posts from "./posts";

const reducers = combineReducers({
  User,
  Dashboard,
  Posts,
});

export default reducers;
