import {createAction} from "redux-actions";

export const FETCH_POST = "FETCH_POST";
export const fetchPost = createAction(FETCH_POST);

export const FETCH_POST_REQUEST = "FETCH_POST_REQUEST";
export const fetchPostRequest = createAction(FETCH_POST_REQUEST);

export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const fetchPostSuccess = createAction(FETCH_POST_SUCCESS);

export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const fetchPostFailure = createAction(FETCH_POST_FAILURE);

export const FETCH_USER_POST = "FETCH_USER_POST";
export const fetchUserPost = createAction(FETCH_USER_POST);

export const FETCH_USER_POST_REQUEST = "FETCH_USER_POST_REQUEST";
export const fetchUserPostRequest = createAction(FETCH_USER_POST_REQUEST);

export const FETCH_USER_POST_SUCCESS = "FETCH_USER_POST_SUCCESS";
export const fetchUserPostSuccess = createAction(FETCH_USER_POST_SUCCESS);

export const FETCH_USER_POST_FAILURE = "FETCH_USER_POST_FAILURE";
export const fetchUserPostFailure = createAction(FETCH_USER_POST_FAILURE);

export const FETCH_SINGLE_POST = "FETCH_SINGLE_POST";
export const fetchSinglePost = createAction(FETCH_SINGLE_POST);

export const FETCH_SINGLE_POST_REQUEST = "FETCH_SINGLE_POST_REQUEST";
export const fetchSinglePostRequest = createAction(FETCH_SINGLE_POST_REQUEST);

export const FETCH_SINGLE_POST_SUCCESS = "FETCH_SINGLE_POST_SUCCESS";
export const fetchSinglePostSuccess = createAction(FETCH_SINGLE_POST_SUCCESS);

export const FETCH_SINGLE_POST_FAILURE = "FETCH_SINGLE_POST_FAILURE";
export const fetchSinglePostFailure = createAction(FETCH_USER_POST_FAILURE);

export const FETCH_SINGLE_USER_POST = "FETCH_SINGLE_USER_POST";
export const fetchSingleUserPost = createAction(FETCH_SINGLE_USER_POST);

export const FETCH_SINGLE_USER_POST_REQUEST = "FETCH_SINGLE_USER_POST_REQUEST";
export const fetchSingleUserPostRequest = createAction(
  FETCH_SINGLE_USER_POST_REQUEST
);

export const FETCH_SINGLE_USER_POST_SUCCESS = "FETCH_SINGLE_USER_POST_SUCCESS";
export const fetchSingleUserPostSuccess = createAction(
  FETCH_SINGLE_USER_POST_SUCCESS
);

export const FETCH_SINGLE_USER_POST_FAILURE = "FETCH_SINGLE_USER_POST_FAILURE";
export const fetchSingleUserPostFailure = createAction(FETCH_USER_POST_FAILURE);

export const ADD_POST = "ADD_POST";
export const addPost = createAction(ADD_POST);

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const addPostRequest = createAction(ADD_POST_REQUEST);

export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const addPostSuccess = createAction(ADD_POST_SUCCESS);

export const ADD_POST_FAILURE = "ADD_POST_FAILURE";
export const addPostFailure = createAction(ADD_POST_FAILURE);
