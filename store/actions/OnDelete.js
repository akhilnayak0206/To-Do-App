import { DELETE_TASK } from '../types';

const OnDelete = data => dispatch => {
  dispatch({
    type: DELETE_TASK,
    payload: data
  });
};

export default OnDelete;
