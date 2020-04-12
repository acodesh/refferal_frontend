import {combineReducers} from "redux";
import User from "./user";
import Dashboard from "./dashboard";
import Posts from "./posts";
import Search from "./search";
import Request from "./request";

const reducers = combineReducers({
  User,
  Dashboard,
  Posts,
  Search,
  Request,
});

export default reducers;
