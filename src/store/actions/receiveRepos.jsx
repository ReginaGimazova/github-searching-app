/* eslint-disable no-undef */
import axios from 'axios';
import { GET_REPOS_FAIL, GET_REPOS_SUCCESS, GET_REPOS_REQUEST } from './types';

// eslint-disable-next-line import/prefer-default-export
export const receiveRepos = () => (dispatch) => {
  const topic = window.location.pathname.substring(1);
  dispatch({
    type: GET_REPOS_REQUEST,
    payload: { error: false, isLoading: true },
  });
  axios
    .get(`https://api.github.com/search/repositories?q=topic:${topic}&sort=stars&order=desc`,
      { headers: { Accept: 'application/vnd.github.mercy-preview+json' } })
    .then((response) => {
      dispatch({
        type: GET_REPOS_SUCCESS,
        payload: { error: false, isLoading: false, data: response.data.items.slice(0, 10) },
      });
    })
    .catch(() => dispatch({
      type: GET_REPOS_FAIL,
      payload: { error: true, isLoading: false },
    }));
};
