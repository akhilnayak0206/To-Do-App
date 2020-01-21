import { ADD_TASK } from '../types';

const OnAdd = data => dispatch => {
  return dispatch({
    type: ADD_TASK,
    payload: data
  });
};

export default OnAdd;
