import { 
  FETCH_ROCKET_SUCCESS,
  FETCH_ROCKET_REQUEST,
  FETCH_ROCKET_FAILURE
} from "../actions/rockets-action-type";

const initialState = {
  rocket: [],
  rocketFailure: '',
  isLoading:false
};

const Rocket = (state = initialState, { type, payload }) => {

  switch (type) {
    case FETCH_ROCKET_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ROCKET_SUCCESS:
      return {
        ...state,
        rocket: payload.result,
        isLoading: false
      };

    case FETCH_ROCKET_FAILURE:
      return {
        ...state,
        rocket: {},
        isLoading: false
      };

    default:
      return { ...state };
  }
};

export default Rocket;
