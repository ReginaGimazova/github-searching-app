import { GET_REPOS_FAIL, GET_REPOS_REQUEST, GET_REPOS_SUCCESS } from '../actions/types';

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case GET_REPOS_SUCCESS:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
        data: action.payload.data,
      };
    case GET_REPOS_FAIL:
      return {
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default reposReducer;
