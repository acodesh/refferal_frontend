import {
  FETCH_POST_SUCCESS,
  FETCH_POST_REQUEST,
  FETCH_POST_FAILURE,
  FETCH_USER_POST_SUCCESS,
  FETCH_USER_POST_REQUEST,
  FETCH_USER_POST_FAILURE,
  FETCH_SINGLE_POST_SUCCESS,
  FETCH_SINGLE_POST_REQUEST,
  FETCH_SINGLE_POST_FAILURE,
  FETCH_SINGLE_USER_POST_SUCCESS,
  FETCH_SINGLE_USER_POST_REQUEST,
  FETCH_SINGLE_USER_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_REQUEST,
  ADD_POST_FAILURE,
} from "../actions/posts-action-type";

const initialState = {
  isLoadingPosts: false,
  postsData: [],
  postsError: "",
  isLoadingUserPosts: false,
  postsUserData: [],
  postsUserError: "",
  isLoadingSinglePost: false,
  singlePostData: {},
  singlePostError: "",
  isLoadingSingleUserPost: false,
  singleUserPostData: {},
  singleUserPostError: "",
  isLoadingAddPost: false,
  addPostData: {},
  addPostError: "",
};

const Posts = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        isLoadingPosts: true,
        postsError: "",
      };

    case FETCH_POST_SUCCESS:
      return {
        ...state,
        postsData: payload.response.data,
        isLoadingPosts: false,
        postsError: "",
      };

    case FETCH_POST_FAILURE:
      return {
        ...state,
        postsData: [],
        isLoadingPosts: false,
        postsError: payload.error,
      };

    case FETCH_USER_POST_REQUEST:
      return {
        ...state,
        isLoadingUserPosts: true,
        postsUserError: "",
      };

    case FETCH_USER_POST_SUCCESS:
      return {
        ...state,
        postsUserData: payload.response.data,
        isLoadingUserPosts: false,
        postsUserError: "",
      };

    case FETCH_USER_POST_FAILURE:
      return {
        ...state,
        postsUserData: [],
        isLoadingUserPosts: false,
        postsUserError: payload.error,
      };

    case FETCH_SINGLE_POST_REQUEST:
      return {
        ...state,
        isLoadingSinglePost: true,
        singlePostError: "",
      };

    case FETCH_SINGLE_POST_SUCCESS:
      return {
        ...state,
        singlePostData: payload.response.data,
        isLoadingSinglePost: false,
        singlePostError: "",
      };

    case FETCH_SINGLE_POST_FAILURE:
      return {
        ...state,
        singlePostData: {},
        isLoadingSinglePost: false,
        singlePostError: payload.error,
      };

    case FETCH_SINGLE_USER_POST_REQUEST:
      return {
        ...state,
        isLoadingSingleUserPost: true,
        singleUserPostError: "",
      };

    case FETCH_SINGLE_USER_POST_SUCCESS:
      return {
        ...state,
        singleUserPostData: payload.response.data,
        isLoadingSingleUserPost: false,
        singleUserPostError: "",
      };

    case FETCH_SINGLE_USER_POST_FAILURE:
      return {
        ...state,
        singleUserPostData: {},
        isLoadingSingleUserPost: false,
        singleUserPostError: payload.error,
      };

    case ADD_POST_REQUEST:
      return {
        ...state,
        isLoadingAddPost: true,
        addPostError: "",
      };

    case ADD_POST_SUCCESS:
      return {
        ...state,
        addPostData: payload.data.response,
        isLoadingAddPost: false,
        addPostError: "",
      };

    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostData: {},
        isLoadingAddPost: false,
        addPostError: payload.error,
      };

    default:
      return {...state};
  }
};

export default Posts;
