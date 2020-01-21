import { FILTER_TASK } from '../types';

const OnFilter = data => dispatch => {
  dispatch({
    type: FILTER_TASK,
    payload: data
  });
};

export default OnFilter;
