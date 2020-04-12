import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_FAILURE,
  LOGOUT_ACTION_SUCCESS,
  FETCH_USER_DETAIL_SUCCESS,
  FETCH_USER_DETAIL_REQUEST,
  FETCH_USER_DETAIL_FAILURE,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_FAILURE,
} from "../actions/user-action-type";

const initialState = {
  userLoginError: "",
  isLoadingUserLogin: false,
  user: {},
  isLoadingUserSignUp: false,
  userSignUpError: "",
  userSignUpSuccess: false,
  isLoadingForgetPassword: false,
  forgetPasswordError: "",
  forgetPasswordStatus: false,
  isLoadingUserDetails: false,
  userError: "",
  userData: {},
};

const User = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoadingUserLogin: true,
        userLoginError: "",
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload.response,
        isLoadingUserLogin: false,
        userLoginError: "",
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: {},
        isLoadingUserLogin: false,
        userLoginError: payload,
      };

    case SIGN_UP_USER_REQUEST:
      return {
        ...state,
        isLoadingUserSignUp: true,
        userSignUpError: "",
        userSignUpSuccess: false,
      };

    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        isLoadingUserSignUp: false,
        userSignUpError: "",
        userSignUpSuccess: true,
      };

    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        isLoadingUserSignUp: false,
        userSignUpError: payload.error,
        userSignUpSuccess: false,
      };

    case FORGET_PASSWORD_REQUEST:
      return {
        ...state,
        isLoadingForgetPassword: true,
        forgetPasswordError: "",
      };

    case FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoadingForgetPassword: false,
        forgetPasswordError: "",
        forgetPasswordStatus: payload.status,
      };

    case FORGET_PASSWORD_FAILURE:
      return {
        ...state,
        isLoadingForgetPassword: false,
        forgetPasswordError: payload.error,
      };

    case FETCH_USER_DETAIL_REQUEST:
      return {
        ...state,
        isLoadingUserDetails: true,
        userError: "",
      };

    case FETCH_USER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoadingUserDetails: false,
        userError: "",
        userData: payload.response,
      };

    case FETCH_USER_DETAIL_FAILURE:
      return {
        ...state,
        isLoadingUserDetails: false,
        userError: payload.error,
        userData: {},
      };

    case UPDATE_USER_DATA_REQUEST:
      return {
        ...state,
        isLoadingUpdateUser: true,
        updateError: "",
        updateSuccess: "",
      };

    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        isLoadingUpdateUser: false,
        updateError: "",
        updateSuccess: "Details updated successfully.",
      };

    case UPDATE_USER_DATA_FAILURE:
      return {
        ...state,
        isLoadingUpdateUser: false,
        updateError: payload.error,
        updateSuccess: "",
      };

    case LOGOUT_ACTION_SUCCESS:
      return {
        ...state,
        user: {},
      };

    default:
      return {...state};
  }
};

export default User;
