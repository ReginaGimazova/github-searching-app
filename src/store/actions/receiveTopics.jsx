/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { GET_TOPICS_FAIL, GET_TOPICS_REQUEST, GET_TOPICS_SUCCESS } from './types';

export const receiveTopics = inputValue => (dispatch) => {
  dispatch({
    type: GET_TOPICS_REQUEST,
    payload: { error: false, isLoading: true },
  });
  axios
    .get(`https://api.github.com/search/topics?q=${inputValue}+is:featured`,
      { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
    .then((response) => {
      dispatch({
        type: GET_TOPICS_SUCCESS,
        payload: { error: false, isLoading: false, data: response.data.items },
      });
    })
    .catch(() => dispatch({
      type: GET_TOPICS_FAIL,
      payload: { error: true, isLoading: false },
    }));
};
