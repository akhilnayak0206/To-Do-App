import { DELETE_TASK } from '../types';

const OnDelete = deleteKey => dispatch => {
  dispatch({
    type: DELETE_TASK,
    payload: deleteKey
  });
};

export default OnDelete;
