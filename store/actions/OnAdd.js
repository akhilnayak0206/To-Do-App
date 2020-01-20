import { ADD_TASK } from '../types';

export const OnAdd = data => dispatch => {
  dispatch({
    type: ADD_TASK,
    payload: data
  });
};
