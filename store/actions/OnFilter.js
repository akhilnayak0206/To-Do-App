import { FILTER_TASK } from '../types';

const OnFilter = filterKey => dispatch => {
  dispatch({
    type: FILTER_TASK,
    payload: filterKey
  });
};

export default OnFilter;
