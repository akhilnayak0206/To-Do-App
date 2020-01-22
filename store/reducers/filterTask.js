import { FILTER_TASK } from '../types';

const initialState = { selectFilter: 'SAF' };

const filterTask = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_TASK: {
      return { ...state, selectFilter: payload };
    }
    default:
      return state;
  }
};

export default filterTask;
