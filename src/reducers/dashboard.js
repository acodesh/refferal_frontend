import {
  FETCH_USER_DASHBOARD_SUCCESS,
  FETCH_USER_DASHBOARD_REQUEST,
  FETCH_USER_DASHBOARD_FAILURE,
} from "../actions/user-dashboard-action-type";

const initialState = {
  isLoadingDashboard: false,
  dashboardData: [],
  dashboardError: "",
};

const Dashboard = (state = initialState, {type, payload}) => {
  switch (type) {
    case FETCH_USER_DASHBOARD_REQUEST:
      return {
        ...state,
        isLoadingDashboard: true,
        dashboardError: "",
      };

    case FETCH_USER_DASHBOARD_SUCCESS:
      return {
        ...state,
        dashboardData: payload.response,
        isLoadingDashboard: false,
        dashboardError: "",
      };

    case FETCH_USER_DASHBOARD_FAILURE:
      return {
        ...state,
        dashboardData: [],
        isLoadingDashboard: false,
        dashboardError: payload.error,
      };

    default:
      return {...state};
  }
};

export default Dashboard;
