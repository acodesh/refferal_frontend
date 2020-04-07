import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_REQUEST,
  SIGN_UP_USER_FAILURE,
  FORGET_PASSWORD_SUCCESS,
  FORGET_PASSWORD_REQUEST,
  FORGET_PASSWORD_FAILURE
} from "../actions/user-action-type";

const initialState = {
  userLoginError: '',
  isLoadingUserLogin: false,
  user: [],
  isLoadingUserSignUp: false,
  userSignUpError: '',
  isLoadingForgetPassword: false,
  forgetPasswordError: '',
  forgetPasswordStatus: false
};

const User = (state = initialState, { type, payload }) => {

  switch (type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoadingUserLogin: true,
        userLoginError: '',
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: payload.data.response,
        isLoadingUserLogin: false,
        userLoginError: ''
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        user: [],
        isLoadingUserLogin: false,
        userLoginError: payload.error
      };

      case SIGN_UP_USER_REQUEST:
        return {
          ...state,
          isLoadingUserSignUp: true,
          userSignUpError: '',
        };

      case SIGN_UP_USER_SUCCESS:
        return {
          ...state,
          isLoadingUserSignUp: false,
          userSignUpError: ''
        };

      case SIGN_UP_USER_FAILURE:
        return {
          ...state,
          isLoadingUserSignUp: false,
          userSignUpError: payload.error
        };

        case FORGET_PASSWORD_REQUEST:
          return {
            ...state,
            isLoadingForgetPassword: true,
            forgetPasswordError: '',
          };

        case FORGET_PASSWORD_SUCCESS:
          return {
            ...state,
            isLoadingForgetPassword: false,
            forgetPasswordError: '',
            forgetPasswordStatus: payload.data.status
          };

        case FORGET_PASSWORD_FAILURE:
          return {
            ...state,
            isLoadingForgetPassword: false,
            forgetPasswordError: payload.error
          };

    default:
      return { ...state };
  }
};

export default User;
