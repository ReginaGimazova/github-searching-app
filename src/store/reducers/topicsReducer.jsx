import {GET_TOPICS_FAIL, GET_TOPICS_SUCCESS, GET_TOPICS_REQUEST} from "../actions/types";

const initialState = {
  data: [],
  error: '',
  isLoading: false,
};

const topicsReducer = (state=initialState, action) => {
  switch (action.type) {
    case GET_TOPICS_REQUEST:
      return{
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case GET_TOPICS_SUCCESS:
      return{
        ...state,
        data: action.payload.data,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    case GET_TOPICS_FAIL:
      return{
        ...state,
        isLoading: action.payload.isLoading,
        error: action.payload.error,
      };
    default:
      return state;
    }
};

export default topicsReducer;
