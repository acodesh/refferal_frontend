import {
  ADD_REQUEST_SUCCESS,
  ADD_REQUEST_REQUEST,
  ADD_REQUEST_FAILURE,
} from "../actions/request-action-type";

const initialState = {
  isLoadingRequest: false,
  requestData: "",
  requestError: "",
};

const Request = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_REQUEST_REQUEST:
      return {
        ...state,
        isLoadingRequest: true,
        requestError: "",
      };

    case ADD_REQUEST_SUCCESS:
      return {
        ...state,
        isLoadingRequest: false,
        requestError: "",
        requestData: "Request has been sent.",
      };

    case ADD_REQUEST_FAILURE:
      return {
        ...state,
        isLoadingRequest: false,
        requestError: payload.error,
        requestData: "",
      };

    default:
      return {...state};
  }
};

export default Request;
