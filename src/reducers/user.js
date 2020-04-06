import { 
  LOGIN_USER_SUCCESS,
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE
} from "../actions/user-action-type";

const initialState = {
  userLoginError: '',
  isLoadingUserLogin: false,
  user: []
};

const Rocket = (state = initialState, { type, payload }) => {

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

    default:
      return { ...state };
  }
};

export default Rocket;
