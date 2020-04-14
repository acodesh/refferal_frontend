import {
  SEARCH_ACTION_SUCCESS,
  SEARCH_ACTION_REQUEST,
  SEARCH_ACTION_FAILURE,
} from "../actions/search-action-type";

const initialState = {
  isLoadingSearch: false,
  searchdData: [],
  searchError: "",
};

const Search = (state = initialState, {type, payload}) => {
  switch (type) {
    case SEARCH_ACTION_REQUEST:
      return {
        ...state,
        isLoadingSearch: true,
        searchError: "",
      };

    case SEARCH_ACTION_SUCCESS:
      return {
        ...state,
        isLoadingSearch: false,
        searchError: "",
        searchdData: payload.response.data || [],
      };

    case SEARCH_ACTION_FAILURE:
      return {
        ...state,
        isLoadingSearch: false,
        searchError: payload.error,
        searchdData: [],
      };

    default:
      return {...state};
  }
};

export default Search;
