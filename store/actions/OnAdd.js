import { ADD_TASK } from '../types';

const OnAdd = data => dispatch => {
  dispatch({
    type: ADD_TASK,
    payload: data
  });
};

export default OnAdd;
